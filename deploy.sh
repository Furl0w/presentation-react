#!/bin/bash

set -e -u

if [[ $* == *--clean* ]];
then bash clean.sh

fi

if [[ $* == *--quickstart* ]];
then
npm run build;
cd presentation-server;
npm start;
else
npm install;
npm run build;

cd presentation-server;
npm install;
npm start;
fi

