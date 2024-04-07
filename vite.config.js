import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
 export default defineConfig({
  plugins: [react()],
  server: {

    
    proxy: {

      '/myapp': {
        target: 'http://54.80.141.44:4032',
        changeOrigin: true,
      }
      
    }
  },


})
