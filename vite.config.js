// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),        // keep this for React support
    tailwindcss(),  // add this line for Tailwind plugin
  ],
})
