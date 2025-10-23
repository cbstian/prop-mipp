# MIPP - Guía Rápida de Inicio

## 🚀 Inicio Rápido (5 minutos)

### 1. Abrir el sitio localmente

Simplemente abre `index.html` en tu navegador:

```bash
# Opción 1: Doble clic en index.html

# Opción 2: Desde terminal
cd /home/sebastian/www/mipp-v4
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

### 2. Servidor local (recomendado)

Para probar correctamente, usa un servidor local:

**Python 3:**
```bash
cd /home/sebastian/www/mipp-v4
python3 -m http.server 8000
```

Luego abre: http://localhost:8000

**Node.js (con npx):**
```bash
npx serve
```

**PHP:**
```bash
php -S localhost:8000
```

## 📝 Editar Contenido

### Investigadores

Edita `assets/js/investigators.js`:

```javascript
const investigatorsData = [
  {
    id: 1,
    name: "Tu Nombre",
    role: "Tu Rol",
    // ... resto de campos
  }
];
```

### Publicaciones

Edita `assets/js/publications.js`:

```javascript
const publicationsData = [
  {
    id: 1,
    title: "Título de tu publicación",
    // ... resto de campos
  }
];
```

### Eventos

Edita `assets/js/events.js`:

```javascript
const eventsData = [
  {
    id: 1,
    title: "Nombre del evento",
    date: "2025-12-15",  // YYYY-MM-DD
    featured: true,  // true para destacar
    // ... resto de campos
  }
];
```

## 🎨 Cambiar Colores

Edita `assets/css/styles.css`, líneas 7-10:

```css
:root {
  --brand-blue-dark: #203e8f;  /* Tu color 1 */
  --brand-cyan: #0fb1c8;       /* Tu color 2 */
  --brand-gray: #adafb2;       /* Tu color 3 */
  --brand-blue: #005dac;       /* Tu color 4 */
}
```

## 🖼️ Cambiar Imágenes

1. Guarda tus imágenes en `assets/images/`
2. Reemplaza las rutas en los HTML:

```html
<!-- Antes -->
<img src="assets/images/placeholder.jpg" alt="...">

<!-- Después -->
<img src="assets/images/mi-imagen.jpg" alt="...">
```

### Tamaños recomendados:

- **Hero/Secciones:** 1920x1080px
- **Investigadores:** 800x800px (cuadradas)
- **Eventos:** 1200x600px (horizontal)
- **Cards:** 600x400px

## 📧 Configurar Formulario

Edita `contact.html`, línea ~72:

```html
<form action="https://formsubmit.co/TU-EMAIL@example.com" method="POST">
```

## 🌐 Publicar en Internet

### Opción 1: Netlify (Gratis, Fácil)

1. Crea cuenta en [netlify.com](https://netlify.com)
2. Arrastra la carpeta `mipp-v4` a Netlify
3. ¡Listo! Tu sitio está en línea

### Opción 2: GitHub Pages (Gratis)

```bash
cd /home/sebastian/www/mipp-v4
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/mipp.git
git push -u origin main
```

Luego en GitHub:
- Settings → Pages → Source: main branch → Save

### Opción 3: Vercel (Gratis)

1. Instala Vercel CLI: `npm i -g vercel`
2. En la carpeta del proyecto: `vercel`
3. Sigue las instrucciones

## 🔍 Probar SEO

1. Abre https://search.google.com/test/rich-results
2. Pega la URL de tu sitio o el código HTML
3. Verifica que aparezcan los datos estructurados

## ♿ Probar Accesibilidad

1. Abre https://wave.webaim.org/
2. Ingresa la URL de tu sitio
3. Revisa los errores y advertencias

## 🐛 Problemas Comunes

### Las imágenes no se ven

✅ Verifica que las rutas sean relativas:
```html
<!-- ✅ Correcto -->
<img src="assets/images/foto.jpg">

<!-- ❌ Incorrecto -->
<img src="/assets/images/foto.jpg">
```

### El formulario no envía

✅ Verifica que configuraste el email en `contact.html`

### Los filtros no funcionan

✅ Abre DevTools (F12) → Console
✅ Busca errores en rojo

## 📞 Ayuda

**Documentación completa:** Lee `README.md`
**Checklist deployment:** Lee `DEPLOYMENT-CHECKLIST.md`

---

**¡Éxito con tu sitio MIPP! 🎉**
