import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import obfuscator from 'rollup-plugin-obfuscator'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(), 
    tailwindcss(),
    // Add obfuscation in production
    ...(mode === 'production' ? [
      obfuscator({
        options: {
          stringArray: true,
          stringArrayThreshold: 0.8,
          stringArrayEncoding: ['base64'],
          identifierNamesGenerator: 'hexadecimal',
          selfDefending: true,
          compact: true,
          controlFlowFlattening: true,
          controlFlowFlatteningThreshold: 0.8,
          deadCodeInjection: true,
          deadCodeInjectionThreshold: 0.4,
          debugProtection: true,
          debugProtectionInterval: 2000,
          disableConsoleOutput: true,
          numbersToExpressions: true,
          simplify: true,
          sourceMap: false,
          splitStrings: true,
          splitStringsChunkLength: 5,
          stringArrayCallsTransform: true,
          stringArrayCallsTransformThreshold: 0.8,
          stringArrayRotate: true,
          stringArrayShuffle: true,
          target: 'browser',
          transformObjectKeys: true,
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
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    legalComments: 'none'
  }
}))
