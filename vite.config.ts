import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Portfolio/',
  build: {
    outDir: 'dist',
    minify: false, // Disable minification to prevent eval
    sourcemap: false,
    target: 'es2015', // Use older target to avoid modern features that might use eval
    rollupOptions: {
      output: {
        // Disable code splitting to prevent eval in dynamic imports
        manualChunks: undefined,
        inlineDynamicImports: true,
        format: 'es'
      }
    }
  },
  esbuild: {
    minifyIdentifiers: false,
    minifySyntax: false,
    minifyWhitespace: false
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
})