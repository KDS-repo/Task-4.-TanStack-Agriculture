import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

export default mergeConfig(viteConfig, defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/testing/setup.ts'],
  },
  // Theoretically not necessary, since mergeConfig should copy this from vite.config.ts
  /*
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  */
}))