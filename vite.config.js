import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      entry: './src/components/index.js',
      name: 'sparc-design-system-components-2',
    },
    rollupOptions: {
      // Externalize dependencies to avoid bundling them
      external: ['vue'],
      output: {
        // Specify the format as 'umd' for a Universal Module Definition
        format: 'umd',
        exports: 'default',
        // Set the globals for your dependencies (e.g., 'vue': 'Vue')
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  css: {
    extract: false,
  },
  plugins: [
    vue(),
    svgLoader()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
