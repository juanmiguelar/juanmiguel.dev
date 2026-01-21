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
    '@nuxtjs/sitemap',
    '@nuxtjs/i18n'
  ],

  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'es', file: 'es.json', name: 'Español' }
    ],
    detectBrowserLanguage: false,
    compilation: {
      strictMessage: false
    }
  },

  site: {
    url: siteUrl,
    name: 'Juan Miguel Arias Mejias | Full-stack Go & Nuxt Developer',
    description: 'Full-stack Go & Nuxt developer delivering fast APIs and polished web apps. I design architectures, build secure services, and ship engaging UI for SaaS teams.',
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
    sitemap: isProd ? [`${siteUrl}/sitemap.xml`] : [],
    groups: isProd
      ? [
          {
            userAgent: '*',
            allow: ['/']
          }
        ]
      : [
          {
            userAgent: '*',
            disallow: ['/']
          }
        ],
    blockAiBots: isProd,
    blockNonSeoBots: isProd,
    mergeWithRobotsTxtPath: false,
    cacheControl: 'max-age=86400, must-revalidate',
    credits: false
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
      title: 'Juan Miguel Arias Mejias',
      titleTemplate: (titleChunk) => {
        const base = 'Juan Miguel Arias Mejias'
        if (!titleChunk) return base
        return titleChunk.includes(base) ? titleChunk : `${titleChunk} | ${base}`
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Full-stack Go & Nuxt developer delivering fast APIs and polished web apps. I design architectures, build secure services, and ship engaging UI for SaaS teams.' },
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
      routes: ['/sitemap.xml', '/robots.txt', '/'],
      ignore: ['/_vercel/image', '/_ipx']
    },
    compressPublicAssets: true
  },
  
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true
  }
})
