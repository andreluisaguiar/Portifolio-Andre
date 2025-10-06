import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const apiTarget = 'http://localhost:5175'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      '/api': {
        target: apiTarget,
        changeOrigin: true
      }
    }
  }
})
