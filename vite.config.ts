import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Mengarahkan output build ke folder dist
    assetsDir: 'assets', // Menyimpan file aset seperti gambar, css, js ke dalam folder assets
  },
  publicDir: 'public', // Folder statis untuk file-file yang tidak terkompilasi (seperti favicon, logo, dll)
  server: {
    open: true, // Otomatis membuka browser ketika server dimulai
  },
});
