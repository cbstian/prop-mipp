# 📚 MIPP Website - Índice de Documentación

Bienvenido a la plantilla de sitio web estático para MIPP (Millennium Institute for Productive Public Policy).

## 🎯 Empezar Aquí

### Para Ver el Sitio Inmediatamente

**Opción 1 - Navegador directo:**
- Abre `index.html` con doble clic

**Opción 2 - Servidor local (recomendado):**
```bash
./start-server.sh
# Luego abre http://localhost:8000 en tu navegador
```

### Para Entender el Proyecto

1. **[PROJECT-SUMMARY.md](PROJECT-SUMMARY.md)** ⭐
   - Resumen completo del proyecto
   - Qué está incluido
   - Características implementadas
   - Estadísticas

2. **[QUICK-START.md](QUICK-START.md)** 🚀
   - Guía rápida de 5 minutos
   - Cómo editar contenido
   - Cómo cambiar colores e imágenes
   - Cómo publicar en internet

3. **[README.md](README.md)** 📖
   - Documentación técnica completa
   - Estructura del proyecto
   - Guías de uso detalladas
   - SEO y accesibilidad
   - Personalización avanzada

4. **[DEPLOYMENT-CHECKLIST.md](DEPLOYMENT-CHECKLIST.md)** ✅
   - Checklist completo pre-deployment
   - Verificaciones de contenido, SEO, performance
   - Testing en diferentes dispositivos

## 📁 Estructura del Proyecto

```
mipp-v4/
│
├── 📄 Páginas HTML (8 páginas)
│   ├── index.html              # Home
│   ├── about.html              # Qué es MIPP
│   ├── research.html           # Investigación
│   ├── investigators.html      # Investigadores
│   ├── publications.html       # Publicaciones
│   ├── events.html            # Eventos
│   ├── initiatives.html       # Iniciativas
│   └── contact.html           # Contacto
│
├── 🎨 Assets
│   ├── css/                   # Estilos
│   ├── js/                    # JavaScript
│   └── images/                # Imágenes
│
├── 📝 Contenido
│   ├── investigators/         # Datos investigadores
│   ├── publications/          # Datos publicaciones
│   └── events/               # Datos eventos
│
└── 📚 Documentación
    ├── README.md
    ├── QUICK-START.md
    ├── PROJECT-SUMMARY.md
    ├── DEPLOYMENT-CHECKLIST.md
    └── INDEX.md (este archivo)
```

## 🎨 Características Principales

✅ **100% Estático** - Sin base de datos ni backend
✅ **Responsive** - Funciona en móvil, tablet y desktop
✅ **Accesible** - WCAG 2.1 AA compliant
✅ **SEO Optimizado** - Meta tags, JSON-LD, sitemap
✅ **Filtros Client-side** - Investigadores, publicaciones, eventos
✅ **Export CSV** - Exportar publicaciones
✅ **Modals** - Perfiles de investigadores
✅ **Animaciones** - Contadores, transiciones suaves
✅ **Formulario** - Contacto con validación

## 🛠️ Tareas Comunes

### Editar Investigadores
📁 Archivo: `assets/js/investigators.js`
📖 Guía: [README.md](README.md#gestión-de-contenido)

### Editar Publicaciones
📁 Archivo: `assets/js/publications.js`
📖 Guía: [README.md](README.md#publicaciones)

### Editar Eventos
📁 Archivo: `assets/js/events.js`
📖 Guía: [README.md](README.md#eventos)

### Cambiar Colores
📁 Archivo: `assets/css/styles.css` (líneas 7-10)
📖 Guía: [QUICK-START.md](QUICK-START.md#-cambiar-colores)

### Cambiar Imágenes
📁 Carpeta: `assets/images/`
📖 Guía: [QUICK-START.md](QUICK-START.md#-cambiar-imágenes)

### Configurar Formulario
📁 Archivo: `contact.html` (línea ~72)
📖 Guía: [README.md](README.md#cambiar-url-del-formulario-de-contacto)

## 🚀 Deploy a Producción

### Opciones de Hosting (todas gratuitas):

1. **Netlify** (Recomendado)
   - Arrastra y suelta la carpeta
   - Deploy automático
   - HTTPS gratis
   - [netlify.com](https://netlify.com)

2. **Vercel**
   - `npm i -g vercel` → `vercel`
   - Deploy en segundos
   - [vercel.com](https://vercel.com)

3. **GitHub Pages**
   - Push a GitHub
   - Activa Pages en Settings
   - [pages.github.com](https://pages.github.com)

📖 **Guía completa:** [README.md](README.md#deployment)

## 🎓 Recursos de Aprendizaje

### Si eres nuevo en desarrollo web:

- **HTML:** [MDN HTML Tutorial](https://developer.mozilla.org/es/docs/Learn/HTML)
- **CSS:** [MDN CSS Tutorial](https://developer.mozilla.org/es/docs/Learn/CSS)
- **JavaScript:** [MDN JavaScript Guide](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide)

### Herramientas útiles:

- **Optimizar imágenes:** [TinyPNG](https://tinypng.com/)
- **Test SEO:** [Google Rich Results](https://search.google.com/test/rich-results)
- **Test accesibilidad:** [WAVE](https://wave.webaim.org/)
- **Test performance:** [PageSpeed Insights](https://pagespeed.web.dev/)

## ❓ FAQ

### ¿Puedo usar esto con un CMS?
Sí, puedes integrar con Netlify CMS, Forestry, o cualquier Headless CMS.

### ¿Puedo agregar un blog?
Sí, sigue el mismo patrón de publicaciones para crear posts de blog.

### ¿Funciona sin internet?
Sí, excepto las fuentes de Google Fonts (puedes auto-hospedarlas).

### ¿Necesito saber programar?
No para editar contenido básico. Sí para personalizaciones avanzadas.

### ¿Puedo vender este template?
Este código es para uso de MIPP. Consulta sobre licencia si necesitas distribuir.

## 📞 Soporte

- **Documentación:** Lee los archivos .md incluidos
- **Issues técnicos:** Revisa la consola del navegador (F12)
- **Preguntas:** Consulta con el equipo técnico

## 🎉 ¡Todo Listo!

El sitio está **100% completo y listo para producción**. Solo necesitas:

1. ✅ Reemplazar contenido de ejemplo con contenido real
2. ✅ Añadir imágenes reales
3. ✅ Configurar formulario de contacto
4. ✅ Deploy a tu servidor

**¡Éxito con tu sitio MIPP! 🚀**

---

**Última actualización:** Octubre 2025  
**Versión:** 1.0  
**Desarrollado para:** MIPP - Millennium Institute for Productive Public Policy
