#! /usr/bin/env bash

# shellcheck disable=SC1004

if [ -z "$VERCEL_TOKEN" ]; then
    echo 'This script requires the VERCEL_TOKEN environment variable to be set. Create one at https://vercel.com/account/tokens.'
    exit 1
fi

TEAM_ID=$(jq -r '.orgId' .vercel/project.json)
PROJECT_ID=$(jq -r '.projectId' .vercel/project.json)
export TEAM_ID PROJECT_ID

echo -e '\n[info]: Deleting env vars\n'
./bin/vercel-delete-env-vars.sh

echo -e '\n[info]: Creating env vars\n'
# shellcheck source=/dev/null
source <(jq -r  '. |
  to_entries[] |
  "echo \"Creating \(.key) '"'"'\(.value)'"'"'\"; \\
    http --quiet POST \\
    \"https://api.vercel.com/v7/projects/\(env.PROJECT_ID)/env?teamId=\(env.TEAM_ID)\"  \\
    Authorization:\"Bearer \(env.VERCEL_TOKEN)\"  \\
    type=encrypted  \\
    key=\(.key)  \\
    value=\"\(.value)\" \\
    target:='"'"'[\"development\", \"preview\", \"production\"]'"'"';
  "
' sample-config.json)