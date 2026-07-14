# Contribuir a Argentine Route

Gracias por tu interés en contribuir a **Argentine Route**.

Este documento define las reglas, convenciones y pasos recomendados para trabajar sobre el proyecto sin comprometer la estabilidad de producción.

---

## 1. Principios generales

Toda contribución debe respetar los siguientes principios:

- Mantener la rama `main` estable.
- Trabajar siempre en ramas independientes.
- Escribir commits claros y descriptivos.
- Probar los cambios antes de integrarlos.
- Ejecutar el build antes de cada merge.
- Mantener el contenido en español e inglés.
- Respetar la arquitectura existente.
- Evitar duplicación de código.
- Actualizar la documentación cuando corresponda.
- Priorizar calidad y mantenibilidad.

---

## 2. Requisitos

Antes de comenzar, asegurarse de tener instalado:

```bash
node --version
pnpm --version
git --version
```

Herramientas recomendadas:

- Node.js
- pnpm
- Git
- VS Code
- Cuenta de GitHub
- Acceso a Cloudinary cuando sea necesario
- Acceso a Vercel cuando sea necesario

---

## 3. Clonar el repositorio

```bash
git clone git@github.com:JAJesusGarcia/ARGENTINEROUTE.git
cd ARGENTINEROUTE
pnpm install
```

Iniciar desarrollo:

```bash
pnpm dev
```

Abrir:

```text
http://localhost:3000
```

---

## 4. Rama principal

La rama oficial de producción es:

```text
main
```

No se debe desarrollar directamente sobre `main`.

Todo cambio debe comenzar desde una versión actualizada de `main`.

```bash
git switch main
git pull origin main
```

---

## 5. Crear una rama

### Nueva funcionalidad

```bash
git switch -c feature/nombre-funcionalidad
```

Ejemplos:

```text
feature/seo
feature/hotels
feature/blog
feature/booking-system
```

### Corrección

```bash
git switch -c fix/nombre-correccion
```

Ejemplos:

```text
fix/footer-logo
fix/mobile-navbar
fix/gallery-layout
fix/cloudinary-image
```

### Refactorización

```bash
git switch -c refactor/nombre-refactor
```

Ejemplos:

```text
refactor/place-cards
refactor/i18n
refactor/data-structure
```

### Documentación

```bash
git switch -c docs/nombre-documentacion
```

Ejemplos:

```text
docs/update-readme
docs/cloudinary-guide
```

---

## 6. Convención de nombres de ramas

Utilizar:

```text
tipo/nombre-en-kebab-case
```

Correcto:

```text
feature/seo-optimization
fix/footer-logo
refactor/cloudinary-helper
docs/update-documentation
```

Incorrecto:

```text
mi rama
NuevaFeature
cambios
final
```

---

## 7. Commits

Se recomienda utilizar mensajes claros y breves.

### Prefijos sugeridos

```text
feat:
fix:
docs:
refactor:
style:
test:
chore:
perf:
```

Ejemplos:

```text
feat: add hotel section
fix: correct footer logo path
docs: add technical documentation
refactor: simplify Cloudinary helper
style: improve mobile spacing
perf: optimize hero image loading
chore: update dependencies
```

Evitar:

```text
update
changes
test
final
nuevo
arreglo
```

---

## 8. Desarrollo

Durante el desarrollo:

```bash
pnpm dev
```

Verificar:

- Home.
- Navbar.
- Footer.
- Provincias.
- Lugares.
- Galerías.
- Staff.
- Contacto.
- FAQ.
- Español.
- Inglés.
- Desktop.
- Tablet.
- Mobile.
- Consola del navegador.
- Errores 404 o 500.

---

## 9. Build obligatorio

Antes de hacer merge:

```bash
pnpm build
```

El build debe finalizar correctamente.

Si falla:

- No integrar la rama.
- Leer el primer error.
- Corregir el problema.
- Ejecutar nuevamente el build.

También puede verificarse producción local:

```bash
pnpm start
```

---

## 10. Cloudinary

Los recursos multimedia principales se almacenan en Cloudinary.

Estructura:

```text
ARGENTINEROUTE/
├── images/
│   ├── gallery/
│   ├── logos/
│   ├── places/
│   ├── provinces/
│   └── staff/
└── videos/
```

### Subir recursos

```bash
node scripts/upload-cloudinary.mjs
```

### Variables requeridas

```env
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Nunca subir `.env.local`.

### Uso en código

```ts
cloudinary("images/provinces/salta")
```

```ts
cloudinaryVideo("videos/video-hero")
```

No pegar URLs completas si existe un helper disponible.

---

## 11. Convenciones para imágenes

Utilizar nombres en kebab-case:

```text
buenos-aires.webp
buenos-aires-hero.webp
gaston-lemon2.webp
argentineroute-logo-footer.png
```

Evitar:

```text
Buenos Aires Final.webp
foto nueva.png
IMG_2026.jpg
sin título.webp
```

Las imágenes deben:

- Tener buena resolución.
- Estar optimizadas.
- No contener marcas de agua.
- Mantener una relación de aspecto coherente.
- Tener nombres descriptivos.
- Estar correctamente organizadas.

---

## 12. Contenido bilingüe

Toda nueva información debe existir en español e inglés.

Ejemplo:

```ts
description: "Descripción en español",
descriptionEn: "Description in English",
```

Nunca dejar campos incompletos.

Revisar:

- Ortografía.
- Tildes.
- Traducción natural.
- Terminología turística.
- Consistencia de nombres propios.

---

## 13. Archivos de datos

El contenido principal se encuentra en:

```text
data/provinces.ts
data/places.ts
data/staff.ts
```

No mezclar datos de contenido con componentes visuales salvo que sea estrictamente necesario.

Mantener:

- Interfaces actualizadas.
- IDs únicos.
- Slugs únicos.
- Orden coherente.
- Rutas válidas.
- Traducciones completas.

---

## 14. Componentes

Antes de crear un componente nuevo:

- Buscar uno existente.
- Evaluar si puede reutilizarse.
- Evitar duplicar estilos y lógica.
- Mantener responsabilidades pequeñas.

Los componentes deben:

- Ser fáciles de leer.
- Tener nombres descriptivos.
- Evitar lógica innecesaria.
- Respetar TypeScript.
- Ser responsive.

---

## 15. Estilos

El proyecto utiliza Tailwind CSS.

Recomendaciones:

- Mantener consistencia visual.
- Evitar estilos inline.
- Reutilizar patrones.
- Respetar breakpoints.
- Verificar contraste.
- Mantener espaciados coherentes.

---

## 16. Pull Request

Cuando una rama esté lista:

```bash
git add .
git commit -m "feat: descripción del cambio"
git push -u origin nombre-rama
```

Crear un Pull Request con:

```text
base: main
compare: nombre-rama
```

El Pull Request debe incluir:

- Resumen del cambio.
- Motivo.
- Capturas cuando sea visual.
- Archivos principales modificados.
- Confirmación de build exitoso.
- Posibles riesgos.
- Pasos para probar.

---

## 17. Merge

Antes del merge:

- Rama actualizada.
- Build exitoso.
- Preview revisada.
- Sin errores en consola.
- Traducciones completas.
- Recursos multimedia disponibles.
- Documentación actualizada.

Merge desde terminal:

```bash
git switch main
git pull origin main
git merge nombre-rama
git push origin main
```

No usar `--force` salvo una situación excepcional y totalmente comprendida.

---

## 18. Deploy

Cada push a `main` genera un despliegue automático en Vercel.

Después del deploy verificar:

```text
https://argentineroute.com
```

Revisar:

- Página principal.
- Navegación.
- Responsive.
- Imágenes.
- Videos.
- Idiomas.
- Consola.
- Network.
- Enlaces.

---

## 19. Conflictos

Si aparece un conflicto:

```bash
git status
```

Abrir los archivos indicados y resolver únicamente después de comprender ambos cambios.

Luego:

```bash
git add .
git commit
```

Para cancelar un merge en progreso:

```bash
git merge --abort
```

No borrar archivos de conflicto sin revisar su propósito.

---

## 20. Seguridad

Nunca subir:

- `.env.local`
- API Keys
- API Secrets
- Tokens
- Contraseñas
- Credenciales de servicios
- Archivos privados

Verificar:

```bash
git ls-files .env.local
```

No debe devolver resultados.

---

## 21. Documentación

Actualizar cuando corresponda:

```text
README.md
README.es.md
README.en.md
DOCUMENTATION.md
CHANGELOG.md
CONTRIBUTING.md
```

Todo cambio importante debe registrarse en `CHANGELOG.md`.

---

## 22. Checklist de contribución

Antes de enviar cambios:

- [ ] La rama parte de `main` actualizado.
- [ ] El nombre de la rama es descriptivo.
- [ ] El código compila.
- [ ] `pnpm build` finaliza correctamente.
- [ ] No hay errores en consola.
- [ ] Se verificó responsive.
- [ ] Se verificaron español e inglés.
- [ ] Las imágenes cargan.
- [ ] Los videos funcionan.
- [ ] Los enlaces funcionan.
- [ ] No se subieron secretos.
- [ ] Los commits son descriptivos.
- [ ] La documentación fue actualizada.
- [ ] El changelog fue actualizado cuando corresponde.

---

## 23. Código de conducta

Toda colaboración debe mantenerse:

- Respetuosa.
- Profesional.
- Constructiva.
- Clara.
- Enfocada en mejorar el proyecto.

Las decisiones técnicas deben priorizar el bienestar del proyecto y la experiencia de sus usuarios.

---

## 24. Contacto

Autor y responsable principal:

**Jesús García**

GitHub:

```text
https://github.com/JAJesusGarcia
```

LinkedIn:

```text
https://linkedin.com/in/jesusjagarcia
```

Sitio oficial:

```text
https://argentineroute.com
```

---

Gracias por contribuir a Argentine Route.