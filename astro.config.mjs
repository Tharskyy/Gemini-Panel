import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  server: {
    port: 3000,
    host: true
  },
  adapter: node({
    mode: "standalone", // or "middleware", adjust if necessary
  })
}); 