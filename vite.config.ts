import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH,
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version), 
  }
})
