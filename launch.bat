@echo off
title DeadStartup Platform Launcher
echo ========================================================
echo   DEADSTARTUP - Turning Failures Into Second Chances
echo ========================================================
echo.
echo Starting local web server on port 5173...
start "" "http://localhost:5173/"
node server.js
pause
