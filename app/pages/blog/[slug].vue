<template>
  <v-container class="article-container">
    <nav class="breadcrumbs" :aria-label="$t('blog.breadcrumbs')"><NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink><span aria-hidden="true">/</span><NuxtLink :to="localePath('/blog')">{{ $t('nav.blog') }}</NuxtLink></nav>
    <article>
      <header class="article-header"><p class="eyebrow">{{ translation.category }}</p><h1>{{ translation.title }}</h1><p class="article-description">{{ translation.description }}</p>
        <div class="byline"><span>Juan Miguel Arias Mejias</span><time :datetime="post.publishedOn">{{ formatBlogDate(post.publishedOn, locale) }}</time><span>{{ $t('blog.readingTime', { minutes: readingMinutes(translation) }) }}</span></div>
        <p v-if="post.updatedOn" class="updated">{{ $t('blog.updated') }} <time :datetime="post.updatedOn">{{ formatBlogDate(post.updatedOn, locale) }}</time></p>
      </header>
      <div class="article-layout">
        <aside class="article-toc"><nav :aria-label="$t('blog.onThisPage')"><h2>{{ $t('blog.onThisPage') }}</h2><ol><li v-for="section in translation.sections" :key="section.id"><a :href="`#${section.id}`">{{ section.heading }}</a></li></ol></nav></aside>
        <div class="article-body">
          <section v-for="section in translation.sections" :id="section.id" :key="section.id"><h2>{{ section.heading }}</h2><p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p><pre v-if="section.code" class="article-code" tabindex="0" :aria-label="section.code.language"><code>{{ section.code.value }}</code></pre><ul v-if="section.checklist"><li v-for="item in section.checklist" :key="item">{{ item }}</li></ul></section>
          <section class="references"><h2>{{ $t('blog.references') }}</h2><ul><li v-for="reference in post.references" :key="reference.url"><a :href="reference.url" rel="noopener noreferrer">{{ reference.title }}</a></li></ul></section>
          <footer class="article-footer"><p>{{ $t('blog.authorBio') }}</p><NuxtLink :to="localePath('/blog')">{{ $t('blog.backToBlog') }}</NuxtLink><NuxtLink :to="localePath('/#projects')">{{ $t('blog.exploreExperience') }}</NuxtLink></footer>
        </div>
      </div>
    </article>
  </v-container>
</template>
<script setup lang="ts">
import { publishedPosts, postTranslation, readingMinutes, formatBlogDate } from '~/content/blog'
definePageMeta({ key: route => route.path })
const route = useRoute()
const { t, locale } = useI18n()
const localePath = useLocalePath()
const post = publishedPosts.find(item => item.slug === route.params.slug)
if (!post) throw createError({ statusCode: 404, statusMessage: 'Article not found' })
const translation = computed(() => postTranslation(post, locale.value))
const { public: { siteUrl } } = useRuntimeConfig()
const path = `/blog/${post.slug}`
const canonical = computed(() => `${siteUrl}${localePath(path)}`)
const image = `${siteUrl}/img/juanmiguelweb.png`
useSeoMeta({
  keywords: () => post.tags.join(', '),
  title: () => translation.value.title, description: () => translation.value.description,
  ogTitle: () => translation.value.title, ogDescription: () => translation.value.description,
  ogType: 'article', ogUrl: canonical, ogImage: image,
  articlePublishedTime: `${post.publishedOn}T00:00:00-06:00`,
  articleModifiedTime: `${post.updatedOn || post.publishedOn}T00:00:00-06:00`,
  articleAuthor: ['Juan Miguel Arias Mejias'], articleTag: post.tags,
  twitterCard: 'summary_large_image', twitterTitle: () => translation.value.title, twitterDescription: () => translation.value.description, twitterImage: image
})
useHead(() => ({
  htmlAttrs: { lang: locale.value },
  link: [
    { rel: 'canonical', href: canonical.value },
    { rel: 'alternate', hreflang: 'en', href: `${siteUrl}${localePath(path, 'en')}` },
    { rel: 'alternate', hreflang: 'es', href: `${siteUrl}${localePath(path, 'es')}` },
    { rel: 'alternate', hreflang: 'x-default', href: `${siteUrl}${localePath(path, 'en')}` }
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify({
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'BlogPosting', '@id': `${canonical.value}#article`, mainEntityOfPage: canonical.value,
        headline: translation.value.title, description: translation.value.description, image,
        datePublished: `${post.publishedOn}T00:00:00-06:00`, dateModified: `${post.updatedOn || post.publishedOn}T00:00:00-06:00`,
        inLanguage: locale.value, keywords: post.tags.join(', '),
        author: { '@type': 'Person', name: 'Juan Miguel Arias Mejias', url: siteUrl },
        publisher: { '@type': 'Person', name: 'Juan Miguel Arias Mejias', url: siteUrl },
        isPartOf: { '@type': 'Blog', '@id': `${siteUrl}${localePath('/blog')}#blog` }
      },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: t('nav.home'), item: `${siteUrl}${localePath('/')}` },
        { '@type': 'ListItem', position: 2, name: t('nav.blog'), item: `${siteUrl}${localePath('/blog')}` },
        { '@type': 'ListItem', position: 3, name: translation.value.title, item: canonical.value }
      ] }
    ]
  }) }]
}))
</script>
<style scoped>
.article-container { padding-block: 32px 80px; }
.breadcrumbs { display: flex; gap: 12px; align-items: center; font-size: .85rem; margin-bottom: 48px; }
.article-header { max-width: 850px; margin-bottom: 56px; }
h1 { font-size: clamp(2rem, 4vw, 3.5rem); letter-spacing: -.045em; line-height: 1.15; font-weight: 600; text-wrap: balance; }
.article-description { margin-top: 24px; font-size: 1.15rem; line-height: 1.7; color: rgba(var(--v-theme-on-surface), .76); max-width: 64ch; }
.byline { display: flex; flex-wrap: wrap; gap: 12px 24px; margin-top: 28px; font-size: .82rem; color: rgba(var(--v-theme-on-surface), .72); }
.updated { margin-top: 12px; font-size: .82rem; }
.article-layout { display: grid; grid-template-columns: 240px minmax(0, 1fr); gap: 64px; align-items: start; }
.article-toc { position: sticky; top: 104px; }
.article-toc h2 { font-size: .85rem; font-weight: 600; margin-bottom: 16px; }
.article-toc ol { list-style: none; padding: 0; display: grid; gap: 16px; }
.article-toc a { font-size: .85rem; line-height: 1.6; text-decoration: none; color: rgba(var(--v-theme-on-surface), .75); }
.article-toc a:hover { text-decoration: underline; }
.article-body { max-width: 720px; min-width: 0; }
.article-body section + section { margin-top: 40px; }
.article-body h2 { font-size: clamp(1.4rem, 2vw, 1.75rem); line-height: 1.3; letter-spacing: -.025em; margin-bottom: 20px; font-weight: 600; }
.article-body p, .article-body li { font-size: 1.05rem; line-height: 1.85; color: rgba(var(--v-theme-on-surface), .85); }
.article-body p + p { margin-top: 20px; }
.article-body ul { padding-left: 24px; margin-top: 20px; }
.article-body li + li { margin-top: 12px; }
.article-code { max-width: 100%; overflow-x: auto; padding: 24px; margin-top: 24px; border-radius: 12px; background: rgb(var(--v-theme-surface-variant)); font-size: .85rem; line-height: 1.7; tab-size: 4; }
.article-code code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
.references a { overflow-wrap: anywhere; }
.article-footer { border-top: 1px solid rgba(var(--v-theme-on-surface), .15); margin-top: 48px; padding-top: 32px; }
.article-footer p { margin-bottom: 24px; font-size: .95rem; }
.article-footer a { display: inline-block; font-size: .9rem; margin: 0 24px 16px 0; }
@media (max-width: 767px) { .article-layout { grid-template-columns: minmax(0, 1fr); gap: 40px; } .article-toc { position: static; background: rgb(var(--v-theme-surface-variant)); padding: 24px; border-radius: 12px; } .breadcrumbs { margin-bottom: 32px; } .article-header { margin-bottom: 32px; } }
</style>
