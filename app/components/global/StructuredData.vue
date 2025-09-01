<script setup lang="ts">
/**
 * Injects JSON-LD structured data into the page head.
 */
const props = defineProps<{ schema: Record<string, any> }>()

useHead({
  script: [
    { type: 'application/ld+json', children: JSON.stringify(props.schema) }
  ]
})
</script>

<template></template>
