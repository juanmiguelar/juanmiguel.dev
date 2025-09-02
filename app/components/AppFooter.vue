<template>
  <footer class="py-6">
    <UContainer>
      <div class="text-center">
        &copy; {{ currentYear }} Juan Miguel Arias Mejias
      </div>
    </UContainer>
  </footer>
</template>
<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
