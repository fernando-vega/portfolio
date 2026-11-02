// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// El sitio se publica en GitHub Pages bajo https://fernando-vega.github.io/portfolio/
export default defineConfig({
  site: 'https://fernando-vega.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
