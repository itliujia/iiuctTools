import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');//解决@路径问题

export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
