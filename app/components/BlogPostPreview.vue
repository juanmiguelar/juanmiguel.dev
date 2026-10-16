<template>
  <article class="post-preview">
    <div class="post-meta"><span>{{ translation.category }}</span><time :datetime="post.publishedOn">{{ formatBlogDate(post.publishedOn, locale) }}</time></div>
    <h3 v-if="compact"><NuxtLink :to="localePath(`/blog/${post.slug}`)">{{ translation.title }}</NuxtLink></h3>
    <h2 v-else><NuxtLink :to="localePath(`/blog/${post.slug}`)">{{ translation.title }}</NuxtLink></h2>
    <p>{{ translation.description }}</p>
    <div class="post-footer"><span>{{ $t('blog.readingTime', { minutes: readingMinutes(translation) }) }}</span><NuxtLink :to="localePath(`/blog/${post.slug}`)" :aria-label="`${$t('blog.readArticle')}: ${translation.title}`">{{ $t('blog.readArticle') }}<v-icon icon="mdi-arrow-right" size="18" /></NuxtLink></div>
  </article>
</template>
<script setup lang="ts">
import type { BlogPost } from '~/content/blog/types'
import { formatBlogDate, postTranslation, readingMinutes } from '~/content/blog'
const props = defineProps<{ post: BlogPost; compact?: boolean }>()
const { locale } = useI18n()
const localePath = useLocalePath()
const translation = computed(() => postTranslation(props.post, locale.value))
</script>
<style scoped>
.post-preview { padding-block: 32px; max-width: 800px; }
.post-meta { display: flex; flex-wrap: wrap; gap: 12px 24px; font-size: .8rem; color: rgba(var(--v-theme-on-surface), .72); margin-bottom: 16px; }
.post-meta > span { color: rgb(var(--v-theme-primary)); font-weight: 600; }
h2, h3 { font-size: clamp(1.5rem, 2.6vw, 2rem); line-height: 1.25; letter-spacing: -.035em; font-weight: 600; text-wrap: balance; }
h2 a, h3 a { text-decoration: none; color: inherit; }
h2 a:hover, h3 a:hover { text-decoration: underline; }
p { line-height: 1.75; margin-block: 16px 24px; color: rgba(var(--v-theme-on-surface), .75); max-width: 65ch; }
.post-footer { display: flex; align-items: center; flex-wrap: wrap; gap: 16px 32px; font-size: .85rem; }
.post-footer > span { color: rgba(var(--v-theme-on-surface), .65); }
.post-footer a { display: inline-flex; align-items: center; gap: 8px; font-weight: 600; }
</style>
