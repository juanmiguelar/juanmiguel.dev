<template>
  <SeoHead :title="pageTitle" :description="pageDescription" />
  <section>
    <h1>{{ pageTitle }}</h1>
    <p>{{ pageDescription }}</p>
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import SeoHead from '~/components/global/SeoHead.vue'
const route = useRoute()
const pageTitle = computed(() => `${String(route.params.slug)} Project`)
const pageDescription = computed(() => `Details about ${pageTitle.value}`)
</script>
