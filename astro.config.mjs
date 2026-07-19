import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  output: 'static',
  site: 'https://julesfolio.com',
  // Old routes from the merged-bucket IA → new four-category IA.
  redirects: {
    '/multimedia': '/',
    '/video': '/videography',
    '/branding': '/graphic-design',
  },
});
