import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import EsJS from '@es-js/vite-plugin-esjs'
import { vavite } from 'vavite'

export default defineConfig({
  plugins: [
    // https://github.com/es-js/esjs
    EsJS(),

    // https://github.com/cyco130/vavite
    vavite({
      serverEntry: './servidor/api.esjs',
      reloadOn: 'any-change',
      serveClientAssetsInDev: true,
    }),
  ],

  test: {},

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./servidor', import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.esjs',
    ],
  },

  build: {
    outDir: './dist',
  },
})
