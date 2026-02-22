#!/bin/bash
set -e

# Build frontend with Vite
npx vite build

# Build backend with esbuild in ESM format (supports import.meta and top-level await)
npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outfile=dist/index.js

# Create CJS wrapper for deployment compatibility
echo 'import("./index.js");' > dist/index.cjs
