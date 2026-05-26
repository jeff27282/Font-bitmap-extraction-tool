@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================
echo   Font Bitmap Extractor - Starting...
echo ========================================
echo.
npx electron .
echo.
echo Application closed.
pause
