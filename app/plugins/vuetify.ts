import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#0F172A', // Deep Navy / Slate 900
            secondary: '#D4AF37', // Metallic Gold
            accent: '#C4A484', // Bronze
            background: '#FFFFFF',
            surface: '#FFFFFF',
            'surface-variant': '#F1F5F9', // Light Slate Gray
            error: '#B00020',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
          }
        },
        dark: {
          dark: true,
          colors: {
            primary: '#D4AF37', // Gold (pop against dark)
            secondary: '#94A3B8', // Slate 400
            background: '#0F172A', // Deep Navy
            surface: '#1E293B', // Slate 800
            'surface-variant': '#1E293B', // Consistent with surface
            error: '#CF6679',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
          }
        }
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
