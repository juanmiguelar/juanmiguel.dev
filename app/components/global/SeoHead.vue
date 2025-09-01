<script setup lang="ts">
import { useSeo } from '~/composables/useSeo'
import type { SeoMetaOptions } from '~/types/seo'

const props = defineProps<SeoMetaOptions>()

// Apply SEO meta information using the central composable
useSeo().setSeo(props)
</script>

<template></template>
