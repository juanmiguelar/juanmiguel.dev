<!-- components/SeoHead.vue -->
<script setup lang="ts">
import { useSeo } from '~/composables/useSeo'
import type { SeoMetaOptions } from '~/types/seo'

const props = defineProps<SeoMetaOptions>()
useSeo().setSeo(props)
</script>

<template>
  <!-- SEO component -->
</template>