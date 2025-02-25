import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  server: {
    port: 5174 // or another available port
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'pages/index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        projects: resolve(__dirname, 'pages/projects.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
      }
    }
  }
})