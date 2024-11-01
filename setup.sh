#!/bin/bash

# Create project structure
mkdir -p backend/{public/temp,src/{controllers,db,middlewares,models,routes,utils}}

# Create files
touch backend/src/{app.js,constants.js,index.js}
touch backend/{package.json,package-lock.json}

# Initialize npm project
cd backend
npm init -y

# Add "type": "module" to package.json
jq '. + { "type": "module" }' package.json > tmp.$$.json && mv tmp.$$.json package.json

# Add dev script to package.json
jq '.scripts.dev = "node src/index.js"' package.json > tmp.$$.json && mv tmp.$$.json package.json

# Install necessary dev dependencies
npm install --save-dev prettier dotenv

echo "Project structure created and dependencies installed!"
