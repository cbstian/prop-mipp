#!/bin/bash

# MIPP Website - Script de Inicio Rápido
# Este script inicia un servidor local para visualizar el sitio

echo "🚀 Iniciando servidor local para MIPP..."
echo ""

# Detectar qué servidor usar
if command -v python3 &> /dev/null; then
    echo "✅ Usando Python 3"
    echo "📍 Abre tu navegador en: http://localhost:8000"
    echo ""
    echo "Presiona Ctrl+C para detener el servidor"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ Usando Python 2"
    echo "📍 Abre tu navegador en: http://localhost:8000"
    echo ""
    echo "Presiona Ctrl+C para detener el servidor"
    echo ""
    python -m SimpleHTTPServer 8000
elif command -v php &> /dev/null; then
    echo "✅ Usando PHP"
    echo "📍 Abre tu navegador en: http://localhost:8000"
    echo ""
    echo "Presiona Ctrl+C para detener el servidor"
    echo ""
    php -S localhost:8000
else
    echo "❌ No se encontró Python ni PHP"
    echo ""
    echo "Por favor instala Python o PHP, o abre index.html directamente en tu navegador"
    echo ""
    echo "Alternativamente, puedes instalar un servidor simple con:"
    echo "  npm install -g http-server"
    echo "  http-server"
fi
