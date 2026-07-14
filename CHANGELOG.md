# Changelog

Todos los cambios importantes de **Argentine Route** se documentan en este archivo.

El formato está inspirado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el proyecto utiliza versionado semántico cuando corresponde.

---

## [Unreleased]

### Próximamente

- Optimización SEO avanzada.
- Integración con Google Search Console.
- Integración con Google Analytics.
- Sitemap dinámico.
- Configuración de `robots.txt`.
- Open Graph y Twitter Cards.
- Datos estructurados con Schema.org.
- Mejoras de accesibilidad.
- Auditoría de rendimiento con Lighthouse.
- Módulo de hoteles.
- Módulo de experiencias.
- Sistema de reservas.
- CMS.
- Blog.

---

## [1.0.0] - 2026-07-14

### Añadido

- Publicación oficial de Argentine Route.
- Sitio web bilingüe en español e inglés.
- Páginas de provincias.
- Páginas de lugares y destinos.
- Galerías de imágenes.
- Sección de equipo y staff.
- Secciones informativas, FAQ y contacto.
- Dominio oficial:
  - `https://argentineroute.com`
  - `https://www.argentineroute.com`
- Deploy automático con Vercel.
- Integración con GitHub.
- Configuración de producción sobre la rama `main`.
- Documentación técnica completa.
- README principal con selector de idioma.
- README en español.
- README en inglés.
- Banner visual para documentación.

### Modificado

- Migración de imágenes y videos desde `public/` hacia Cloudinary.
- Centralización de URLs multimedia mediante helpers.
- Reorganización de imágenes por categorías:
  - `gallery`
  - `places`
  - `provinces`
  - `staff`
  - `logos`
- Reorganización de videos dentro de Cloudinary.
- Optimización de imágenes mediante `f_auto` y `q_auto`.
- Mejora del flujo de trabajo con ramas Git.

### Infraestructura

- Aplicación desplegada en Vercel.
- Dominio administrado desde Hostinger.
- Recursos multimedia alojados en Cloudinary.
- Repositorio alojado en GitHub.
- Integración continua mediante GitHub + Vercel.

---

## [0.9.0] - 2026-07-10

### Añadido

- Script automatizado para subir recursos a Cloudinary.
- Variables de entorno para Cloudinary.
- Helper `cloudinary()`.
- Helper `cloudinaryVideo()`.
- Estructura de carpetas remotas bajo `ARGENTINEROUTE/`.

### Modificado

- Migración de `provinces.ts` a Cloudinary.
- Migración de `places.ts` a Cloudinary.
- Migración de `staff.ts` a Cloudinary.
- Migración de galerías.
- Migración de videos.
- Migración de logos.

### Corregido

- Public ID inconsistentes.
- Nombres únicos generados automáticamente por Cloudinary.
- Rutas incorrectas de imágenes.
- Referencias locales que impedían visualizar recursos en producción.

---

## [0.8.0] - 2026-07-01

### Añadido

- Nuevas imágenes de provincias.
- Nuevas imágenes hero.
- Nuevas galerías.
- Nuevos destinos y lugares.
- Mejoras visuales en páginas de detalle.

### Modificado

- Sección de provincias.
- Sección de lugares.
- Composición visual de galerías.
- Datos bilingües de provincias y destinos.

---

## [0.7.0] - 2026-06-22

### Añadido

- Sección de staff.
- Fotografías corporativas del equipo.
- Información profesional en español e inglés.
- Redes sociales por integrante.

### Modificado

- Página About.
- Identidad visual del equipo.
- Framing y consistencia de imágenes del staff.

---

## [0.6.0] - 2026-06-01

### Añadido

- Internacionalización.
- Traducciones al inglés.
- Contexto de idioma.
- Contenido bilingüe en provincias, lugares y staff.

### Modificado

- Navbar.
- Footer.
- Textos de páginas principales.
- Contenido dinámico según idioma.

---

## [0.5.0] - 2026-05-01

### Añadido

- Página de provincias.
- Página de lugares.
- Rutas dinámicas.
- Componentes reutilizables.
- Secciones de historia, cultura, gastronomía y paisajes.

---

## [0.4.0] - 2026-04-01

### Añadido

- Home principal.
- Hero con video.
- Secciones de destinos.
- Carruseles.
- Partners.
- Música ambiental.
- CTA.
- Footer.
- Navbar.

---

## [0.3.0] - 2026-03-01

### Añadido

- Tailwind CSS.
- Framer Motion.
- Componentes UI.
- Sistema de diseño inicial.
- Animaciones.
- Diseño responsive.

---

## [0.2.0] - 2026-02-01

### Añadido

- TypeScript.
- Estructura de componentes.
- App Router.
- Archivos de datos.
- Configuración inicial del proyecto.

---

## [0.1.0] - 2026-01-01

### Añadido

- Inicialización del proyecto Argentine Route.
- Configuración base con Next.js.
- Primer repositorio en GitHub.
- Primera estructura de rutas y componentes.

---

## Convenciones

Las categorías utilizadas son:

- `Añadido`
- `Modificado`
- `Corregido`
- `Eliminado`
- `Seguridad`
- `Infraestructura`
- `Próximamente`

---

## Enlaces

- Producción: https://argentineroute.com
- Repositorio: https://github.com/JAJesusGarcia/ARGENTINEROUTE