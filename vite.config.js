import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: null,
      includeAssets: ['favicon.ico', 'logo.png'],
      workbox: {
        navigateFallbackDenylist: [
          /^\/googlec845c84079b9ff82\.html$/,
          /^\/google[a-z0-9]+\.html$/
        ]
      },
      manifest: {
        name: 'ChillCode',
        short_name: 'ChillCode',
        description: 'Jasa pembuatan website profesional mulai 100K',
        theme_color: '#1E40AF',
        background_color: '#FFFFFF',
        display: 'standalone',
        icons: [
          {
            src: '/logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  build: {
    chunkSizeWarningLimit: 600,
  }
})


