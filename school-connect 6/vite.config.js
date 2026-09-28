import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// On GitHub Pages the site lives at /<repository-name>/.
// The deploy workflow sets BASE_PATH automatically; locally it's just "/".
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
});
