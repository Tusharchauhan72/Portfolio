// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import netlify from '@astrojs/netlify';
import compress from 'astro-compress';

// Netlify sets the `NETLIFY` env var during builds; Railway (see railway.json) does not,
// so this picks the adapter that matches whichever platform is actually running the build.
const adapter = process.env.NETLIFY ? netlify() : node({ mode: 'standalone' });

// https://astro.build/config
export default defineConfig({
  site: 'https://tusharchauhan.com',
  output: 'static',
  adapter,
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '4321'),
  },
  integrations: [
    react(),
    mdx(),
    sitemap(),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      Image: false, // Skip images - already optimized
      SVG: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
});
