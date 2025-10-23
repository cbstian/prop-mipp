#!/bin/bash

# Script para convertir todos los enlaces absolutos (/) a enlaces relativos
# Esto permite que el sitio funcione correctamente al abrirlo con file:// o en subdirectorios

echo "🔧 Corrigiendo enlaces en archivos HTML..."

# Función para determinar la ruta relativa correcta según el nivel del archivo
fix_file() {
    local file="$1"
    local dir=$(dirname "$file")
    local prefix=""
    
    # Determinar el prefijo según el nivel de directorio
    if [[ "$dir" == "." ]]; then
        # Archivos en la raíz - sin prefijo
        prefix=""
    elif [[ "$dir" == "./investigadores" ]]; then
        # Archivos en /investigadores/ - necesitan ../ para volver a la raíz
        prefix="../"
    else
        # Otros subdirectorios - también necesitan ../
        prefix="../"
    fi
    
    echo "  Procesando: $file (prefix: '$prefix')"
    
    # Crear archivo temporal
    temp_file="${file}.tmp"
    
    # Corregir enlaces según el nivel del archivo
    if [[ "$prefix" == "" ]]; then
        # Archivos en la raíz
        sed -e 's|href="/\([^"]*\)"|href="\1"|g' \
            -e 's|src="/\([^"]*\)"|src="\1"|g' \
            -e 's|href="index.html" class="header__logo"|href="index.html" class="header__logo"|g' \
            -e 's|href="/" class="nav__link|href="index.html" class="nav__link|g' \
            -e 's|href="/" class="footer__link|href="index.html" class="footer__link|g' \
            "$file" > "$temp_file"
    else
        # Archivos en subdirectorios
        sed -e "s|href=\"/\\([^\"]*\\)\"|href=\"${prefix}\\1\"|g" \
            -e "s|src=\"/\\([^\"]*\\)\"|src=\"${prefix}\\1\"|g" \
            -e "s|href=\"${prefix}\" class=\"header__logo\"|href=\"${prefix}index.html\" class=\"header__logo\"|g" \
            -e "s|href=\"${prefix}\" class=\"nav__link|href=\"${prefix}index.html\" class=\"nav__link|g" \
            -e "s|href=\"${prefix}\" class=\"footer__link|href=\"${prefix}index.html\" class=\"footer__link|g" \
            "$file" > "$temp_file"
    fi
    
    # Reemplazar el archivo original
    mv "$temp_file" "$file"
}

# Procesar todos los archivos HTML
for html_file in $(find . -name "*.html" -type f); do
    fix_file "$html_file"
done

echo "✅ ¡Listo! Todos los enlaces han sido corregidos."
echo ""
echo "Resumen de cambios:"
echo "  - Todos los href=\"/...\" convertidos a rutas relativas"
echo "  - Todos los src=\"/...\" convertidos a rutas relativas"
echo "  - Enlaces a '/' convertidos a 'index.html'"
echo ""
echo "Ahora puedes abrir los archivos HTML directamente en el navegador."
