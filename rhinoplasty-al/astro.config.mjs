// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rhinoplasty.al',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it', 'sq'],
    routing: { prefixDefaultLocale: false },
  },
});
