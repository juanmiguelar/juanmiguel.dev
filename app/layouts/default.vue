<template>
  <v-app>
    <a href="#main-content" class="skip-link">{{ $t('nav.skip') }}</a>
    <NavigationBar />
    <v-main id="main-content" tabindex="-1">
      <slot />
    </v-main>
    <AppFooter />
  </v-app>
</template>
<script setup lang="ts">
import NavigationBar from '~/components/NavigationBar.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>
