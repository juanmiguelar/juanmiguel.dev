<template>
  <v-footer height="40" class="d-flex justify-center pa-0">
    <div class="text-caption">&copy; {{ currentYear }} Juan Miguel Arias Mejias</div>
  </v-footer>
</template>
<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
