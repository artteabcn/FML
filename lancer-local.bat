@echo off
cd /d "%~dp0"
echo [FML CAPITAL] Generation des pages...
node build\build.mjs
if errorlevel 1 (
  echo Erreur : Node.js est requis pour generer les pages.
  pause
  exit /b 1
)
echo.
echo Site local : http://localhost:8788  (Ctrl+C pour arreter)
start "" http://localhost:8788
npx --yes wrangler pages dev . --port 8788 --compatibility-date=2026-05-14
if errorlevel 1 python -m http.server 8788
pause
