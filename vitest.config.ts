import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    alias: {
      '@/': '/',
    },
  },
  plugins: [react()],
  test: {
    environment: 'jsdom',
    includeSource: ['./**/*.{js,ts,tsx}'],
    setupFiles: ['./test/component/setup.ts'],
  },
})
