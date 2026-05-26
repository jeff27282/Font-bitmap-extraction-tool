@echo off
cd /d "%~dp0"
echo ========================================
echo   Font Bitmap Extractor - Building...
echo ========================================
echo.
npx electron-builder --win portable --config.win.signAndEditExecutable=false
echo.
echo ========================================
echo   Build complete!
echo   Output: dist\Font Bitmap Extractor_Portable.exe
echo ========================================
pause
