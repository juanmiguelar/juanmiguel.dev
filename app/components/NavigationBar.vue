<template>
  <v-app-bar app height="72" elevation="0" class="site-header">
    <div class="navigation-inner">
      <v-app-bar-nav-icon class="mobile-menu" @click="drawer = !drawer" :aria-label="$t('nav.toggle_navigation')" :aria-expanded="drawer" aria-controls="mobile-navigation" />
      <span class="site-name">Juan Miguel Arias Mejias</span>
      <nav class="desktop-navigation" :aria-label="$t('nav.toggle_navigation')">
        <a v-for="link in links" :key="link.href" :href="link.href" :aria-current="route.path === link.href ? 'page' : undefined">{{ link.label }}</a>
      </nav>
      <div class="navigation-actions">
        <v-btn icon variant="text" size="small" @click="toggleTheme" :aria-label="$t('nav.toggle_theme')" :aria-pressed="theme.global.current.value.dark"><v-icon size="21">mdi-theme-light-dark</v-icon></v-btn>
        <v-btn variant="text" size="small" @click="toggleLanguage" :aria-label="$t('nav.switch_language')">{{ locale === 'en' ? 'ES' : 'EN' }}</v-btn>
      </div>
    </div>
  </v-app-bar>
  <v-navigation-drawer id="mobile-navigation" v-model="drawer" temporary class="mobile-drawer">
    <nav :aria-label="$t('nav.toggle_navigation')"><v-list><v-list-item v-for="link in links" :key="link.href" :href="link.href" @click="drawer = false" :title="link.label" /></v-list></nav>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { useTheme } from 'vuetify'
const { t, locale, setLocale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const drawer = ref(false)
const links = computed(() => [
  { label: t('nav.home'), href: localePath('/') },
  { label: t('nav.services'), href: localePath('/#services') },
  { label: t('nav.projects'), href: localePath('/#projects') },
  { label: t('nav.recommendations'), href: localePath('/#recomendations') },
  { label: t('nav.blog'), href: localePath('/blog') },
  { label: t('nav.contact'), href: localePath('/#contact') }
])
const theme = useTheme()
const savedTheme = useCookie<'light' | 'dark' | null>('portfolio-theme', { maxAge: 60 * 60 * 24 * 365, sameSite: 'lax' })
const toggleTheme = () => {
  const next = theme.global.current.value.dark ? 'light' : 'dark'
  theme.global.name.value = next
  savedTheme.value = next
}
const toggleLanguage = async () => { await setLocale(locale.value === 'en' ? 'es' : 'en') }
</script>
<style scoped>
.site-header { border-bottom: 1px solid rgba(var(--v-theme-on-surface), .12); }
.navigation-inner { width: 100%; max-width: 1440px; margin-inline: auto; padding-inline: 28px; display: flex; align-items: center; gap: 24px; }
.site-name { font-size: .95rem; font-weight: 600; letter-spacing: -.035em; white-space: nowrap; }
.desktop-navigation { display: flex; margin-left: auto; gap: 22px; align-items: center; }
.desktop-navigation a { font-size: .82rem; text-decoration: none; color: rgba(var(--v-theme-on-surface), .78); white-space: nowrap; }
.desktop-navigation a:hover { color: rgb(var(--v-theme-primary)); }
.navigation-actions { display: flex; align-items: center; gap: 4px; }
.mobile-menu { display: none; }
@media (max-width: 1279px) { .desktop-navigation { display: none; } .mobile-menu { display: flex; margin: 0; } .navigation-actions { margin-left: auto; } .navigation-inner { gap: 12px; padding-inline: 16px; } }
@media (max-width: 480px) { .navigation-inner { gap: 4px; padding-inline: 10px; } .site-name { font-size: .8rem; } .navigation-actions { gap: 0; } }
@media (min-width: 1280px) { .mobile-drawer { display: none; } }
</style>
