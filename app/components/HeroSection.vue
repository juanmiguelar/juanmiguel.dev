<template>
  <section id="hero" class="hero section" itemscope itemtype="https://schema.org/Person">
    <v-container class="hero-layout">
      <div class="hero-copy">
        <p class="eyebrow">{{ $t('home.hero.eyebrow') }}</p>
        <h1 itemprop="jobTitle">{{ $t('home.hero.title') }}</h1>
        <p class="hero-description" itemprop="description">{{ $t('home.hero.subtitle') }}</p>
        <v-btn color="primary" size="large" href="#projects" append-icon="mdi-arrow-down">{{ $t('home.hero.cta') }}</v-btn>
      </div>
      <div class="hero-portrait">
        <NuxtImg src="/img/juanmiguel.jpeg" :alt="$t('home.hero.alt')" width="440" height="480" format="webp" sizes="sm:90vw md:40vw lg:440px" preload loading="eager" itemprop="image" />
      </div>
      <meta itemprop="name" content="Juan Miguel Arias Mejias" />
      <meta itemprop="url" :content="siteUrl" />
    </v-container>
  </section>
</template>
<script setup lang="ts">
const { public: publicRuntime } = useRuntimeConfig()
const siteUrl = publicRuntime.siteUrl || 'https://juanmiguel.dev'
</script>
<style scoped>
.hero { padding-block: clamp(40px, 6vw, 80px); }
.hero-layout { display: grid; grid-template-columns: 1.4fr 1fr; align-items: center; gap: clamp(32px, 6vw, 88px); }
.hero-copy { max-width: 650px; }
h1 { font-size: clamp(2.5rem, 4.7vw, 4.2rem); line-height: 1.08; letter-spacing: -.055em; font-weight: 650; text-wrap: balance; }
.hero-description { font-size: clamp(1.05rem, 1.6vw, 1.2rem); line-height: 1.65; margin: 24px 0 30px; max-width: 40ch; color: rgba(var(--v-theme-on-surface), .76); }
.hero-portrait { border-radius: 12px; overflow: hidden; background: rgb(var(--v-theme-surface-variant)); }
.hero-portrait img { display: block; width: 100%; height: auto; aspect-ratio: 11/12; object-fit: cover; object-position: center 38%; }
@media (max-width: 767px) { .hero-layout { grid-template-columns: 1fr; gap: 32px; } h1 { max-width: 18ch; } .hero-portrait { max-width: 440px; width: 100%; } .hero-portrait img { aspect-ratio: 4/3; object-position: center 38%; } }
</style>
