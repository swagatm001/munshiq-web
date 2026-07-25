import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative paths: the same build works at a subpath (GitHub Pages) and at
  // the domain root (munshihq.com) without rebuilding.
  base: './',
  plugins: [react()],
})
