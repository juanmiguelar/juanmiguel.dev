<template>
  <v-app>
    <NavigationBar />
    <v-main>
      <slot />
    </v-main>
    <AppFooter />
  </v-app>
</template>
<script setup lang="ts">
import NavigationBar from '~/components/NavigationBar.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>
