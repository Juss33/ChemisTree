import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/ChemisTree",
  plugins: [react()],
  define: {
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(pkg.version), 
  }
})
