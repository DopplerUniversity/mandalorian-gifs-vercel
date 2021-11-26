#! /usr/bin/env bash

source <(jq -rj $'.development | to_entries[] | "vercel env rm \(.key) development -y > /dev/null 2>&1;"' sample-config.json) &
source <(jq -rj $'.preview | to_entries[] | "vercel env rm \(.key) preview -y > /dev/null 2>&1;"' sample-config.json) &
source <(jq -rj $'.production | to_entries[] | "vercel env rm \(.key) production -y > /dev/null 2>&1;"' sample-config.json) &
