<template>
  <section id="hero" class="section">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <h1 class="text-h3 text-md-h2">Full-stack Go &amp; Nuxt developer for fast, reliable products</h1>
          <p class="text-body-1">I design Go backends, Nuxt frontends, and performance-first APIs for teams that need quality shipped quickly.</p>
          <v-btn color="primary" class="mt-4" href="#contact" aria-label="Contact">Let's work together</v-btn>
        </v-col>
        <v-col cols="12" md="6" class="text-center">
          <NuxtImg
            src="/img/juanmiguel.jpeg"
            alt="Portrait of Juan Miguel Arias Mejias, full-stack developer"
            width="300"
            height="300"
            format="webp"
            sizes="(min-width: 960px) 300px, 220px"
            class="mx-auto hero-image"
            preload
            loading="eager"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script setup lang="ts"></script>

<style scoped>
.hero-image {
  border-radius: 50%;
}
</style>
