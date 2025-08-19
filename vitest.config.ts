import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Avoid importing `describe`, `it`, `expect` in every file
    environment: 'jsdom', // Simulate a browser environment
    setupFiles: './src/tests/setup/setupTests.ts', // Optional: path to a setup file
    // Add this section for coverage
    coverage: {
      provider: 'v8', // or 'istanbul'
      reporter: ['text', 'json', 'html'], // Output in multiple formats
      exclude: [ // Files to exclude from coverage
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*{.,-}test.{js,jsx,ts,tsx}', // Exclude test files themselves
        '**/types.ts', // Often you exclude type definition files
      ],
    },
  },
})