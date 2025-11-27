// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

const siteUrl = 'https://juanmiguel.dev'
const isProd = process.env.NODE_ENV === 'production'

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss', '@mdi/font/css/materialdesignicons.min.css'],
  build: { transpile: ['vuetify'] },
  typescript: { strict: true },

  runtimeConfig: {
    public: {
      siteUrl
    }
  },
  
  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  site: {
    url: siteUrl,
    name: 'Juan Miguel Arias Mejias - Full-stack Developer',
    description: 'Portfolio of Juan Miguel Arias Mejias, full-stack developer specializing in Go and Vue.js.',
    defaultLocale: 'en',
    indexable: isProd,
    image: `${siteUrl}/img/juanmiguelweb.png`
  },
  
  image: {
    quality: 80,
    formats: ['webp', 'avif'],
    domains: ['placehold.co'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },
  
  robots: {
    sitemap: isProd ? `${siteUrl}/sitemap.xml` : undefined,
    rules: isProd
      ? [{ UserAgent: '*', Allow: '/' }]
      : [{ UserAgent: '*', Disallow: '/' }]
  },
  
  sitemap: {
    siteUrl,
    autoLastmod: true,
    urls: async () => {
      const staticRoutes = ['/']
      return staticRoutes
    }
  },
  
  vite: {
    ssr: { noExternal: ['vuetify'] },
    plugins: [
      vuetify({ autoImport: true })
    ],
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    },
    // Opcional: para ver más detalles en desarrollo
    logLevel: 'info'
  },
  
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Juan Miguel Arias Mejias - Full-stack Developer',
      titleTemplate: '%s | Juan Miguel Arias Mejias',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of Juan Miguel Arias Mejias, full-stack developer specializing in Go and Vue.js.' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'canonical', href: 'https://juanmiguel.dev' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' }
      ]
    }
  },
  
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/']
    },
    compressPublicAssets: true
  },
  
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true
  }
})
