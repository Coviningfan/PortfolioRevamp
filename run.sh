
#!/bin/bash

echo "🔍 Running linter..."
npm run lint

if [ $? -ne 0 ]; then
  echo "❌ Linting failed. Please fix the issues before continuing."
  exit 1
fi

echo "🏗️ Building project..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed. Please fix the issues before continuing."
  exit 1
fi

echo "🚀 Starting server..."
node server/index.js
