import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://norbu.link',
  output: 'static',
  trailingSlash: 'never',
  server: { port: 45451 },
  integrations: [sitemap()],
});
