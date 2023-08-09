import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // アセットを出力するディレクトリを「assets」から「static/spa」に変更
    // index.htmlのアセットパスも変更される
    assetsDir: 'static/spa',
  }
})
