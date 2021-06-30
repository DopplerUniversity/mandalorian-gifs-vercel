#! /usr/bin/env bash

if [ -z "$VERCEL_TOKEN" ]; then
    echo 'This script requires the VERCEL_TOKEN environment variable to be set. Create one at https://vercel.com/account/tokens.'
    exit 1
fi

TEAM_ID=$(jq -r '.orgId' .vercel/project.json)
PROJECT_ID=$(jq -r '.projectId' .vercel/project.json)
export TEAM_ID PROJECT_ID

ENV_IDS=$(http "https://api.vercel.com/v7/projects/$PROJECT_ID/env?teamId=$TEAM_ID" Authorization:"Bearer $VERCEL_TOKEN" | jq -r '.envs[].id')
for ENV_ID in $ENV_IDS;
  do
  echo "Deleting $ENV_ID";
  http --quiet DELETE "https://api.vercel.com/v7/projects/$PROJECT_ID/env/$ENV_ID?teamId=$TEAM_ID" Authorization:"Bearer $VERCEL_TOKEN";
done
