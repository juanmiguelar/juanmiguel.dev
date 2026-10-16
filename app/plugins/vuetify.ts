import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { defineComponent, h } from 'vue'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { portfolioIcons } from '~/utils/icons'

export default defineNuxtPlugin(nuxtApp => {
  const savedTheme = useCookie<'light' | 'dark' | null>('portfolio-theme')
  const vuetify = createVuetify({
    ssr: true,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi: {
          component: defineComponent({
            props: ['icon', 'tag'],
            setup(props, { attrs }) {
              return () => h(mdi.component, { ...attrs, tag: props.tag, icon: portfolioIcons[String(props.icon)] })
            }
          })
        }
      }
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#765B20',
            secondary: '#765B20',
            accent: '#765B20',
            background: '#FAFBFC',
            surface: '#FAFBFC',
            'on-surface': '#17212D',
            'on-background': '#17212D',
            'on-primary': '#FAFBFC',
            'surface-variant': '#EFF1F4',
            error: '#B00020',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
          }
        },
        dark: {
          dark: true,
          colors: {
            primary: '#DCC78E',
            secondary: '#DCC78E',
            background: '#111923',
            surface: '#17212D',
            'on-surface': '#EDF1F5',
            'on-background': '#EDF1F5',
            'on-primary': '#17212D',
            'surface-variant': '#202D3B',
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
  // Prerendered HTML uses light mode. Apply preferences only after hydration.
  onNuxtReady(() => {
    vuetify.theme.global.name.value = savedTheme.value || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })
})
