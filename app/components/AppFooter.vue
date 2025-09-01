<template>
  <v-footer app class="pa-6">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <div>&copy; {{ currentYear }} Juan Miguel Arias Mejias</div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
