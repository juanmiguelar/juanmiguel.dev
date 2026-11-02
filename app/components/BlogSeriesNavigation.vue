<template>
  <nav v-if="index >= 0" class="series-navigation" :aria-label="$t('blog.series.navigation')">
    <p class="series-position">{{ $t('blog.series.lesson', { current: index + 1, total: lessons.length }) }}</p>
    <NuxtLink class="series-index" :to="localePath(goBasicsPath)">{{ $t('blog.series.backToSeries') }}</NuxtLink>
    <div class="series-neighbors">
      <NuxtLink v-if="previous" :to="localePath(`/blog/${previous.slug}`)"><span>{{ $t('blog.series.previous') }}</span>{{ postTranslation(previous, locale).title }}</NuxtLink>
      <NuxtLink v-if="next" :to="localePath(`/blog/${next.slug}`)"><span>{{ $t('blog.series.next') }}</span>{{ postTranslation(next, locale).title }}</NuxtLink>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { goBasicsPosts, goBasicsPath, postTranslation } from '~/content/blog'
const props = defineProps<{ slug: string }>()
const { locale } = useI18n()
const localePath = useLocalePath()
const lessons = goBasicsPosts.filter(post => post.status === 'published')
const index = computed(() => lessons.findIndex(post => post.slug === props.slug))
const previous = computed(() => index.value > 0 ? lessons[index.value - 1] : undefined)
const next = computed(() => index.value >= 0 ? lessons[index.value + 1] : undefined)
</script>
<style scoped>
.series-navigation { border-block: 1px solid rgba(var(--v-theme-on-surface), .2); margin-top: 40px; padding-block: 24px; }
.series-position { font-size: .85rem; margin-bottom: 8px; }
.series-index { font-weight: 600; }
.series-neighbors { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; margin-top: 24px; }
.series-neighbors a { line-height: 1.6; font-size: .95rem; }
.series-neighbors span { display: block; font-size: .8rem; margin-bottom: 4px; }
a:focus-visible { outline: 2px solid rgb(var(--v-theme-primary)); outline-offset: 4px; }
@media (max-width: 767px) { .series-neighbors { grid-template-columns: minmax(0, 1fr); } }
</style>
