#!/usr/bin/env bash

set -e

./bin/doppler-check.sh

echo -e '\n[info]: Creating "mandalorian-gifs-vercel" project'
doppler import
doppler setup --no-interactive --silent

echo -e '\n[info]: Setting random Webhook secrets'
doppler secrets set --silent --config dev WEBHOOK_SECRET "$(openssl rand -base64 32)"
doppler secrets set --silent --config prev WEBHOOK_SECRET "$(openssl rand -base64 32)"
doppler secrets set --silent --config prd WEBHOOK_SECRET "$(openssl rand -base64 32)"

echo -e '\n[info]: Tweaking staging and production values'
doppler secrets delete DEBUG_COLORS --config prev -y --silent
doppler secrets delete DEBUG_COLORS --config prd -y --silent

echo -e '\n[info]: Opening the Doppler dashboard'
sleep 1
doppler open dashboard
