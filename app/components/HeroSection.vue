<template>
  <section id="hero" class="section" itemscope itemtype="https://schema.org/Person">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <h1 class="text-h3 text-md-h2" itemprop="jobTitle">{{ $t('home.hero.title') }}</h1>
          <p class="text-body-1" itemprop="description">{{ $t('home.hero.subtitle') }}</p>
          <v-btn color="primary" class="mt-4" href="#contact" :aria-label="$t('nav.contact')">{{ $t('home.hero.cta') }}</v-btn>
        </v-col>
        <v-col cols="12" md="6" class="text-center">
          <NuxtImg
            src="/img/juanmiguel.jpeg"
            :alt="$t('home.hero.alt')"
            width="300"
            height="300"
            format="webp"
            sizes="(min-width: 960px) 300px, 220px"
            class="mx-auto hero-image"
            preload
            loading="eager"
            itemprop="image"
          />
          <meta itemprop="name" content="Juan Miguel Arias Mejias" />
          <meta itemprop="url" :content="siteUrl" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script setup lang="ts">
const { public: publicRuntime } = useRuntimeConfig()
const siteUrl = publicRuntime.siteUrl || 'https://juanmiguel.dev'
</script>

<style scoped>
.hero-image {
  border-radius: 50%;
}
</style>
