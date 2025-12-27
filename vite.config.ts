import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 如果是项目页面（非 username.github.io），改为 '/repository-name/'
  build: {
    outDir: 'dist',
  },
})
