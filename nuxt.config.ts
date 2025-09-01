// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss', '@mdi/font/css/materialdesignicons.min.css'],
  build: { transpile: ['vuetify'] },
  typescript: { strict: true },
  vite: {
    ssr: { noExternal: ['vuetify'] },
    plugins: [
      vuetify({ autoImport: true })
    ]
  },
  app: {
    head: {
      title: 'Juan Miguel Arias Mejias - Full-stack Developer',
      meta: [
        { name: 'description', content: 'Portfolio of Juan Miguel Arias Mejias, full-stack developer specializing in Go and Vue.js.' }
      ]
    }
  }
})
