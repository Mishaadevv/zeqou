import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves static files. `base: './'` keeps asset URLs relative
// so the site works as a user site (username.github.io) and as a project
// site (username.github.io/repo/) without changes.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
  },
})
