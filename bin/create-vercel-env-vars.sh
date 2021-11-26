#! /usr/bin/env bash

source <(jq -rj '.development | to_entries[] | "echo -n \"\(.value)\" | vercel env add \(.key) development > /dev/null 2>&1;\n"' sample-config.json) &
source <(jq -rj '.preview | to_entries[] | "echo -n \"\(.value)\" | vercel env add \(.key) preview > /dev/null 2>&1;\n"' sample-config.json) &
source <(jq -rj '.production | to_entries[] | "echo -n \"\(.value)\" | vercel env add \(.key) production > /dev/null 2>&1;\n"' sample-config.json) &