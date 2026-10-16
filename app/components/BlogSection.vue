<template>
  <section v-if="publishedPosts.length" id="blog" class="section blog-section">
    <v-container>
      <header class="section-heading"><h2>{{ $t('blog.homeTitle') }}</h2><p>{{ $t('blog.description') }}</p></header>
      <BlogPostPreview v-for="post in publishedPosts.slice(0, 2)" :key="post.slug" :post="post" compact />
      <NuxtLink :to="localePath('/blog')" class="all-posts">{{ $t('blog.viewAll') }}<v-icon icon="mdi-arrow-right" size="18" /></NuxtLink>
    </v-container>
  </section>
</template>
<script setup lang="ts">
import { publishedPosts } from '~/content/blog'
const localePath = useLocalePath()
</script>
<style scoped>
.blog-section { background: rgb(var(--v-theme-surface-variant)); }
.section-heading { margin-bottom: 8px; }
.all-posts { display: inline-flex; gap: 8px; align-items: center; font-weight: 600; font-size: .9rem; margin-top: 24px; }
</style>
