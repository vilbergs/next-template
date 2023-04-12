import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    alias: {
      '@/': '/src/',
      'test/': '/test/',
    },
  },
  plugins: [react()],
  test: {
    environment: 'jsdom',
    includeSource: ['./src/**/*.{js,ts,tsx}'],
    setupFiles: ['./test/unit/setup.ts'],
  },
})
