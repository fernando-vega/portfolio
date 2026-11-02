// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Publicado en GitHub Pages: https://fernando-vega.github.io/portfolio/ (es) y /portfolio/en/ (en)
export default defineConfig({
  site: 'https://fernando-vega.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-CO', en: 'en-US' } },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
