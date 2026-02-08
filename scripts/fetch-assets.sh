#!/usr/bin/env bash
set -euo pipefail

ASSET_DIR="public/assets"
mkdir -p "$ASSET_DIR"

fetch() {
  local url="$1"
  local name="$2"
  echo "Downloading $name"
  curl -L "$url" -o "$ASSET_DIR/$name"
}

fetch "https://www.verticalstudio.ai/logo-light.png" "logo.png"
fetch "https://www.verticalstudio.ai/gen-image-1.png" "gen-image-1.png"
fetch "https://www.verticalstudio.ai/gen-image-2.png" "gen-image-2.png"
fetch "https://www.verticalstudio.ai/gen-image-3.png" "gen-image-3.png"
fetch "https://www.verticalstudio.ai/gen-image-4.png" "gen-image-4.png"
fetch "https://www.verticalstudio.ai/gen-image-5.png" "gen-image-5.png"
fetch "https://www.verticalstudio.ai/home-magic-dark.webp" "home-magic-dark.webp"
fetch "https://www.verticalstudio.ai/home-1-dark.webp" "home-1-dark.webp"
fetch "https://www.verticalstudio.ai/home-2-dark.webp" "home-2-dark.webp"
fetch "https://www.verticalstudio.ai/home-3-dark.webp" "home-3-dark.webp"
fetch "https://www.verticalstudio.ai/home-hero.png" "home-hero.png"
fetch "https://www.verticalstudio.ai/home-challenges.png" "home-challenges.png"
fetch "https://www.verticalstudio.ai/footer-shape.png" "footer-shape.png"
fetch "https://www.verticalstudio.ai/footer-logo.png" "footer-logo.png"
fetch "https://www.verticalstudio.ai/vertical-1.png" "vertical-1.png"
fetch "https://www.verticalstudio.ai/vertical-2.png" "vertical-2.png"
fetch "https://www.verticalstudio.ai/about-video-cover.png" "about-video-cover.png"
fetch "https://www.verticalstudio.ai/token-hero.png" "token-hero.png"
fetch "https://www.verticalstudio.ai/token-graph.png" "token-graph.png"
fetch "https://www.verticalstudio.ai/token-chart.png" "token-chart.png"

for i in {1..25}; do
  fetch "https://www.verticalstudio.ai/partner-logo-${i}.svg" "partner-logo-${i}.svg"
done

# Blog cover placeholders (update once fetched)
for i in {1..8}; do
  fetch "https://www.verticalstudio.ai/blog-${i}.png" "blog-${i}.png" || true
done
