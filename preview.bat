@echo off
title BLVD — Preview Local
echo.
echo  ========================================
echo    BLVD Urban Footwear — Preview
echo  ========================================
echo.
echo  Iniciando servidor...
start "" /B npx serve . -p 3030 > nul 2>&1
timeout /t 2 /noisy > nul
echo  Creando enlace publico con Cloudflare...
echo.
npx cloudflared tunnel --url http://localhost:3030
pause
