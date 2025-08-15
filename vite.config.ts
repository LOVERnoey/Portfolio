import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import obfuscator from 'rollup-plugin-obfuscator'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(), 
    tailwindcss(),
    // Add lightweight obfuscation in production
    ...(mode === 'production' ? [
      obfuscator({
        options: {
          stringArray: true,
          stringArrayThreshold: 0.5,
          identifierNamesGenerator: 'hexadecimal',
          compact: true,
          controlFlowFlattening: false, // Disabled for performance
          deadCodeInjection: false, // Disabled for performance
          debugProtection: false, // Disabled for performance
          disableConsoleOutput: false, // Disabled for performance
          numbersToExpressions: false, // Disabled for performance
          simplify: true,
          sourceMap: false,
          splitStrings: false, // Disabled for performance
          stringArrayCallsTransform: false, // Disabled for performance
          stringArrayRotate: false, // Disabled for performance
          stringArrayShuffle: false, // Disabled for performance
          target: 'browser',
          transformObjectKeys: false, // Disabled for performance
          unicodeEscapeSequence: false
        }
      })
    ] : [])
  ],
  base: './', // Use relative paths for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        chunkFileNames: 'assets/[hash].js',
        entryFileNames: 'assets/[hash].js',
        assetFileNames: 'assets/[hash].[ext]'
      }
    },
    target: 'esnext'
  },
  esbuild: {
    drop: ['console', 'debugger'],
    minifyIdentifiers: false, // Reduced for performance
    minifySyntax: true,
    minifyWhitespace: true,
    legalComments: 'none'
  }
}))
