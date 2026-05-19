#!/bin/bash
set -e

cd ~/groundwork

echo "Pulling latest..."
git pull

echo "Installing dependencies..."
npm install

echo "Building..."
npm run build

echo "Copying static assets into standalone..."
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public 2>/dev/null || true

echo "Restarting service..."
sudo systemctl restart groundwork

echo "Done. Status:"
sudo systemctl is-active groundwork
