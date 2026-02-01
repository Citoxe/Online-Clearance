import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        
        main: resolve(__dirname, 'index.html'),
        sadmin: resolve(__dirname, 'sadmin.html'),
        dadmin: resolve(__dirname, 'dadmin.html'),
        layout: resolve(__dirname, 'layout.html'),
      
      },
    },
  },
  server: {

    open: true,
    watch: {
      usePolling: true,
    },
  },
});