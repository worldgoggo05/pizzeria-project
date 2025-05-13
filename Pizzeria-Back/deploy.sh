#!/bin/bash

#PRODUCTION
git reset --hard
git checkout main
git pull origin main

npm i
npm run build
pm2 start process.config.js --env production

# # DEVELOPMENT
# git reset --hard
# git checkout develop
# git pull origin develop
# пpm i
# pm2 start "npm run start:dev" --name=PIZZERIA




# Terminal commands
# chmod +x ./deploy.sh   /to change mode => execution => sh deploy.sh (to run)