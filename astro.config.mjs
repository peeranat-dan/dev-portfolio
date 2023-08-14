import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio.ninprd.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.includes('404'),
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});
