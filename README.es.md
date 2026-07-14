# 🇦🇷 Argentine Route

<p align="center">
  <img
    src="docs/images/argentineroute-readme-banner.webp"
    alt="Argentine Route"
    width="100%"
  >
</p>

<p align="center">
Plataforma Premium de Turismo para Descubrir Argentina
</p>

<p align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?style=for-the-badge&logo=tailwindcss)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Media-3448C5?style=for-the-badge&logo=cloudinary)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)
![pnpm](https://img.shields.io/badge/pnpm-Package_Manager-F69220?style=for-the-badge&logo=pnpm)

</p>

---

# 🌎 Acerca del Proyecto

**Argentine Route** es una plataforma premium de turismo creada para mostrar los destinos más increíbles de Argentina.

El proyecto combina imágenes cinematográficas, fotografía de alta calidad, contenido inmersivo y tecnologías web modernas para ofrecer una experiencia digital elegante e inspiradora.

Su objetivo es convertirse en una de las plataformas turísticas más completas dedicadas exclusivamente a Argentina.

---

## 🌐 Sitio Web

<p align="center">
  <a href="https://argentineroute.com">
    <img src="https://img.shields.io/badge/🌎_Visitar_Argentine_Route-En_Línea-00C2FF?style=for-the-badge" alt="Visitar Argentine Route">
  </a>
</p>

---

# 🛠 Tecnologías

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Cloudinary
- Vercel
- GitHub
- pnpm

---

# 📁 Estructura del Proyecto

```text
ARGENTINEROUTE/

app/
components/
data/
hooks/
lib/
scripts/
public/

README.md
README.en.md
README.es.md

DOCUMENTATION.md
CHANGELOG.md
CONTRIBUTING.md
```

---

# ⚙ Instalación

Clonar el repositorio

```bash
git clone https://github.com/JAJesusGarcia/ARGENTINEROUTE.git
```

Instalar dependencias

```bash
pnpm install
```

Iniciar el servidor de desarrollo

```bash
pnpm dev
```

Abrir

```text
http://localhost:3000
```

---

# 🏗 Compilación para Producción

Generar la versión de producción

```bash
pnpm build
```

Ejecutar la aplicación

```bash
pnpm start
```

---

# ☁ Almacenamiento de Recursos

Todos los recursos multimedia del proyecto (imágenes y videos) se encuentran alojados en **Cloudinary**.

El repositorio almacena únicamente el código fuente.

Los archivos multimedia son servidos automáticamente mediante funciones auxiliares integradas en el proyecto.

---

# 🚀 Despliegue

La aplicación se despliega automáticamente utilizando **Vercel**.

Flujo de trabajo

```text
GitHub
↓

Rama main
↓

Vercel
↓

Producción
```

Cada nuevo **push** a la rama **main** genera automáticamente un nuevo despliegue en producción.

---

# 🌍 Dominio

Dominio oficial

https://argentineroute.com

Infraestructura

- Dominio → Hostinger
- Aplicación → Vercel
- Recursos Multimedia → Cloudinary

---

# 🌿 Flujo de Trabajo con Git

Rama principal

```text
main
```

Ramas de desarrollo

```text
feature/...

fix/...

refactor/...
```

No se recomienda desarrollar directamente sobre **main**.

Cada nueva funcionalidad o corrección debe realizarse en una rama independiente y posteriormente integrarse mediante un merge.

---

# 📸 Recursos Multimedia

Todas las imágenes son optimizadas y distribuidas mediante **Cloudinary**.

Ejemplo

```ts
cloudinary("images/provinces/salta")
```

Videos

```ts
cloudinaryVideo("videos/hero-video")
```

---

# 📚 Documentación

La documentación completa del proyecto se encuentra en los siguientes archivos:

- DOCUMENTATION.md
- CHANGELOG.md
- CONTRIBUTING.md

---

# 🛣 Roadmap

- [x] Proyecto Inicial
- [x] Internacionalización
- [x] Migración completa a Cloudinary
- [x] Despliegue en Producción
- [x] Dominio Personalizado
- [ ] Optimización SEO
- [ ] Google Search Console
- [ ] Google Analytics
- [ ] Módulo de Hoteles
- [ ] Módulo de Experiencias
- [ ] Sistema de Reservas
- [ ] CMS
- [ ] Blog

---

# 👨‍💻 Autor

**Jesús García**

Lighting Designer • Full Stack Developer

📍 Rosario, Santa Fe, Argentina

GitHub

https://github.com/JAJesusGarcia

LinkedIn

https://linkedin.com/in/jesusjagarcia

---

# ❤️ Agradecimientos

Desarrollado con pasión por Argentina, el turismo y la tecnología.

---

# 📄 Licencia

Este proyecto es privado.

Todos los derechos reservados © Argentine Route.