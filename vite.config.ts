import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Mengarahkan output build ke folder dist
  },
  publicDir: 'public', // Folder statis
});
