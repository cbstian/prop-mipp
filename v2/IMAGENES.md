# Guía de Imágenes para MIPP

## 📸 Imágenes Necesarias

Este documento lista todas las imágenes que necesitas agregar al sitio web. Las rutas son relativas a `/assets/images/`.

### Imágenes Principales

#### Logo y Favicon
- `logo.svg` - Logo principal de MIPP (preferentemente SVG)
- `favicon.svg` - Icono del sitio (32x32px mínimo)

#### Hero Images (1920x1080px recomendado)
- `hero-bg.jpg` - Hero principal (home)
- `about-hero.jpg` - Hero de "Qué es MIPP"
- `team-hero.jpg` - Hero de investigadores
- `publications-hero.jpg` - Hero de publicaciones
- `events-hero.jpg` - Hero de eventos
- `initiatives-hero.jpg` - Hero de iniciativas
- `research-hero.jpg` - Hero de investigación

#### Secciones de Home
- `about-1.jpg` - Sección "Investigación de Excelencia"
- `publications.jpg` - Sección "Publicaciones Destacadas"

#### Secciones Institucionales (800x600px)
- `mission.jpg` - Misión de MIPP
- `vision.jpg` - Visión de MIPP

#### Investigación (800x600px)
- `research/signaling.jpg` - Señalización celular
- `research/genomics.jpg` - Genómica y bioinformática
- `research/ecology.jpg` - Ecología vegetal
- `research/biotech.jpg` - Biotecnología aplicada

#### Eventos (800x600px)
- `events/genomics-seminar.jpg`
- `events/bioinformatics-workshop.jpg`
- `events/latin-congress.jpg`
- `events/signaling-symposium.jpg`
- `events/summer-school.jpg`
- `events/ecology-workshop.jpg`

#### Iniciativas (800x600px)
- `initiatives/collaboration-network.jpg`
- `initiatives/doctoral-program.jpg`
- `initiatives/seminar-series.jpg`
- `initiatives/plant-biobank.jpg`
- `initiatives/summer-school.jpg`
- `initiatives/outreach.jpg`
- `initiatives/climate-adaptation.jpg`
- `initiatives/inaugural-symposium.jpg`
- `initiatives/tech-transfer.jpg`

#### Avatares de Investigadores (400x400px)
- `investigators/default-avatar.jpg` - Avatar por defecto
- `investigators/maria-garcia.jpg`
- `investigators/roberto-lopez.jpg`
- `investigators/patricia-silva.jpg`
- `investigators/juan-martinez.jpg`
- `investigators/ana-rodriguez.jpg`
- `investigators/carlos-fernandez.jpg`

## 🎨 Especificaciones Técnicas

### Formatos Recomendados
```
Hero images:    1920x1080px, WebP o JPG de alta calidad
Cards:          800x600px, WebP o JPG optimizado
Avatares:       400x400px (1:1), WebP o JPG
Logo:           SVG (escalable) o PNG transparente
```

### Optimización
```bash
# Convertir a WebP con ImageMagick
convert input.jpg -quality 85 output.webp

# Redimensionar
convert input.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 output.jpg

# Optimizar JPG
jpegoptim --max=85 *.jpg
```

## 🌐 Fuentes de Imágenes Gratuitas

### Sitios Recomendados
- [Unsplash](https://unsplash.com/) - Fotos de alta calidad
- [Pexels](https://pexels.com/) - Biblioteca extensa
- [Pixabay](https://pixabay.com/) - Diversidad de contenido
- [Wikimedia Commons](https://commons.wikimedia.org/) - Imágenes científicas

### Búsquedas Sugeridas
```
- "plant research laboratory"
- "scientific microscope plants"
- "plant genomics"
- "plant ecology forest"
- "scientists working laboratory"
- "university campus Chile"
- "conference seminar presentation"
- "students learning science"
```

## 📋 Checklist de Imágenes

### Críticas (Necesarias para producción)
- [ ] logo.svg
- [ ] favicon.svg
- [ ] hero-bg.jpg
- [ ] default-avatar.jpg

### Importantes (Mejorar experiencia)
- [ ] Todas las hero images
- [ ] Imágenes de secciones principales
- [ ] Avatares de investigadores destacados

### Opcionales (Pueden usar placeholders)
- [ ] Imágenes de eventos específicos
- [ ] Imágenes de iniciativas

## 🎭 Placeholders Temporales

Si no tienes las imágenes aún, puedes usar:

### Servicios de Placeholder
```html
<!-- Placeholder.com -->
<img src="https://via.placeholder.com/1920x1080/203e8f/ffffff?text=MIPP" alt="Hero">

<!-- Unsplash Random -->
<img src="https://source.unsplash.com/1920x1080/?plant,science" alt="Hero">

<!-- Lorem Picsum -->
<img src="https://picsum.photos/1920/1080" alt="Hero">
```

### CSS para Fallback
El código ya incluye manejo de errores:
```html
<img src="imagen.jpg" alt="..." onerror="this.style.display='none'">
```

## 📝 Notas Importantes

1. **Licencias**: Asegúrate de tener los derechos de uso de todas las imágenes
2. **Créditos**: Si es necesario, agrega atribuciones en el footer
3. **Alt Text**: Todas las imágenes deben tener texto alternativo descriptivo
4. **Accesibilidad**: Contraste adecuado en imágenes con texto superpuesto
5. **Performance**: Optimiza todas las imágenes antes de subirlas
6. **Responsive**: Considera crear versiones móviles más pequeñas

## 🔄 Proceso de Actualización

1. Descarga/crea las imágenes
2. Optimízalas según especificaciones
3. Súbelas a `/assets/images/` en la estructura correcta
4. Verifica que los nombres coincidan con el código HTML
5. Prueba la carga en diferentes dispositivos
6. Implementa lazy loading si es necesario (ya incluido con `loading="lazy"`)

---

**Tip**: Empieza con las imágenes críticas y agrega las demás progresivamente.
