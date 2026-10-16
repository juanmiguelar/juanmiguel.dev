<template>
  <section class="section blog-index">
    <v-container>
      <header class="blog-header"><p class="eyebrow">{{ $t('blog.eyebrow') }}</p><h1>{{ $t('blog.title') }}</h1><p class="intro">{{ $t('blog.description') }}</p></header>
      <div v-if="publishedPosts.length" class="post-list"><BlogPostPreview v-for="post in publishedPosts" :key="post.slug" :post="post" /></div>
      <div v-else class="empty-blog" role="status"><h2>{{ $t('blog.emptyTitle') }}</h2><p>{{ $t('blog.emptyDescription') }}</p><NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink></div>
    </v-container>
  </section>
</template>
<script setup lang="ts">
import { publishedPosts, postTranslation } from '~/content/blog'
const { t, locale } = useI18n()
const localePath = useLocalePath()
const { public: { siteUrl } } = useRuntimeConfig()
const canonical = computed(() => `${siteUrl}${localePath('/blog')}`)
useSeoMeta({ keywords: 'platform engineering, Go, Kubernetes, GitOps, controllers', title: () => t('blog.metaTitle'), description: () => t('blog.description'), ogTitle: () => t('blog.metaTitle'), ogDescription: () => t('blog.description'), ogType: 'website', ogUrl: canonical, twitterCard: 'summary_large_image', ogImage: `${siteUrl}/img/juanmiguelweb.png` })
useHead(() => ({
  htmlAttrs: { lang: locale.value },
  link: [
    { rel: 'canonical', href: canonical.value },
    { rel: 'alternate', hreflang: 'en', href: `${siteUrl}${localePath('/blog', 'en')}` },
    { rel: 'alternate', hreflang: 'es', href: `${siteUrl}${localePath('/blog', 'es')}` },
    { rel: 'alternate', hreflang: 'x-default', href: `${siteUrl}${localePath('/blog', 'en')}` }
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify({
    '@context': 'https://schema.org', '@type': 'Blog', '@id': `${canonical.value}#blog`, url: canonical.value,
    name: t('blog.title'), description: t('blog.description'), inLanguage: locale.value,
    author: { '@type': 'Person', name: 'Juan Miguel Arias Mejias', url: siteUrl },
    blogPost: publishedPosts.map(post => ({ '@type': 'BlogPosting', headline: postTranslation(post, locale.value).title, url: `${siteUrl}${localePath(`/blog/${post.slug}`)}`, datePublished: post.publishedOn }))
  }) }]
}))
</script>
<style scoped>
.blog-index { min-height: 70dvh; }
.blog-header { max-width: 760px; margin-bottom: 48px; }
h1 { font-size: clamp(2.3rem, 4.5vw, 3.8rem); font-weight: 600; letter-spacing: -.05em; line-height: 1.1; text-wrap: balance; }
.intro { max-width: 60ch; margin-top: 24px; font-size: 1.1rem; line-height: 1.75; color: rgba(var(--v-theme-on-surface), .75); }
.post-list { border-top: 1px solid rgba(var(--v-theme-on-surface), .15); }
.post-list > :deep(article + article) { border-top: 1px solid rgba(var(--v-theme-on-surface), .15); }
.empty-blog { padding-block: 32px; }
.empty-blog p { margin-block: 16px; }
</style>
