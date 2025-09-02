<template>
  <div>
    <NavigationBar />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import NavigationBar from '~/components/NavigationBar.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>
