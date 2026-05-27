#!/bin/bash
set -e

# Build frontend with Vite
npx vite build

# Build backend with esbuild in ESM format (supports import.meta and top-level await)
npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outfile=dist/index.js

# Create CJS wrapper for deployment compatibility
echo 'import("./index.js");' > dist/index.cjs

# Copy blog markdown into dist so the sitemap route can scan it in production
mkdir -p dist/blog-content
cp -r client/src/content/blog/*.md dist/blog-content/ 2>/dev/null || true

# Generate WebP variant of og-image for og:image alternate (smaller, modern format)
if [ -f dist/public/og-image.png ]; then
  if command -v magick >/dev/null 2>&1; then
    magick dist/public/og-image.png -quality 82 dist/public/og-image.webp || true
  elif command -v convert >/dev/null 2>&1; then
    convert dist/public/og-image.png -quality 82 dist/public/og-image.webp || true
  fi
fi
