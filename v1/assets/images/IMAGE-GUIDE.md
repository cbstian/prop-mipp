# Guía de Imágenes del Sitio MIPP

Este documento mapea qué imágenes se están usando en cada página y cómo agregar nuevas.

## 📁 Estructura de Carpetas

```
assets/images/
├── posts/          # Imágenes para publicaciones, eventos, secciones de contenido
├── personas/       # Fotografías del equipo (investigadores, directores, coordinadores)
└── IMAGE-GUIDE.md  # Este archivo
```

## 🖼️ Imágenes en Uso

### Página de Inicio (`index.html`)

| Ubicación | Imagen | Tamaño Recomendado |
|-----------|--------|-------------------|
| Evento destacado | `posts/Stefan-Voigt-final.jpg` | 1600x900px |
| Sección "¿Qué es MIPP?" | `posts/DSC_0073-scaled.jpg` | 800x600px |

### Página de Investigación (`research.html`)

| Sección | Imagen | Tamaño Recomendado |
|---------|--------|-------------------|
| Productividad Empresarial | `posts/3d813412-903d-4baa-9857-7aa143a20f5d-scaled.jpg` | 800x600px |
| Innovación | `posts/Diseno-sin-titulo-27.png` | 800x600px |
| Mercado Laboral | `posts/Captura-de-Pantalla-2024-10-23-a-las-18.42.52.png` | 800x600px |
| Desarrollo Regional | `posts/EscueladeVerano2023_LINKEDIN-APAISADO.jpg` | 800x600px |

### Página Sobre Nosotros (`about.html`)

| Sección | Imagen | Tamaño Recomendado |
|---------|--------|-------------------|
| Nuestra Misión | `posts/Blue-White-Modern-Business-Webinar-Instagram-Post-25.png` | 800x600px |
| Nuestra Visión | `posts/Blue-White-Modern-Business-Webinar-Instagram-Post-33.png` | 800x600px |

### Página de Eventos (`events.html`)

Imágenes cargadas dinámicamente desde `assets/js/events.js`:

| Evento | Imagen |
|--------|--------|
| Seminario: Productividad y Desarrollo Sostenible | `posts/Stefan-Voigt-final.jpg` |
| Workshop: Metodologías de Evaluación | `posts/Workshop-rrss-v4.jpg` |
| Conferencia Anual MIPP 2025 | `posts/ebp72024060700000000001001_1-1.png` |
| Lanzamiento Estudio: Mercado Laboral | `posts/Graficas-RRSS_1-1080px-1.png` |
| Panel: Innovación y Competitividad | `posts/Diseno-sin-titulo-21.png` |

### Página de Investigadores (`investigators.html`)

Fotografías cargadas dinámicamente desde `assets/js/investigators.js`:

| Investigador | Imagen |
|--------------|--------|
| Dr. Juan Escobar | `personas/Juan-Escobar-1x1-1.jpg` |
| Dra. Elisa Durán Micco | `personas/ElisaDuranMicco-1.jpg` |
| Dr. Alvin Roth | `personas/440px-Alvin_E._Roth_3_2012.jpg` |
| Dr. Álvaro Canales | `personas/a-canales.jpg` |
| Dr. Benjamín Villena | `personas/benjamin.jpg` |

## ➕ Cómo Agregar Nuevas Imágenes

### Para Investigadores

1. **Preparar la foto**:
   - Formato cuadrado (1:1), mínimo 400x400px
   - Formato JPG (mejor compresión)
   - Peso máximo: 100KB
   - Fondo profesional y buena iluminación

2. **Nombrar el archivo**:
   ```
   nombre-apellido.jpg
   ```
   Ejemplo: `maria-gonzalez.jpg`

3. **Guardar en**: `assets/images/personas/`

4. **Actualizar el código** en `assets/js/investigators.js`:
   ```javascript
   {
     id: 7,
     name: "Dra. María González",
     photo: "assets/images/personas/maria-gonzalez.jpg",
     // ... resto de propiedades
   }
   ```

### Para Eventos

1. **Preparar la imagen**:
   - Formato 16:9 (1600x900px recomendado)
   - Formato JPG o PNG
   - Peso máximo: 200KB
   - Relevante al tema del evento

2. **Nombrar el archivo**:
   ```
   evento-nombre-descriptivo.jpg
   ```
   Ejemplo: `evento-seminario-innovacion-2025.jpg`

3. **Guardar en**: `assets/images/posts/`

4. **Actualizar el código** en `assets/js/events.js`:
   ```javascript
   {
     id: 6,
     title: "Nuevo Seminario",
     image: "assets/images/posts/evento-seminario-innovacion-2025.jpg",
     // ... resto de propiedades
   }
   ```

### Para Secciones de Contenido

1. **Preparar la imagen**:
   - Formato 4:3 u 16:9 según la sección
   - Mínimo 800x600px
   - Formato JPG o PNG
   - Peso máximo: 300KB

2. **Guardar en**: `assets/images/posts/`

3. **Actualizar el HTML** de la página correspondiente:
   ```html
   <img src="assets/images/posts/tu-imagen.jpg" 
        alt="Descripción de la imagen" 
        class="split-image"
        loading="lazy">
   ```

## 🔧 Optimización de Imágenes

Antes de subir imágenes, optimízalas para web:

### Herramientas Recomendadas
- **Online**: [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/)
- **CLI**: `imagemagick`, `jpegoptim`, `pngquant`

### Ejemplo con ImageMagick
```bash
# Redimensionar y optimizar
convert original.jpg -resize 800x600^ -quality 85 optimizada.jpg

# Para fotos de investigadores (cuadrado)
convert original.jpg -resize 400x400^ -gravity center -extent 400x400 -quality 85 nombre-apellido.jpg
```

## 📋 Imágenes Disponibles pero No en Uso

Las siguientes imágenes están en las carpetas pero actualmente no se usan en el sitio:

### `posts/`
- `Blue-White-Modern-Business-Webinar-Instagram-Post-8.png`
- `Diseno-sin-titulo.zip-1.png`
- `Escuela-Verano-1.jpeg`
- `JohnList-Charla-Mipp_Twitter.png`

Estas pueden usarse para nuevos eventos, publicaciones o secciones según sea necesario.

## ⚠️ Convenciones Importantes

1. **Siempre usar rutas relativas**: `assets/images/...` NO `/assets/images/...`
2. **Nombres en minúsculas con guiones**: `mi-imagen.jpg` NO `Mi Imagen.jpg`
3. **Siempre incluir atributo `alt`** para accesibilidad
4. **Usar `loading="lazy"`** para imágenes debajo del fold
5. **Probar en navegador** después de agregar una imagen nueva

## 🎨 Tamaños de Referencia por Uso

| Uso | Dimensiones | Ratio | Peso Máx |
|-----|-------------|-------|----------|
| Foto investigador | 400x400px | 1:1 | 100KB |
| Evento destacado | 1600x900px | 16:9 | 200KB |
| Evento regular | 800x600px | 4:3 | 150KB |
| Sección split | 800x600px | 4:3 | 200KB |
| Hero/Banner | 1920x800px | 21:9 | 300KB |

## 📝 Checklist al Agregar Imágenes

- [ ] Imagen optimizada para web (peso adecuado)
- [ ] Nombre de archivo descriptivo y en minúsculas
- [ ] Guardada en la carpeta correcta (`posts/` o `personas/`)
- [ ] Ruta actualizada en HTML o JS según corresponda
- [ ] Atributo `alt` descriptivo agregado
- [ ] Probada en navegador (sin error 404)
- [ ] Responsive (se ve bien en móvil y desktop)

---

**Última actualización**: Octubre 2025
