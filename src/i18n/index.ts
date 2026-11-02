import { es } from './es';
import { en } from './en';
import type { Locale, SiteContent } from './types';

const dictionaries: Record<Locale, SiteContent> = { es, en };

export const locales: Locale[] = ['es', 'en'];
export const defaultLocale: Locale = 'es';

export function getContent(locale: string | undefined): SiteContent {
  return dictionaries[(locale as Locale) ?? defaultLocale] ?? dictionaries[defaultLocale];
}

/** Ruta raíz de cada idioma respetando el `base` de Astro (/portfolio/ y /portfolio/en/). */
export function localeHome(locale: Locale): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return locale === defaultLocale ? base : `${base}${locale}/`;
}

/** Ruta a un archivo de /public respetando el `base`. */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return `${base}${path.replace(/^\//, '')}`;
}

export type { Locale, SiteContent };
