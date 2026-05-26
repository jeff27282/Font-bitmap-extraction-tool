@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================
echo   Font Bitmap Extractor - Starting...
echo ========================================
echo.
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)
npx electron .
echo.
echo Application closed.
pause
