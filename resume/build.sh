#!/usr/bin/env bash
# Render resume.html to public/resume.pdf. Chrome is the renderer so the PDF
# matches what the HTML looks like in a browser, one A4 page, no browser
# header or footer.
set -euo pipefail
cd "$(dirname "$0")/.."
google-chrome --headless=new --disable-gpu --no-sandbox --no-pdf-header-footer \
  --print-to-pdf=public/resume.pdf "file://$PWD/resume/resume.html"
echo "wrote public/resume.pdf"
