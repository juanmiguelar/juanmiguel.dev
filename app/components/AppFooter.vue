<template>
  <v-footer app class="pa-6">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <div>&copy; {{ new Date().getFullYear() }} Juan Miguel Arias</div>
          <div>
            <v-btn icon="mdi-github" href="https://github.com/username/project-name" target="_blank" aria-label="GitHub" />
            <v-btn icon="mdi-web" href="https://project-demo.com" target="_blank" aria-label="Demo" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script setup lang="ts">
</script>
