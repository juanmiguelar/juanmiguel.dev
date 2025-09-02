<template>
  <!-- CreativeWork microdata for project cards -->
  <UCard class="p-4" itemscope itemtype="https://schema.org/CreativeWork">
    <template #header>
      <h3 itemprop="name" class="text-lg font-semibold">{{ title }}</h3>
    </template>

    <NuxtImg :src="image" :alt="title" itemprop="image" class="mb-2 rounded" />
    <p itemprop="description" class="mb-2">{{ description }}</p>
    <slot />
  </UCard>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  image: string
}
const props = defineProps<Props>()
</script>
