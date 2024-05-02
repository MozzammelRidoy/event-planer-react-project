import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add an alias for the problematic import
      'lightgallery/lightgallery': '/path/to/lightgallery/lightgallery',
    },
  },
})
