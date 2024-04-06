import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
 export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {

      '/myapp': {
        target: 'https://minor-proj-liveness.onrender.com',
        changeOrigin: true,
      }
      
    }
  }
})
