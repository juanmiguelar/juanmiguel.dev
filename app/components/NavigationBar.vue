<template>
  <v-app-bar app density="comfortable">
    <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" aria-label="Toggle navigation" />
    <v-toolbar-title>Juan Miguel Arias Mejias</v-toolbar-title>
    <v-spacer />
    <div class="d-none d-md-flex">
      <v-btn v-for="link in links" :key="link.href" :href="link.href" variant="text" class="mx-1" aria-label="Go to section">{{ link.label }}</v-btn>
      <v-btn icon="mdi-theme-light-dark" @click="toggleTheme" aria-label="Toggle theme" />
    </div>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary class="d-md-none">
    <v-list>
      <v-list-item v-for="link in links" :key="link.href" :href="link.href" @click="drawer = false" :title="link.label" />
      <v-list-item @click="toggleTheme" title="Toggle theme" prepend-icon="mdi-theme-light-dark" />
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const drawer = ref(false)
const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Recomendations', href: '#recomendations' },
  { label: 'Contact', href: '#contact' }
]
const theme = useTheme()
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
