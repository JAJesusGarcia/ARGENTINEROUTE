# 📘 Documentación Técnica — Argentine Route

## Índice

1. [Introducción](#1-introducción)
2. [Objetivos del proyecto](#2-objetivos-del-proyecto)
3. [Arquitectura general](#3-arquitectura-general)
4. [Tecnologías utilizadas](#4-tecnologías-utilizadas)
5. [Estructura del proyecto](#5-estructura-del-proyecto)
6. [Entornos de trabajo](#6-entornos-de-trabajo)
7. [Flujo de datos y recursos multimedia](#7-flujo-de-datos-y-recursos-multimedia)
8. [Cloudinary](#8-cloudinary)
9. [Variables de entorno](#9-variables-de-entorno)
10. [Flujo de trabajo con Git](#10-flujo-de-trabajo-con-git)
11. [Despliegue en Vercel](#11-despliegue-en-vercel)
12. [Dominio y DNS](#12-dominio-y-dns)
13. [Gestión de provincias](#13-gestión-de-provincias)
14. [Gestión de lugares](#14-gestión-de-lugares)
15. [Gestión del staff](#15-gestión-del-staff)
16. [Actualización de imágenes y videos](#16-actualización-de-imágenes-y-videos)
17. [Scripts de mantenimiento](#17-scripts-de-mantenimiento)
18. [Build y validación](#18-build-y-validación)
19. [Convenciones del proyecto](#19-convenciones-del-proyecto)
20. [Solución de problemas](#20-solución-de-problemas)
21. [Checklist antes de producción](#21-checklist-antes-de-producción)
22. [Roadmap técnico](#22-roadmap-técnico)

---

# 1. Introducción

**Argentine Route** es una plataforma web de turismo enfocada en presentar destinos, provincias, lugares, experiencias y recursos visuales de Argentina mediante una interfaz moderna, inmersiva y bilingüe.

El proyecto fue desarrollado con **Next.js**, **TypeScript**, **Tailwind CSS** y **Framer Motion**, utilizando **Cloudinary** para almacenar y distribuir imágenes y videos, y **Vercel** como plataforma de despliegue.

La aplicación está disponible en producción en:

```text
https://argentineroute.com
```

La infraestructura general del proyecto está dividida de la siguiente manera:

```text
Código fuente        → GitHub
Aplicación web       → Vercel
Dominio              → Hostinger
Imágenes y videos    → Cloudinary
Producción           → Rama main
```

Esta documentación funciona como manual técnico y operativo del proyecto. Su propósito es facilitar:

- La instalación local.
- El mantenimiento.
- La incorporación de nuevas funcionalidades.
- La actualización de contenido.
- La gestión de imágenes y videos.
- El trabajo con ramas.
- El despliegue en producción.
- La resolución de problemas frecuentes.

---

# 2. Objetivos del Proyecto

## 2.1 Objetivo principal

Crear una plataforma digital premium dedicada al turismo en Argentina, con una presentación visual moderna, contenido bilingüe y una estructura preparada para crecer.

## 2.2 Objetivos técnicos

El proyecto busca mantener las siguientes características:

- Código organizado y mantenible.
- Componentes reutilizables.
- Contenido centralizado en archivos de datos.
- Recursos multimedia desacoplados del repositorio.
- Despliegue automático.
- Compatibilidad con dispositivos móviles.
- Soporte para español e inglés.
- Preparación para SEO.
- Facilidad para agregar nuevas provincias, lugares y miembros del equipo.

## 2.3 Objetivos futuros

La arquitectura está preparada para incorporar progresivamente:

- Optimización SEO avanzada.
- Google Search Console.
- Google Analytics.
- Hoteles asociados.
- Paquetes turísticos.
- Experiencias y excursiones.
- Sistema de reservas.
- Formularios de contacto reales.
- Blog.
- CMS.
- Panel administrativo.
- Base de datos.
- Autenticación.
- Gestión de clientes.

---

# 3. Arquitectura General

Argentine Route utiliza una arquitectura basada en Next.js con App Router.

```text
Usuario
  ↓
Dominio argentineroute.com
  ↓
Vercel
  ↓
Aplicación Next.js
  ↓
Componentes y archivos de datos
  ↓
Cloudinary para imágenes y videos
```

## 3.1 Código fuente

El código se encuentra alojado en GitHub:

```text
https://github.com/JAJesusGarcia/ARGENTINEROUTE
```

La rama utilizada para producción es:

```text
main
```

Cada push realizado sobre `main` genera automáticamente un nuevo despliegue en Vercel.

## 3.2 Aplicación

La aplicación utiliza Next.js y React para:

- Renderizar las páginas.
- Gestionar rutas.
- Generar páginas dinámicas.
- Mostrar contenido bilingüe.
- Gestionar componentes interactivos.
- Construir la versión de producción.

## 3.3 Recursos multimedia

Las imágenes y los videos principales no deben depender de la carpeta `public`.

Se almacenan en Cloudinary bajo una estructura controlada:

```text
ARGENTINEROUTE/
├── images/
│   ├── gallery/
│   ├── places/
│   ├── provinces/
│   ├── staff/
│   └── logos/
└── videos/
```

El código obtiene estos recursos mediante funciones auxiliares:

```ts
cloudinary("images/provinces/salta")
```

```ts
cloudinaryVideo("videos/video-hero")
```

## 3.4 Contenido

Gran parte del contenido está centralizado en archivos dentro de `data/`.

Ejemplos:

```text
data/provinces.ts
data/places.ts
data/staff.ts
```

Esto permite actualizar la información sin modificar directamente los componentes visuales.

---

# 4. Tecnologías Utilizadas

## 4.1 Next.js

Framework principal del proyecto.

Se utiliza para:

- App Router.
- Rutas dinámicas.
- Renderizado de páginas.
- Builds de producción.
- Integración con Vercel.
- Organización por layouts y páginas.

## 4.2 React

Biblioteca utilizada para construir la interfaz mediante componentes.

## 4.3 TypeScript

Aporta tipado estático y permite definir interfaces para provincias, lugares, miembros del staff y otras estructuras.

Ejemplo:

```ts
export interface Province {
  id: string;
  name: string;
  slug: string;
  image: string;
  heroImage: string;
}
```

## 4.4 Tailwind CSS

Sistema principal de estilos.

Se utiliza para:

- Diseño responsive.
- Espaciados.
- Tipografía.
- Colores.
- Estados hover.
- Grillas.
- Flexbox.
- Adaptación móvil.

## 4.5 Framer Motion

Se utiliza para animaciones, transiciones y entradas visuales.

## 4.6 Cloudinary

Servicio utilizado para:

- Almacenar imágenes.
- Almacenar videos.
- Distribuir contenido mediante CDN.
- Aplicar optimización automática.
- Reemplazar recursos conservando su Public ID.

## 4.7 Vercel

Plataforma utilizada para:

- Desplegar la aplicación.
- Ejecutar builds automáticos.
- Crear previews de ramas.
- Conectar el dominio.
- Gestionar producción.

## 4.8 Hostinger

Se utiliza como proveedor del dominio:

```text
argentineroute.com
```

## 4.9 GitHub

Se utiliza para:

- Control de versiones.
- Ramas.
- Commits.
- Pull Requests.
- Integración con Vercel.
- Documentación del proyecto.

## 4.10 pnpm

Gestor de paquetes recomendado para el proyecto.

Comandos principales:

```bash
pnpm install
pnpm dev
pnpm build
pnpm start
```

---

# 5. Estructura del Proyecto

La estructura puede variar con el crecimiento de la aplicación, pero la organización general es la siguiente:

```text
ARGENTINEROUTE/
│
├── app/
├── components/
├── data/
├── hooks/
├── lib/
├── public/
├── scripts/
├── styles/
│
├── docs/
│   └── images/
│
├── .env.local
├── .gitignore
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
│
├── README.md
├── README.en.md
├── README.es.md
├── DOCUMENTATION.md
├── CHANGELOG.md
└── CONTRIBUTING.md
```

## 5.1 `app/`

Contiene las rutas de la aplicación usando App Router.

Ejemplos posibles:

```text
app/
├── page.tsx
├── layout.tsx
├── about/
├── contacto/
├── faq/
├── lugares/
└── provincias/
```

Responsabilidades:

- Definir páginas.
- Gestionar layouts.
- Crear rutas dinámicas.
- Integrar componentes.
- Definir metadata cuando corresponda.

## 5.2 `components/`

Contiene componentes reutilizables.

Ejemplos:

```text
components/
├── layout/
├── sections/
├── ui/
└── shared/
```

Responsabilidades:

- Navbar.
- Footer.
- Cards.
- Heroes.
- Galerías.
- Secciones.
- Botones.
- Formularios.
- Elementos visuales reutilizables.

## 5.3 `data/`

Contiene contenido estructurado.

Archivos principales:

```text
data/provinces.ts
data/places.ts
data/staff.ts
```

Responsabilidades:

- Información de provincias.
- Información de lugares.
- Galerías.
- Datos del staff.
- Contenido en español.
- Contenido en inglés.

## 5.4 `hooks/`

Contiene hooks personalizados.

Puede utilizarse para:

- Estado responsive.
- Interacciones de UI.
- Funciones compartidas.
- Lógica reutilizable.

## 5.5 `lib/`

Contiene utilidades y configuración interna.

Ejemplos:

```text
lib/
├── claudinary.ts
├── i18n/
└── utils.ts
```

Nota: actualmente el helper puede estar nombrado como:

```text
claudinary.ts
```

aunque la escritura correcta del servicio es:

```text
cloudinary.ts
```

En caso de renombrarlo, deben actualizarse todos los imports:

```ts
import { cloudinary } from "@/lib/cloudinary";
```

## 5.6 `public/`

Contiene recursos estáticos que deben formar parte directa de la aplicación.

Se recomienda conservar aquí únicamente elementos pequeños o técnicos:

```text
public/
├── favicon.ico
├── icon.svg
├── apple-icon.png
├── robots.txt
├── manifest.json
└── otros archivos técnicos
```

No se recomienda almacenar aquí las imágenes y videos pesados del sitio si ya fueron migrados a Cloudinary.

## 5.7 `scripts/`

Contiene scripts auxiliares.

Archivo principal:

```text
scripts/upload-cloudinary.mjs
```

Este script permite subir imágenes y videos desde el proyecto local hacia Cloudinary conservando la estructura de carpetas y los Public ID.

## 5.8 `docs/`

Contiene recursos utilizados exclusivamente por la documentación.

Ejemplo:

```text
docs/
└── images/
    └── argentineroute-readme-banner.webp
```

Estos archivos no forman parte de la interfaz de la aplicación.

## 5.9 Archivos de documentación

```text
README.md
```

Selector de idioma y presentación principal.

```text
README.en.md
```

README completo en inglés.

```text
README.es.md
```

README completo en español.

```text
DOCUMENTATION.md
```

Manual técnico del proyecto.

```text
CHANGELOG.md
```

Historial de versiones y cambios importantes.

```text
CONTRIBUTING.md
```

Normas para trabajar con el repositorio.

---

# 6. Entornos de Trabajo

El proyecto utiliza principalmente tres entornos.

## 6.1 Desarrollo local

Se ejecuta con:

```bash
pnpm dev
```

URL local:

```text
http://localhost:3000
```

Este entorno se utiliza para:

- Desarrollar nuevas funciones.
- Probar cambios visuales.
- Actualizar contenido.
- Comprobar imágenes.
- Corregir errores.

## 6.2 Producción local

Se genera con:

```bash
pnpm build
pnpm start
```

Este entorno debe probarse antes de integrar cambios importantes a `main`.

Permite detectar errores que pueden no aparecer durante `pnpm dev`.

## 6.3 Producción en Vercel

La producción oficial utiliza:

```text
Rama: main
Dominio: https://argentineroute.com
Proveedor: Vercel
```

Cada push a `main` inicia un build automático.

---

# 7. Flujo de Datos y Recursos Multimedia

El contenido de una página normalmente sigue este flujo:

```text
Archivo de datos
  ↓
Componente
  ↓
Página
  ↓
Usuario
```

Ejemplo de provincia:

```text
data/provinces.ts
  ↓
ProvinceCard
  ↓
Página de provincias
  ↓
Navegador
```

Las imágenes siguen este flujo:

```text
Ruta definida en data/
  ↓
Helper cloudinary()
  ↓
URL pública de Cloudinary
  ↓
Componente Image o img
```

Ejemplo:

```ts
image: cloudinary("images/provinces/buenos-aires")
```

La función genera una URL semejante a:

```text
https://res.cloudinary.com/dpadnzbyw/image/upload/f_auto,q_auto/ARGENTINEROUTE/images/provinces/buenos-aires
```

Los videos utilizan:

```ts
cloudinaryVideo("videos/video-hero")
```

La separación entre código y multimedia permite:

- Reducir el tamaño del repositorio.
- Mejorar los deploys.
- Centralizar recursos.
- Actualizar imágenes conservando el código.
- Distribuir los archivos desde un CDN.

---

# 8. Cloudinary

## 8.1 Introducción

Argentine Route utiliza **Cloudinary** como proveedor principal para el almacenamiento y distribución de todos los recursos multimedia del proyecto.

Esto incluye:

- Imágenes
- Videos
- Logos
- Fotografías del staff
- Imágenes de provincias
- Imágenes de lugares
- Galerías

El objetivo principal de esta arquitectura es desacoplar completamente el contenido multimedia del repositorio Git.

De esta manera:

- El repositorio permanece liviano.
- Los despliegues son más rápidos.
- Los recursos son distribuidos mediante CDN.
- Las imágenes se optimizan automáticamente.
- Es posible reemplazar imágenes sin modificar el código.

---

# 8.2 Cloud Name

Actualmente el proyecto utiliza el siguiente Cloud Name:

```text
dpadnzbyw
```

La URL base generada por Cloudinary es:

```text
https://res.cloudinary.com/dpadnzbyw/
```

---

# 8.3 Organización de carpetas

Dentro de Cloudinary existe una carpeta principal:

```text
ARGENTINEROUTE
```

Toda la estructura del proyecto se encuentra organizada debajo de ella.

```text
ARGENTINEROUTE/

images/

gallery/

places/

provinces/

staff/

logos/

videos/
```

Visualmente:

```text
ARGENTINEROUTE
│
├── images
│   ├── gallery
│   ├── logos
│   ├── places
│   ├── provinces
│   └── staff
│
└── videos
```

Esta estructura debe mantenerse siempre.

No se recomienda crear nuevas carpetas fuera de esta organización salvo que exista una razón técnica.

---

# 8.4 Convención de nombres

Todas las imágenes deben seguir el formato:

```text
kebab-case
```

Ejemplos correctos

```text
buenos-aires

buenos-aires-hero

gaston-lemon2

jesus-garcia2

video-hero

logo-footer
```

Evitar nombres como:

```text
Foto Final.png

Buenos Aires.png

Imagen 3.webp

Sin título.webp
```

---

# 8.5 Variables de entorno

El script de subida utiliza las siguientes variables.

Archivo:

```text
.env.local
```

Contenido:

```env
CLOUDINARY_CLOUD_NAME=dpadnzbyw

CLOUDINARY_API_KEY=xxxxxxxxxxxx

CLOUDINARY_API_SECRET=xxxxxxxxxxxxxxxx
```

Estas variables nunca deben subirse al repositorio.

El archivo `.env.local` debe permanecer ignorado mediante `.gitignore`.

---

# 8.6 Helper de Cloudinary

El proyecto utiliza un helper para generar automáticamente las URLs.

Ejemplo:

```ts
cloudinary("images/provinces/salta")
```

Resultado aproximado:

```text
https://res.cloudinary.com/dpadnzbyw/image/upload/f_auto,q_auto/ARGENTINEROUTE/images/provinces/salta
```

Para videos:

```ts
cloudinaryVideo("videos/video-hero")
```

Esto evita escribir manualmente las URLs completas.

Además permite:

- cambiar parámetros globales
- optimizar imágenes
- centralizar configuraciones

---

# 8.7 Parámetros automáticos

Actualmente todas las imágenes utilizan:

```text
f_auto
```

Permite seleccionar automáticamente el formato más eficiente.

Ejemplos:

- WebP
- AVIF
- JPEG XL
- JPEG

según el navegador.

También utilizan:

```text
q_auto
```

Cloudinary determina automáticamente la calidad óptima.

No se recomienda modificar estos parámetros salvo necesidad específica.

---

# 8.8 Script de subida

El proyecto incluye un script para subir automáticamente todos los recursos.

Ubicación:

```text
scripts/upload-cloudinary.mjs
```

Se ejecuta mediante:

```bash
node scripts/upload-cloudinary.mjs
```

El script:

- recorre la carpeta public
- detecta imágenes
- detecta videos
- conserva la estructura
- mantiene los Public ID
- sobrescribe archivos existentes

---

# 8.9 Flujo recomendado para actualizar una imagen

Cuando sea necesario reemplazar una imagen existente:

## Paso 1

Actualizar el archivo local.

Ejemplo:

```text
public/images/staff/gaston-lemon2.webp
```

↓

## Paso 2

Ejecutar

```bash
node scripts/upload-cloudinary.mjs
```

↓

## Paso 3

Cloudinary reemplazará automáticamente la imagen.

↓

## Paso 4

Verificar la imagen en desarrollo.

```bash
pnpm dev
```

↓

## Paso 5

Realizar commit.

↓

## Paso 6

Push.

↓

## Paso 7

Merge a main.

↓

## Paso 8

Deploy automático mediante Vercel.

---

# 8.10 Reemplazo de imágenes

El script utiliza el mismo Public ID.

Por esta razón el código no necesita modificarse.

Ejemplo.

Antes:

```text
ARGENTINEROUTE/images/staff/gaston-lemon2
```

Después:

```text
ARGENTINEROUTE/images/staff/gaston-lemon2
```

El nombre permanece igual.

Únicamente cambia el contenido del archivo.

Esto evita tener que editar:

- componentes
- archivos data
- helpers
- rutas

---

# 8.11 Actualización de videos

El procedimiento es exactamente el mismo.

Reemplazar:

```text
public/videos/video-hero.mp4
```

Ejecutar:

```bash
node scripts/upload-cloudinary.mjs
```

Cloudinary actualizará automáticamente el recurso.

---

# 8.12 Caché

Después de reemplazar una imagen puede ocurrir que el navegador siga mostrando la versión anterior.

En ese caso:

- actualizar la página
- limpiar caché
- abrir modo incógnito

Cloudinary también puede tardar algunos minutos en invalidar la versión anterior.

Esto es completamente normal.

---

# 8.13 Buenas prácticas

✔ Mantener siempre la misma estructura de carpetas.

✔ No cambiar Public ID innecesariamente.

✔ Utilizar siempre nombres en kebab-case.

✔ Mantener imágenes optimizadas antes de subirlas.

✔ Verificar cada cambio en desarrollo.

✔ No eliminar recursos utilizados por páginas existentes.

✔ No escribir URLs completas dentro del código cuando exista un helper disponible.

---

# 8.14 Errores frecuentes

## Imagen no encontrada

Generalmente ocurre porque:

- el nombre no coincide
- la carpeta es incorrecta
- el Public ID cambió

---

## Imagen antigua

Normalmente se debe a la caché.

Esperar algunos minutos o limpiar caché.

---

## Error de autenticación

Verificar:

```env
CLOUDINARY_API_KEY

CLOUDINARY_API_SECRET

CLOUDINARY_CLOUD_NAME
```

---

## El script no encuentra imágenes

Comprobar que los archivos estén dentro de:

```text
public/images
```

o

```text
public/videos
```

---

## Error de permisos

Verificar que la cuenta tenga permisos para sobrescribir archivos.

---

# 8.15 Recomendaciones

No subir imágenes manualmente desde el navegador salvo casos excepcionales.

Siempre utilizar el script oficial del proyecto.

Esto garantiza:

- estructura consistente
- nombres correctos
- Public ID estables
- menor posibilidad de errores

Cloudinary debe considerarse el repositorio oficial de todos los recursos multimedia utilizados por Argentine Route.

---

# 9. Flujo de Trabajo con Git y GitHub

## 9.1 Filosofía

El repositorio utiliza una estrategia basada en ramas para garantizar que la versión en producción permanezca siempre estable.

La rama `main` representa el estado oficial del sitio publicado.

Nunca debe utilizarse para desarrollar nuevas funcionalidades directamente.

Todo cambio debe realizarse primero en una rama independiente.

---

# 9.2 Estructura de ramas

La organización recomendada es la siguiente:

```text
main

├── feature/...
├── feature/...
├── feature/...

├── fix/...
├── fix/...

└── refactor/...
```

Tipos de ramas

## feature/

Se utiliza para nuevas funcionalidades.

Ejemplos

```text
feature/seo

feature/hotels

feature/blog

feature/search
```

---

## fix/

Corrección de errores.

Ejemplos

```text
fix/footer

fix/mobile-menu

fix/cloudinary

fix/gallery
```

---

## refactor/

Reestructuración interna sin modificar funcionalidades.

Ejemplos

```text
refactor/components

refactor/i18n

refactor/data
```

---

# 9.3 Flujo recomendado

Siempre comenzar desde main.

```bash
git switch main

git pull origin main
```

Crear nueva rama.

```bash
git switch -c feature/nombre-funcionalidad
```

Trabajar normalmente.

Realizar commits frecuentes.

Cuando la funcionalidad esté terminada:

```bash
git push -u origin feature/nombre-funcionalidad
```

Finalmente:

Merge a main.

Push.

Deploy automático.

---

# 9.4 Commits

Se recomienda utilizar mensajes descriptivos.

Ejemplos.

```text
feat: add hotel section

feat: implement search system

fix: mobile navigation

fix: footer logo

docs: update README

docs: add documentation

refactor: simplify province cards
```

Evitar mensajes como:

```text
changes

update

test

final

nuevo
```

---

# 9.5 Antes de realizar un merge

Siempre ejecutar:

```bash
pnpm build
```

El proyecto debe compilar correctamente.

Si el build falla:

NO realizar merge.

Corregir primero el error.

---

# 9.6 Flujo completo

```text
main

↓

git pull

↓

feature/nueva-funcionalidad

↓

Desarrollo

↓

Commit

↓

Push

↓

pnpm build

↓

Merge

↓

main

↓

Push

↓

Vercel

↓

Producción
```

---

# 9.7 Pull

Antes de comenzar cualquier tarea:

```bash
git switch main

git pull origin main
```

Esto evita conflictos innecesarios.

---

# 9.8 Merge

Cuando la funcionalidad esté lista.

```bash
git switch main

git pull origin main

git merge feature/xxxx

git push origin main
```

No realizar force push.

---

# 9.9 Eliminación de ramas

Una vez integrada una funcionalidad.

Eliminar la rama local.

```bash
git branch -d feature/xxxx
```

Eliminar la rama remota.

```bash
git push origin --delete feature/xxxx
```

Mantener únicamente ramas activas.

---

# 9.10 Recuperar una rama

Si una rama fue eliminada accidentalmente.

Puede recuperarse utilizando el historial de Git.

Por este motivo nunca debe realizarse limpieza masiva sin revisar previamente el historial.

---

# 10. Flujo de Desarrollo

El ciclo recomendado para cualquier modificación es:

```text
Idea

↓

Nueva rama

↓

Desarrollo

↓

Pruebas locales

↓

Build

↓

Commit

↓

Push

↓

Merge

↓

Deploy

↓

Verificación
```

---

# 11. Verificación Local

Durante el desarrollo utilizar:

```bash
pnpm dev
```

Para comprobar:

- componentes

- estilos

- imágenes

- traducciones

- navegación

---

# 11.1 Build local

Antes del merge ejecutar siempre:

```bash
pnpm build
```

Si el build produce errores:

Detener el proceso.

Corregir.

Volver a ejecutar.

Nunca mergear una rama con build roto.

---

# 11.2 Producción local

Después del build.

```bash
pnpm start
```

Verificar:

- Home

- Provincias

- Lugares

- Staff

- Footer

- Videos

- Responsive

---

# 12. Despliegue con Vercel

El proyecto utiliza integración automática con GitHub.

Cada push a:

```text
main
```

genera automáticamente un nuevo despliegue.

No es necesario ejecutar comandos adicionales.

---

# 12.1 Flujo

```text
GitHub

↓

main

↓

Vercel

↓

Build

↓

Deploy

↓

Producción
```

---

# 12.2 Preview Deployments

Cada rama enviada a GitHub puede generar una Preview Deployment.

Esto permite:

- probar funcionalidades

- compartir avances

- detectar errores

sin afectar producción.

---

# 12.3 Producción

Sitio oficial.

```text
https://argentineroute.com
```

Todo cambio en producción proviene exclusivamente de:

```text
main
```

---

# 12.4 Si un deploy falla

Ingresar al panel de Vercel.

Revisar:

Build Logs.

Errores de TypeScript.

Errores de Next.js.

Variables de entorno.

Dependencias.

No realizar nuevos commits hasta comprender el motivo del fallo.

---

# 12.5 Variables

Actualmente producción no requiere credenciales privadas para servir imágenes.

Cloudinary distribuye contenido mediante URLs públicas.

Las variables privadas únicamente se utilizan durante la subida de archivos.

---

# 13. Flujo de Actualización del Sitio

Cada modificación del proyecto debería seguir este orden.

## Cambio de código

↓

Nueva rama.

↓

Modificar.

↓

Probar.

↓

Build.

↓

Merge.

↓

Producción.

---

## Cambio de imágenes

↓

Actualizar archivo local.

↓

Ejecutar upload-cloudinary.

↓

Verificar.

↓

Commit.

↓

Merge.

↓

Producción.

---

## Cambio de datos

↓

Modificar archivos data.

↓

Verificar.

↓

Build.

↓

Merge.

↓

Producción.

---

# 14. Recuperación ante errores

Si una actualización produce problemas.

Primero identificar.

¿Código?

¿Cloudinary?

¿Datos?

¿Deploy?

Nunca aplicar cambios al azar.

Reproducir primero el error.

Luego corregir.

Finalmente volver a desplegar.

---

# 15. Buenas prácticas

✔ Trabajar siempre sobre ramas.

✔ Mantener commits pequeños.

✔ Ejecutar build antes del merge.

✔ Verificar la producción.

✔ Documentar cambios importantes.

✔ Mantener sincronizado CHANGELOG.md.

✔ Mantener actualizada esta documentación.

✔ No subir archivos innecesarios.

✔ Evitar cambios masivos sin una rama específica.

✔ Conservar una estructura consistente en todo el proyecto.

---

# 16. Administración del Contenido

Esta sección describe el procedimiento recomendado para mantener actualizado el contenido de Argentine Route.

Todo el contenido del sitio se encuentra desacoplado de los componentes visuales.

La información se administra principalmente desde la carpeta:

```text
data/
```

Esto permite actualizar el sitio sin modificar la interfaz.

---

# 16.1 Provincias

Toda la información de las provincias se encuentra en:

```text
data/provinces.ts
```

Cada provincia posee una estructura similar a:

```ts
{
    id: "1",
    name: "Buenos Aires",
    slug: "buenos-aires",
    image: "...",
    heroImage: "...",

    description: "...",

    descriptionEn: "...",

    ...

}
```

---

# 16.2 Agregar una provincia

Procedimiento recomendado.

## Paso 1

Preparar las imágenes.

Se recomienda disponer como mínimo de:

```text
Imagen principal

Hero

Galería
```

---

## Paso 2

Subir las imágenes.

Actualizar:

```text
public/images/provinces/
```

Ejecutar:

```bash
node scripts/upload-cloudinary.mjs
```

---

## Paso 3

Agregar el objeto correspondiente dentro de:

```text
data/provinces.ts
```

Completar:

- nombre
- slug
- descripciones
- clima
- cultura
- gastronomía
- lugares destacados
- coordenadas
- imágenes

---

## Paso 4

Verificar.

```bash
pnpm dev
```

Comprobar:

- listado

- detalle

- hero

- imágenes

- responsive

---

## Paso 5

Build.

```bash
pnpm build
```

---

# 16.3 Modificar una provincia

Simplemente actualizar la información existente.

No modificar el slug salvo que sea absolutamente necesario.

El slug forma parte de la URL.

Ejemplo.

```text
/provincias/salta
```

---

# 16.4 Eliminar una provincia

Antes de eliminar una provincia verificar:

- enlaces internos

- lugares asociados

- imágenes

- traducciones

Eliminar únicamente cuando toda la información relacionada haya sido revisada.

---

# 17. Lugares

Los lugares se administran desde:

```text
data/places.ts
```

Cada lugar pertenece a una provincia.

Generalmente incluye:

- nombre

- descripción

- ubicación

- galería

- historia

- consejos

- coordenadas

---

# 17.1 Agregar un lugar

## Preparar imágenes.

↓

Subir a Cloudinary.

↓

Agregar datos.

↓

Verificar.

↓

Build.

↓

Merge.

↓

Producción.

---

# 17.2 Galerías

Las galerías utilizan un arreglo.

Ejemplo.

```ts
galleryImages: [

cloudinary("images/gallery/salta-1"),

cloudinary("images/gallery/salta-2"),

cloudinary("images/gallery/salta-3")

]
```

Mantener siempre un orden lógico.

---

# 17.3 Imágenes Hero

Cada lugar puede tener una imagen principal.

Ejemplo.

```ts
heroImage:

cloudinary("images/places/perito-moreno-hero")
```

La imagen hero debe ser:

- alta resolución

- bien optimizada

- composición panorámica

---

# 18. Staff

Toda la información se administra desde:

```text
data/staff.ts
```

Cada integrante posee.

```ts
id

name

role

roleEn

location

age

image

instagram

linkedin
```

---

# 18.1 Agregar un integrante

Preparar fotografía.

↓

Subir a Cloudinary.

↓

Agregar objeto.

↓

Verificar.

↓

Build.

↓

Producción.

---

# 18.2 Reemplazar fotografía

Actualizar.

```text
public/images/staff/
```

Ejecutar.

```bash
node scripts/upload-cloudinary.mjs
```

No modificar el nombre del archivo.

Cloudinary reemplazará automáticamente la imagen.

---

# 19. Videos

Los videos del proyecto se encuentran en:

```text
public/videos/
```

Posteriormente son enviados a:

```text
Cloudinary
```

---

# 19.1 Reemplazar un video

Actualizar el archivo.

↓

Ejecutar upload-cloudinary.

↓

Verificar.

↓

Producción.

---

# 20. Traducciones

El proyecto es bilingüe.

Todo contenido nuevo debe agregarse tanto en:

Español

como en

Inglés.

Ejemplo.

```ts
description

descriptionEn
```

```ts
culture

cultureEn
```

```ts
gastronomy

gastronomyEn
```

Nunca dejar una traducción pendiente.

---

# 21. Componentes

Los componentes reutilizables se encuentran dentro de:

```text
components/
```

Antes de crear un nuevo componente verificar si ya existe uno similar.

Evitar duplicar código.

---

# 22. Estilos

Todo el proyecto utiliza Tailwind CSS.

Se recomienda mantener:

- consistencia

- responsive

- colores

- espaciados

- tipografía

No utilizar estilos inline salvo situaciones muy específicas.

---

# 23. Recursos Multimedia

Todas las imágenes nuevas deben cumplir.

✔ Alta resolución.

✔ Optimizadas.

✔ Relación de aspecto consistente.

✔ Sin marcas de agua.

✔ Nombres en kebab-case.

✔ Formato adecuado.

---

# 24. Checklist antes de subir cambios

Antes de realizar cualquier merge verificar.

□ pnpm dev

□ pnpm build

□ Responsive

□ Consola sin errores

□ Imágenes cargando correctamente

□ Traducciones completas

□ Links funcionando

□ Footer

□ Navbar

□ SEO (si corresponde)

□ Commit descriptivo

□ Push

□ Merge

□ Producción

---

# 25. Recomendaciones Generales

Mantener siempre el proyecto organizado.

Evitar soluciones rápidas que comprometan la arquitectura.

Priorizar:

- componentes reutilizables

- código limpio

- nombres descriptivos

- documentación actualizada

- estructura consistente

Cada nueva funcionalidad debe integrarse respetando los estándares definidos en esta documentación para garantizar la escalabilidad del proyecto.

Argentine Route fue diseñado para crecer progresivamente, por lo que cualquier modificación futura debe preservar la calidad visual, técnica y organizativa del sistema.

---

# 26. Solución de Problemas (Troubleshooting)

Esta sección reúne los problemas más frecuentes encontrados durante el desarrollo de Argentine Route y sus posibles soluciones.

---

## 26.1 Las imágenes no aparecen

### Posibles causas

- Nombre incorrecto.
- Public ID incorrecto.
- Imagen eliminada.
- Error en el helper.
- Caché del navegador.

### Verificar

```ts
cloudinary("images/provinces/salta")
```

Comprobar:

- Nombre.
- Carpeta.
- Public ID.
- Cloud Name.

---

## 26.2 Cloudinary muestra la imagen anterior

Generalmente se debe al caché.

Intentar:

- Recargar con Ctrl + F5.
- Abrir en modo incógnito.
- Esperar algunos minutos.
- Verificar que el script haya sobrescrito correctamente el recurso.

---

## 26.3 Error durante upload-cloudinary

Verificar.

```env
CLOUDINARY_CLOUD_NAME

CLOUDINARY_API_KEY

CLOUDINARY_API_SECRET
```

También comprobar.

- conexión a internet
- permisos de la cuenta
- estructura de carpetas

---

## 26.4 pnpm build falla

Ejecutar.

```bash
pnpm install

pnpm build
```

Leer cuidadosamente el primer error.

No intentar corregir errores secundarios antes del principal.

---

## 26.5 El sitio funciona localmente pero no en Vercel

Revisar.

- Variables de entorno.
- Imports.
- Mayúsculas y minúsculas.
- Rutas.
- Build Logs.

Siempre revisar el panel de Vercel.

---

## 26.6 Error después de un merge

Comprobar.

```bash
git status
```

Actualizar.

```bash
git pull
```

Verificar conflictos.

No continuar desarrollando hasta resolverlos.

---

## 26.7 Problemas con imágenes nuevas

Verificar.

✔ Nombre.

✔ Carpeta.

✔ Script.

✔ Cloudinary.

✔ Helper.

✔ Build.

---

# 27. Optimización del Proyecto

Las siguientes recomendaciones ayudan a mantener el rendimiento del sitio.

## Imágenes

✔ Utilizar resolución alta.

✔ Optimizar previamente.

✔ Evitar archivos excesivamente pesados.

✔ Mantener dimensiones coherentes.

---

## Videos

✔ Comprimir antes de subir.

✔ Evitar resoluciones innecesarias.

✔ Preferir H.264.

---

## Código

✔ Componentes pequeños.

✔ Componentes reutilizables.

✔ Evitar duplicación.

✔ Mantener tipado.

---

## Tailwind

✔ Reutilizar clases.

✔ Evitar estilos inline.

✔ Mantener consistencia visual.

---

# 28. Seguridad

Nunca subir.

```text
.env.local
```

Nunca publicar.

- API Keys.

- Secrets.

- Tokens.

Nunca almacenar credenciales dentro del código.

---

# 29. SEO

Actualmente el proyecto contempla la incorporación de.

✔ Metadata.

✔ Open Graph.

✔ Twitter Cards.

✔ Robots.

✔ Sitemap.

✔ Structured Data.

✔ Google Search Console.

✔ Google Analytics.

Toda nueva página debe contemplar SEO desde su creación.

---

# 30. Checklist antes de Producción

Antes de integrar cualquier cambio a main verificar.

## Código

□ Sin errores TypeScript.

□ Sin warnings importantes.

□ Código limpio.

□ Componentes reutilizables.

---

## Visual

□ Responsive.

□ Desktop.

□ Tablet.

□ Mobile.

---

## Multimedia

□ Imágenes.

□ Videos.

□ Logos.

□ Galerías.

---

## Navegación

□ Navbar.

□ Footer.

□ Links.

□ Botones.

---

## Contenido

□ Español.

□ Inglés.

□ Ortografía.

□ Traducciones.

---

## Cloudinary

□ Recursos cargados.

□ Public ID correcto.

□ Helper funcionando.

---

## Git

□ Rama correcta.

□ Build exitoso.

□ Commit descriptivo.

□ Push.

□ Merge.

---

## Producción

□ Deploy exitoso.

□ Sitio funcionando.

□ Consola limpia.

---

# 31. Mantenimiento

Se recomienda revisar periódicamente.

- Dependencias.

- Cloudinary.

- Vercel.

- Dominio.

- Certificado SSL.

- SEO.

- Links rotos.

- Performance.

- Lighthouse.

---

# 32. Roadmap Técnico

## Infraestructura

- [x] Next.js

- [x] TypeScript

- [x] Tailwind

- [x] Cloudinary

- [x] GitHub

- [x] Vercel

- [x] Dominio propio

---

## Frontend

- [x] Home

- [x] Provincias

- [x] Lugares

- [x] Staff

- [x] FAQ

- [x] Contacto

---

## Internacionalización

- [x] Español

- [x] Inglés

---

## Pendiente

- [ ] SEO avanzado

- [ ] Google Search Console

- [ ] Google Analytics

- [ ] Sitemap

- [ ] Robots

- [ ] Open Graph

- [ ] Twitter Cards

- [ ] Schema.org

- [ ] Blog

- [ ] CMS

- [ ] Base de datos

- [ ] Sistema de reservas

- [ ] Panel administrativo

- [ ] Dashboard interno

- [ ] Gestión de hoteles

- [ ] Gestión de excursiones

---

# 33. Historial del Proyecto

## Etapa 1

Creación del proyecto.

---

## Etapa 2

Diseño visual.

---

## Etapa 3

Internacionalización.

---

## Etapa 4

Optimización visual.

---

## Etapa 5

Migración completa a Cloudinary.

---

## Etapa 6

Deploy en Vercel.

---

## Etapa 7

Conexión del dominio.

---

## Etapa 8

Documentación técnica.

---

## Próxima etapa

SEO profesional.

---

# 34. Filosofía del Proyecto

Argentine Route fue concebido como una plataforma moderna, escalable y preparada para evolucionar durante muchos años.

Cada nueva funcionalidad debe respetar los principios establecidos desde el inicio del proyecto.

## Principios

✔ Código limpio.

✔ Arquitectura escalable.

✔ Componentes reutilizables.

✔ Diseño consistente.

✔ Excelente experiencia de usuario.

✔ Rendimiento.

✔ Mantenibilidad.

✔ Documentación.

✔ Internacionalización.

✔ Calidad antes que velocidad.

---

# 35. Créditos

Proyecto desarrollado por

**Jesús García**

Lighting Designer

Full Stack Developer

Rosario, Santa Fe

Argentina

GitHub

https://github.com/JAJesusGarcia

LinkedIn

https://linkedin.com/in/jesusjagarcia

---

# Fin de la documentación

Última actualización

Julio 2026

Versión

1.0.0

Estado

Producción

Sitio oficial

https://argentineroute.com