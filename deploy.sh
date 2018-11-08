#!/bin/bash

set -e -u

if [[ $* == *--clean* ]];
then bash clean.sh

fi

npm install;
npm run build;

cd presentation-server;
npm install;
npm start;