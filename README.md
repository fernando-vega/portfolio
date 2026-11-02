# Fernando Vega — Portafolio

Sitio personal de Fernando Vega, Ingeniero de Sistemas · Full Stack.
Publicado en https://fernando-vega.github.io/portfolio/

Construido con [Astro](https://astro.build) (sitio estático, sin framework de UI en el cliente).
Diseño de referencia en Figma: _Portafolio Fernando Vega — Rediseño 2026_.

## Desarrollo

Requiere Node.js 22.23.4 o superior.

```bash
npm install
npm run dev       # http://localhost:4321/portfolio/
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
```

## Estructura

```
src/
  data/content.ts      # TODO el contenido (perfil, experiencia, proyectos, asesoría, stack, contacto)
  components/          # una sección por componente (Hero, About, Experience, Projects, Advisory, Stack, Contact)
  scripts/             # interacciones: partículas, ciclo de vida, tilt, respaldo de animaciones
  styles/global.css    # tokens (colores, tipografía, motion), hojas apiladas y animaciones de entrada
  assets/              # foto (Astro genera AVIF/WebP/JPG en varios tamaños)
public/                # CV.pdf, favicons, manifest, robots.txt
```

Para actualizar experiencia, proyectos o textos, edita solo `src/data/content.ts`.

## Hoja de vida (PDF)

Los CV viven en `public/cv/` y se publican tal cual:

| Idioma | Archivo | URL publicada |
|---|---|---|
| Español | `public/cv/Juan-Fernando-Vega-CV-ES.pdf` | https://fernando-vega.github.io/portfolio/cv/Juan-Fernando-Vega-CV-ES.pdf |
| Inglés | `public/cv/Juan-Fernando-Vega-CV-EN.pdf` | https://fernando-vega.github.io/portfolio/cv/Juan-Fernando-Vega-CV-EN.pdf |

Para actualizar: exporta desde Figma (página **📄 CV** → *File → Export frames to PDF*),
reemplaza el archivo con **el mismo nombre** y haz push a `master`. Los botones "Descargar CV" /
"Download CV" ya apuntan a esas rutas (configuradas en `meta.cvFile` de `src/i18n/es.ts` y `en.ts`).

## Animaciones

- Usan CSS scroll-driven animations (`animation-timeline`) con respaldo por `IntersectionObserver`.
- Todas respetan `prefers-reduced-motion`.
- Los valores viven como variables CSS en `src/styles/global.css` (`--sheet-radius`, `--tilt-max`, etc.).

## Despliegue

`.github/workflows/deploy.yml` construye y publica en GitHub Pages en cada push a `master`.
En **Settings → Pages → Build and deployment → Source** el repositorio debe usar **GitHub Actions**
(la versión anterior publicaba la carpeta `docs/`).
