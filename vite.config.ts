import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const apikey: string = "e93957b0dfcf4df788b633557449f3eb"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    apikey: JSON.stringify(apikey)
  }
})
