# MIPP - Plantilla de Sitio Web Estático

Plantilla institucional para el Instituto Milenio en Inteligencia de Plantas (MIPP). 

## 📋 Descripción

Sitio web estático, limpio y accesible diseñado específicamente para instituciones de investigación. La plantilla incluye todos los componentes necesarios para gestionar contenido institucional, publicaciones, eventos, investigadores e iniciativas **sin necesidad de base de datos**.

## ✨ Características Principales

- ✅ **100% Estático**: No requiere base de datos ni servidor backend
- ✅ **Contenido Editable**: Gestión mediante archivos Markdown y JSON
- ✅ **Diseño Responsive**: Optimizado para todos los dispositivos
- ✅ **Accesible**: Cumple con estándares de accesibilidad web
- ✅ **SEO Optimizado**: Incluye JSON-LD para eventos y structured data
- ✅ **Rendimiento**: Carga rápida, sin librerías pesadas
- ✅ **Componentes Reutilizables**: Sistema modular de componentes

## 🎨 Paleta de Colores

```css
--brand-blue-dark: #203e8f
--brand-cyan: #0fb1c8
--brand-gray: #adafb2
--brand-blue: #005dac
```

## 📁 Estructura del Proyecto

```
mipp-v5/
├── index.html                 # Página principal
├── que-es-mipp.html          # Información institucional
├── investigacion.html        # Áreas de investigación
├── investigadores.html       # Directorio de investigadores
├── publicaciones.html        # Listado de publicaciones
├── eventos.html              # Calendario de eventos
├── iniciativas.html          # Iniciativas y programas
├── contacto.html             # Formulario de contacto
│
├── css/
│   ├── variables.css         # Variables CSS (colores, tipografía)
│   ├── reset.css             # Reset y estilos base
│   ├── layout.css            # Sistema de grid y layout
│   ├── components.css        # Componentes reutilizables
│   ├── header-footer.css     # Header, footer y navegación
│   ├── sections.css          # Secciones específicas
│   └── main.css              # Importa todos los estilos
│
├── js/
│   └── main.js               # Funcionalidades JavaScript
│
├── assets/
│   ├── images/               # Imágenes del sitio
│   └── fonts/                # Fuentes personalizadas (opcional)
│
└── content/                  # Contenido estático editable
    ├── investigators/        # Perfiles de investigadores (.md)
    ├── publications/         # Datos de publicaciones (.json)
    ├── events/               # Información de eventos (.md)
    └── initiatives/          # Datos de iniciativas (.json)
```

## 🚀 Inicio Rápido

### 1. Servidor Local

Para visualizar el sitio localmente, usa cualquier servidor HTTP simple:

```bash
# Opción 1: Python
python3 -m http.server 8000

# Opción 2: Node.js (http-server)
npx http-server

# Opción 3: PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

### 2. Despliegue

La plantilla puede desplegarse en cualquier servicio de hosting estático:

- **GitHub Pages**: Sube a un repositorio y activa GitHub Pages
- **Netlify**: Arrastra la carpeta o conecta tu repositorio
- **Vercel**: Deploy automático desde Git
- **AWS S3 + CloudFront**: Hosting tradicional
- **Servidor propio**: Sube vía FTP/SFTP

## 📝 Edición de Contenido

### Cambiar Colores de Marca

Edita `/css/variables.css`:

```css
:root {
  --brand-blue-dark: #TU-COLOR;
  --brand-cyan: #TU-COLOR;
  --brand-gray: #TU-COLOR;
  --brand-blue: #TU-COLOR;
}
```

### Agregar un Investigador

1. Crea un archivo en `/content/investigators/nombre-apellido.md`:

```markdown
---
name: Nombre Apellido
slug: nombre-apellido
position: Investigador Principal
affiliation: Universidad
email: email@universidad.cl
orcid: 0000-0000-0000-0000
areas:
  - Área 1
  - Área 2
---

# Dr./Dra. Nombre Apellido

## Biografía
Tu biografía aquí...

## Líneas de Investigación
- Línea 1
- Línea 2
```

2. Agrega la tarjeta en `investigadores.html`:

```html
<div class="card investigator-card" 
     data-searchable="Nombre Apellido Universidad Área"
     data-category="investigador-principal">
  <div class="card__body">
    <div class="investigator-card__image">
      <img src="/assets/images/investigators/nombre-apellido.jpg" alt="Dr. Nombre">
    </div>
    <h3 class="investigator-card__name">Dr. Nombre Apellido</h3>
    <p class="investigator-card__affiliation">Universidad</p>
    <div class="mb-md">
      <span class="badge badge--primary">Investigador Principal</span>
    </div>
    <p class="text-muted" style="font-size: var(--font-size-sm);">
      Descripción breve
    </p>
    <div class="investigator-card__links">
      <a href="/investigadores/nombre-apellido.html" class="btn btn--small btn--primary">Ver perfil</a>
    </div>
  </div>
</div>
```

### Agregar una Publicación

Edita `/content/publications/publications.json` y agrega:

```json
{
  "title": "Título del artículo",
  "authors": "Autor1, Autor2, Autor3",
  "journal": "Nombre de la Revista",
  "year": "2025",
  "volume": "10",
  "issue": "1",
  "pages": "1-10",
  "doi": "10.xxxx/xxxxx",
  "url": "https://doi.org/10.xxxx/xxxxx",
  "abstract": "Resumen del artículo...",
  "keywords": ["keyword1", "keyword2"],
  "type": "research article",
  "open_access": true
}
```

Luego agrega el item en `publicaciones.html`:

```html
<div class="publication-item" 
     data-searchable="título autores revista keywords"
     data-category="2025"
     data-publication='{"title":"...","authors":"..."}'>
  <h3 class="publication-item__title">Título del artículo</h3>
  <div class="publication-item__authors">Autores</div>
  <div class="publication-item__meta">
    <strong>Revista</strong> • 2025 • Vol. 10(1) • pp. 1-10
  </div>
  <div class="publication-item__tags">
    <span class="tag">Tag1</span>
    <span class="tag">Tag2</span>
  </div>
  <div class="publication-item__actions">
    <a href="DOI-URL" class="btn btn--small btn--primary" target="_blank">Ver artículo</a>
    <button class="btn btn--small btn--ghost" onclick="copyDOI('DOI')">Copiar DOI</button>
  </div>
</div>
```

### Agregar un Evento

1. Crea `/content/events/nombre-evento.md`:

```markdown
---
title: Nombre del Evento
slug: nombre-evento
date: 2025-MM-DD
end_date: 2025-MM-DD
location: Ciudad, País
type: symposium/workshop/seminar
featured: true/false
status: upcoming/past
---

# Título del Evento

Descripción completa del evento...

## JSON-LD
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Nombre del Evento",
  "startDate": "2025-MM-DD",
  "endDate": "2025-MM-DD",
  "location": {...}
}
\`\`\`
```

2. Agrega la tarjeta en `eventos.html`

### Configurar Formulario de Contacto

El formulario usa `mailto` por defecto. Para usar un servicio externo:

#### Opción 1: Formspree (Recomendado)

1. Regístrate en [Formspree.io](https://formspree.io)
2. Crea un nuevo formulario
3. Copia el ID del formulario
4. En `contacto.html`, cambia:

```html
<form action="https://formspree.io/f/TU-FORM-ID" method="POST">
```

#### Opción 2: Netlify Forms

Si despliegas en Netlify, simplemente agrega `netlify` al form:

```html
<form name="contact" method="POST" data-netlify="true">
```

#### Opción 3: Google Forms

Crea un Google Form y usa un iframe o redirección.

## 🎯 Componentes Disponibles

### Botones
```html
<a href="#" class="btn btn--primary">Primario</a>
<a href="#" class="btn btn--secondary">Secundario</a>
<a href="#" class="btn btn--outline">Outline</a>
<a href="#" class="btn btn--ghost">Ghost</a>
```

### Cards
```html
<div class="card">
  <div class="card__image">
    <img src="..." alt="...">
  </div>
  <div class="card__body">
    <h3 class="card__title">Título</h3>
    <p class="card__description">Descripción</p>
    <div class="card__footer">
      <a href="#" class="btn btn--primary">Acción</a>
    </div>
  </div>
</div>
```

### Badges
```html
<span class="badge badge--primary">Primario</span>
<span class="badge badge--secondary">Secundario</span>
<span class="badge badge--gray">Gris</span>
```

### Grid System
```html
<div class="grid grid--2"><!-- 2 columnas --></div>
<div class="grid grid--3"><!-- 3 columnas --></div>
<div class="grid grid--4"><!-- 4 columnas --></div>
```

### Section Layouts
```html
<!-- Sección estándar -->
<section class="section">
  <div class="container">
    ...
  </div>
</section>

<!-- Sección con fondo alternativo -->
<section class="section section--alt">...</section>

<!-- Sección con fondo gris -->
<section class="section section--gray">...</section>

<!-- Sección con fondo de marca -->
<section class="section section--primary">...</section>
```

### Split Section (Imagen + Contenido)
```html
<div class="split-section">
  <div class="split-section__image">
    <img src="..." alt="...">
  </div>
  <div class="split-section__content">
    <h2>Título</h2>
    <p>Contenido...</p>
  </div>
</div>

<!-- Versión invertida -->
<div class="split-section split-section--reverse">...</div>
```

## 🔧 Funcionalidades JavaScript

### Búsqueda
```javascript
// Ya implementada en todas las páginas con clase .search-container
// Busca en elementos con atributo data-searchable
```

### Filtros
```javascript
// Uso
const filterButtons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('[data-category]');
window.mippUtils.initFilters(filterButtons, items, 'category');
```

### Export CSV
```javascript
// Exportar array de objetos a CSV
window.mippUtils.exportToCSV(data, 'filename.csv');
```

### Modales
```html
<!-- Trigger -->
<button data-modal-target="modalId">Abrir Modal</button>

<!-- Modal -->
<div class="modal" id="modalId">
  <div class="modal__backdrop"></div>
  <div class="modal__content">
    <div class="modal__header">
      <h2 class="modal__title">Título</h2>
      <button class="modal__close" data-modal-close>&times;</button>
    </div>
    <div class="modal__body">
      Contenido...
    </div>
  </div>
</div>
```

## 📱 Responsive Design

La plantilla es completamente responsive:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Los breakpoints están definidos en `/css/variables.css`

## ♿ Accesibilidad

- Roles ARIA apropiados
- Alt text en todas las imágenes
- Contraste de colores WCAG AA
- Navegación por teclado
- Skip links implementables
- Semantic HTML

## 🔍 SEO

- Meta tags apropiados
- Open Graph tags
- JSON-LD para eventos
- URLs amigables
- Sitemap generarable
- robots.txt configurable

## 📸 Imágenes

### Formatos Recomendados
- **Hero images**: 1920x1080px (WebP)
- **Cards**: 800x600px (WebP)
- **Avatars**: 400x400px (WebP)
- **Logos**: SVG preferentemente

### Optimización
Usa herramientas como:
- [Squoosh](https://squoosh.app/)
- [TinyPNG](https://tinypng.com/)
- ImageMagick (CLI)

```bash
# Convertir a WebP
convert input.jpg -quality 85 output.webp
```

## 🌐 Navegadores Soportados

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Licencia

Este proyecto está diseñado específicamente para MIPP. Para uso en otros proyectos, consulta con el equipo de desarrollo.

## 🤝 Contribuciones

Para sugerencias o mejoras:
1. Documenta el cambio propuesto
2. Mantén la consistencia de código
3. Prueba en múltiples navegadores
4. Verifica accesibilidad

## 📞 Soporte

Para dudas o problemas técnicos:
- Email: soporte@mipp.cl
- Documentación: Este README

## 🔄 Actualizaciones Futuras

Posibles mejoras a considerar:
- [ ] Generator estático (11ty, Hugo)
- [ ] Sistema de búsqueda más avanzado (Algolia, Fuse.js)
- [ ] Dark mode
- [ ] Internacionalización (i18n)
- [ ] Progressive Web App (PWA)
- [ ] Analytics integration

---

**Desarrollado para MIPP - Milenio en Inteligencia de Plantas**  
Última actualización: Octubre 2025
