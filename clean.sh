#!/bin/sh
echo "Cleaning"

rm -rf node_modules
rm -f package-lock.json

cd presentation-server;
rm -rf node_modules
rm -f package-lock.json