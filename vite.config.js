import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/HeroSection/',
  build: {
    outDir: 'dist', // Ensure this matches your deployment setup
  },
});
