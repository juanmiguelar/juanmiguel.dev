<template>
  <section id="recomendations" class="section">
    <v-container>
      <header class="section-heading"><h2>{{ $t('home.recommendations.title') }}</h2></header>
      <div class="recommendation-grid">
        <figure v-for="person in people" :key="person.key">
          <blockquote>“{{ $t(`home.recommendations.items.${person.key}.quote`) }}”</blockquote>
          <figcaption><NuxtImg :src="person.avatar" :alt="person.name" width="44" height="44" sizes="44px" format="webp" loading="lazy" /><div><span>{{ person.name }}</span><small>{{ $t('home.recommendations.role') }}</small></div></figcaption>
        </figure>
      </div>
    </v-container>
  </section>
</template>
<script setup lang="ts">
interface Recommendation { key: string; name: string; avatar: string }
const people: Recommendation[] = [{ key: 'lenin', name: 'Lenin Chacon', avatar: '/img/lenin.jpeg' }, { key: 'kenneth', name: 'Kenneth Sanabria', avatar: '/img/ken.jpeg' }]
</script>
<style scoped>
.recommendation-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; }
figure { margin: 0; padding: 0; }
blockquote { font-size: clamp(1rem, 1.5vw, 1.15rem); line-height: 1.65; letter-spacing: -.015em; }
figcaption { display: flex; align-items: center; gap: 14px; margin-top: 24px; }
figcaption img { border-radius: 50%; object-fit: cover; }
figcaption span, figcaption small { display: block; font-size: .9rem; }
figcaption small { font-size: .8rem; margin-top: 3px; color: rgba(var(--v-theme-on-surface), .65); }
@media (max-width: 767px) { .recommendation-grid { grid-template-columns: 1fr; gap: 40px; } }
</style>
