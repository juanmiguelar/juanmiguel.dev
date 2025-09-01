<template>
  <!-- CreativeWork microdata for project cards -->
  <article itemscope itemtype="https://schema.org/CreativeWork">
    <img :src="image" :alt="title" itemprop="image" />
    <h2 itemprop="name">{{ title }}</h2>
    <p itemprop="description">{{ description }}</p>
    <slot />
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  image: string
}
const props = defineProps<Props>()
</script>
