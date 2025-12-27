import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 对于 GitHub Pages，如果是用户页面则设为 '/'，项目页面设为 '/repository-name/'
})

