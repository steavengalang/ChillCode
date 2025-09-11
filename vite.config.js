import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// PWA temporarily disabled to avoid SW hijacking verification URL
// import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react()
    // VitePWA({...})
  ],
  build: {
    chunkSizeWarningLimit: 600,
  }
})


