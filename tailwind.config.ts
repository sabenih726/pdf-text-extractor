import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // pastikan semua file JS/TS dalam src dicakup
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
