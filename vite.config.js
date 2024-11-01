import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Hero-Section/' ,
  build: {
    outDir: 'dist', // Ensure the output directory is set to 'dist'
  },
});


