# MIPP - Millennium Institute for Productive Public Policy

Plantilla de sitio web estático institucional para MIPP (mipp.cl).

## 📋 Descripción

Sitio web estático, limpio y accesible diseñado para centros de investigación e instituciones académicas. Inspirado en referentes como CENIA, CEIC, CINNDA y CEP Chile.

**Características principales:**
- ✅ 100% estático (HTML/CSS/JavaScript)
- ✅ Sin base de datos ni backend
- ✅ Contenido gestionado mediante archivos (markdown/JSON)
- ✅ Diseño responsive y accesible (WCAG 2.1 AA)
- ✅ Optimizado para SEO
- ✅ Componentes reutilizables
- ✅ Filtros y búsqueda client-side
- ✅ Export a CSV
- ✅ JSON-LD para structured data

## 🎨 Paleta de Colores

```css
--brand-blue-dark: #203e8f
--brand-cyan: #0fb1c8
--brand-gray: #adafb2
--brand-blue: #005dac
```

**Tipografías:**
- UI: Inter
- Títulos: Merriweather

## 📁 Estructura del Proyecto

```
mipp-v4/
├── index.html              # Página principal
├── about.html              # Qué es MIPP
├── research.html           # Investigación
├── investigators.html      # Investigadores
├── publications.html       # Publicaciones
├── events.html            # Agenda/Eventos
├── initiatives.html       # Iniciativas
├── contact.html           # Contacto
├── sitemap.xml            # Sitemap para SEO
├── robots.txt             # Robots.txt
│
├── assets/
│   ├── css/
│   │   ├── styles.css           # Estilos principales
│   │   ├── investigators.css    # Estilos específicos
│   │   ├── publications.css     # Estilos específicos
│   │   └── events.css          # Estilos específicos
│   │
│   ├── js/
│   │   ├── main.js             # JavaScript principal
│   │   ├── investigators.js    # Lógica investigadores
│   │   ├── publications.js     # Lógica publicaciones
│   │   └── events.js           # Lógica eventos
│   │
│   └── images/
│       ├── investigators/      # Fotos investigadores
│       ├── events/            # Imágenes eventos
│       └── ...
│
└── content/
    ├── investigators/         # Datos investigadores (JSON/MD)
    ├── publications/          # Datos publicaciones (JSON)
    └── events/               # Datos eventos (JSON/MD)
```

## 🚀 Páginas Incluidas

### 1. **Home (index.html)**
- Hero con gradiente y CTA
- Evento destacado
- Sección "Qué es MIPP" con imagen lateral
- Áreas de investigación (grid de cards)
- Estadísticas animadas (contadores)
- Publicaciones recientes
- CTA final

### 2. **Qué es MIPP (about.html)**
- Misión y Visión con imágenes alternadas
- Valores institucionales
- Historia y trayectoria
- CTA a equipo

### 3. **Investigación (research.html)**
- Cuatro líneas de investigación detalladas:
  - Productividad Empresarial
  - Innovación
  - Mercado Laboral
  - Desarrollo Regional
- Secciones alternadas con imágenes
- Metodología
- Links a publicaciones por área

### 4. **Investigadores (investigators.html)**
- Grid de tarjetas con fotos
- Filtros por rol e institución
- Búsqueda por nombre
- Modal con biografía completa
- Links a perfiles y contacto
- JSON-LD para Schema.org Person

### 5. **Publicaciones (publications.html)**
- Listado completo de publicaciones
- Filtros por tipo, año y área
- Búsqueda client-side
- Export a CSV
- Links a PDF y DOI
- Contador de resultados

### 6. **Eventos (events.html)**
- Evento destacado (featured)
- Grid de eventos
- Filtros: Todos / Próximos / Pasados
- JSON-LD para Schema.org Event
- Metadata completa (fecha, hora, lugar)

### 7. **Iniciativas (initiatives.html)**
- Iniciativas activas
- Iniciativas finalizadas (archivadas)
- Estados: recurring / one-off / archived
- Descripción y período

### 8. **Contacto (contact.html)**
- Formulario de contacto
- Validación client-side
- Configurado para FormSubmit.co (editable)
- Información de contacto
- Redes sociales
- Placeholder para mapa

## 🛠️ Funcionalidades

### JavaScript Interactivo

**main.js:**
- Menú móvil toggle
- Animación de contadores estadísticos
- Sistema de modals
- Smooth scroll
- Navegación activa
- Validación de formularios
- Lazy loading de imágenes

**investigators.js:**
- Carga dinámica de investigadores
- Filtros por rol, institución
- Búsqueda por nombre
- Modal con detalles completos

**publications.js:**
- Carga dinámica de publicaciones
- Filtros múltiples (tipo, año, área)
- Búsqueda full-text
- Export a CSV
- Contador de resultados

**events.js:**
- Carga de eventos
- Detección automática de eventos pasados
- Evento destacado
- Filtros por estado
- JSON-LD automático

## 📝 Gestión de Contenido

### Investigadores

Los datos de investigadores están en `assets/js/investigators.js` como array de objetos:

```javascript
{
  id: 1,
  name: "Dr. María González",
  role: "Director",
  institution: "Universidad de Chile",
  photo: "assets/images/investigators/maria-gonzalez.jpg",
  email: "mgonzalez@mipp.cl",
  website: "https://example.com/maria-gonzalez",
  areas: ["Productividad", "Innovación"],
  bio: "...",
  education: [...],
  publications: [...]
}
```

**Para agregar un investigador:**
1. Añadir foto a `assets/images/investigators/`
2. Agregar objeto al array `investigatorsData`
3. El sitio se actualiza automáticamente

### Publicaciones

Datos en `assets/js/publications.js`:

```javascript
{
  id: 1,
  title: "...",
  authors: ["Autor 1", "Autor 2"],
  type: "Journal Article",
  year: 2025,
  journal: "...",
  areas: ["Productividad"],
  abstract: "...",
  pdf: "#",
  doi: "10.1234/..."
}
```

### Eventos

Datos en `assets/js/events.js`:

```javascript
{
  id: 1,
  title: "...",
  date: "2025-11-15",
  time: "09:00",
  location: "...",
  locationOnline: false,
  featured: true,  // Marcar como destacado
  image: "...",
  description: "...",
  speakers: [...],
  tags: [...],
  registrationUrl: "#"
}
```

## 🎯 Edición Visual

### Colores

Editar en `assets/css/styles.css`, sección `:root`:

```css
:root {
  --brand-blue-dark: #203e8f;
  --brand-cyan: #0fb1c8;
  /* ... */
}
```

### Tipografías

Cambiar en `<head>` de cada HTML y en `:root`:

```css
--font-ui: 'Inter', sans-serif;
--font-display: 'Merriweather', serif;
```

### Imágenes

Reemplazar imágenes en `assets/images/`:
- Hero, secciones: tamaño recomendado 1920x1080px
- Investigadores: 800x800px (cuadradas)
- Eventos: 1200x600px (landscape)

Usar WebP/AVIF para mejor rendimiento.

## 🌐 SEO y Accesibilidad

### Meta Tags

Cada página incluye:
- `<title>` único
- `<meta name="description">`
- Open Graph tags
- Twitter Card tags

### JSON-LD Structured Data

**Organización (index.html):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MIPP",
  ...
}
```

**Eventos (events.html):**
Cada evento genera automáticamente JSON-LD tipo `Event`.

**Personas (investigators.html):**
Modal puede extenderse para incluir JSON-LD tipo `Person`.

### Accesibilidad

- ✅ Contraste ≥ 4.5:1
- ✅ Alt text en imágenes
- ✅ Semántica HTML5 correcta
- ✅ Un `<h1>` por página
- ✅ `aria-label` en botones
- ✅ Focus visible
- ✅ Navegación por teclado

## 📦 Deployment

### Opción 1: Hosting Estático

**Netlify/Vercel/GitHub Pages:**

1. Crear repositorio Git
2. Push del código
3. Conectar con Netlify/Vercel
4. Deploy automático

**Comandos:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <tu-repo>
git push -u origin main
```

### Opción 2: Servidor Web Tradicional

Subir vía FTP/SFTP a:
- Apache
- Nginx
- Cualquier hosting con soporte HTML estático

### Configuración del Servidor

**Para Apache (.htaccess):**
```apache
# Habilitar compresión
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>

# Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## 🔧 Personalización

### Cambiar URL del Formulario de Contacto

Editar `contact.html`, línea del `<form>`:

```html
<form action="https://formsubmit.co/TU@EMAIL.com" method="POST">
```

**Alternativas:**
- [FormSubmit.co](https://formsubmit.co/) (gratis, sin registro)
- [Formspree.io](https://formspree.io/)
- [Getform.io](https://getform.io/)
- Tu propio backend

### Agregar Google Analytics

En `<head>` de todas las páginas:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Agregar Google Maps

Reemplazar placeholder en `contact.html`:

```html
<iframe 
  src="https://www.google.com/maps/embed?pb=..." 
  width="100%" 
  height="400" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy">
</iframe>
```

## 📱 Responsive

Breakpoints:
- Desktop: > 768px
- Mobile/Tablet: ≤ 768px

Todos los componentes son responsive automáticamente.

## ⚡ Performance

### Optimizaciones Incluidas

- CSS minificado posible con herramientas
- Lazy loading de imágenes
- Fonts preconnect
- Transiciones CSS (no JS)
- Client-side filtering (sin server)

### Recomendaciones

1. **Comprimir imágenes:**
   ```bash
   # Instalar imagemagick
   convert input.jpg -quality 85 -resize 1920x1080 output.jpg
   ```

2. **Usar WebP:**
   ```bash
   cwebp -q 85 input.jpg -o output.webp
   ```

3. **Minificar CSS/JS:**
   - [CSS Minifier](https://cssminifier.com/)
   - [JS Minifier](https://javascript-minifier.com/)

## 🐛 Troubleshooting

### Las imágenes no se cargan

Verificar rutas relativas:
```html
<!-- Correcto -->
<img src="assets/images/foto.jpg">

<!-- Incorrecto -->
<img src="/assets/images/foto.jpg">
```

### El formulario no funciona

1. Verificar action del form
2. Revisar CORS si usas servicio externo
3. Verificar console del navegador

### Los filtros no funcionan

1. Abrir DevTools Console
2. Verificar errores JavaScript
3. Asegurarse de que los datos están en el array correcto

## 📚 Recursos Adicionales

- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Schema.org](https://schema.org/)

## 📄 Licencia

Este proyecto es una plantilla de código abierto para uso de MIPP.

## 👥 Créditos

Desarrollado para MIPP - Millennium Institute for Productive Public Policy

---

**¿Necesitas ayuda?** Contacta al equipo técnico en tech@mipp.cl
