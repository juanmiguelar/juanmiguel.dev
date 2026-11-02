<template>
  <v-container class="series-page">
    <nav class="breadcrumbs" :aria-label="$t('blog.breadcrumbs')">
      <NuxtLink :to="localePath('/blog')">{{ $t('blog.backToBlog') }}</NuxtLink>
    </nav>
    <header class="series-header">
      <p class="eyebrow">{{ $t('blog.series.eyebrow') }}</p>
      <h1>{{ $t('blog.series.title') }}</h1>
      <p class="intro">{{ $t('blog.series.description') }}</p>
      <p class="series-meta">{{ $t('blog.series.meta') }}</p>
      <NuxtLink class="start-link" :to="localePath(`/blog/${lessons[0].slug}`)">{{ $t('blog.series.start') }} <span aria-hidden="true">→</span></NuxtLink>
    </header>
    <nav class="module-nav" :aria-label="$t('blog.series.modules')">
      <a href="#overview">{{ $t('blog.series.overview') }}</a>
      <a v-for="module in goBasicsModules" :key="module.id" :href="`#${module.id}`">{{ module.title[language] }}</a>
    </nav>
    <section id="overview" class="lesson-group" aria-labelledby="overview-title">
      <h2 id="overview-title">{{ $t('blog.series.overview') }}</h2>
      <ol class="lessons">
        <li>
          <NuxtLink :to="localePath(`/blog/${lessons[0].slug}`)">
            <span class="lesson-number" aria-hidden="true">01</span>
            <span><span class="lesson-title">{{ postTranslation(lessons[0], locale).title }}</span><span class="lesson-description">{{ postTranslation(lessons[0], locale).description }}</span></span>
            <span class="lesson-time">{{ $t('blog.readingTime', { minutes: readingMinutes(postTranslation(lessons[0], locale)) }) }}</span>
          </NuxtLink>
        </li>
      </ol>
    </section>
    <section v-for="module in modules" :id="module.id" :key="module.id" class="lesson-group" :aria-labelledby="`${module.id}-title`">
      <h2 :id="`${module.id}-title`">{{ module.title[language] }}</h2>
      <ol class="lessons" :start="module.start">
        <li v-for="post in module.posts" :key="post.slug">
          <NuxtLink :to="localePath(`/blog/${post.slug}`)">
            <span class="lesson-number" aria-hidden="true">{{ String(post.series?.order).padStart(2, '0') }}</span>
            <span><span class="lesson-title">{{ postTranslation(post, locale).title }}</span><span class="lesson-description">{{ postTranslation(post, locale).description }}</span></span>
            <span class="lesson-time">{{ $t('blog.readingTime', { minutes: readingMinutes(postTranslation(post, locale)) }) }}</span>
          </NuxtLink>
        </li>
      </ol>
    </section>
  </v-container>
</template>

<script setup lang="ts">
import { goBasicsPosts, goBasicsModules, goBasicsPath, blogLocale, postTranslation, readingMinutes } from '~/content/blog'
import { professionalIdentity } from '~/utils/professionalIdentity'
const { t, locale } = useI18n()
const localePath = useLocalePath()
const language = computed(() => blogLocale(locale.value))
const lessons = goBasicsPosts.filter(post => post.status === 'published')
const modules = goBasicsModules.map(module => ({ ...module, posts: lessons.filter(post => post.series && post.series.order >= module.start && post.series.order <= module.end) }))
const { public: { siteUrl } } = useRuntimeConfig()
const canonical = computed(() => `${siteUrl}${localePath(goBasicsPath)}`)
useSeoMeta({
  title: () => t('blog.series.title'), description: () => t('blog.series.description'),
  ogTitle: () => t('blog.series.title'), ogDescription: () => t('blog.series.description'),
  ogType: 'website', ogUrl: canonical, ogImage: `${siteUrl}/img/gologo.png`,
  twitterCard: 'summary_large_image', twitterTitle: () => t('blog.series.title'),
  twitterDescription: () => t('blog.series.description'), twitterImage: `${siteUrl}/img/gologo.png`
})
useHead(() => ({
  htmlAttrs: { lang: locale.value },
  link: [
    { rel: 'canonical', href: canonical.value },
    ...(['en', 'es'] as const).map(lang => ({ rel: 'alternate', hreflang: lang, href: `${siteUrl}${localePath(goBasicsPath, lang)}` })),
    { rel: 'alternate', hreflang: 'x-default', href: `${siteUrl}${localePath(goBasicsPath, 'en')}` }
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify({
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'CollectionPage', '@id': `${canonical.value}#series`, url: canonical.value,
        name: t('blog.series.title'), description: t('blog.series.description'), inLanguage: locale.value,
        author: professionalIdentity(siteUrl),
        mainEntity: { '@type': 'ItemList', numberOfItems: lessons.length,
          itemListElement: lessons.map((post, index) => ({ '@type': 'ListItem', position: index + 1,
            name: postTranslation(post, locale.value).title, url: `${siteUrl}${localePath(`/blog/${post.slug}`)}` })) }
      },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: t('nav.blog'), item: `${siteUrl}${localePath('/blog')}` },
        { '@type': 'ListItem', position: 2, name: t('blog.series.title'), item: canonical.value }
      ] }
    ]
  }) }]
}))
</script>

<style scoped>
.series-page { max-width: 1040px; padding-block: 32px 80px; }
.breadcrumbs { margin-bottom: 32px; font-size: .9rem; }
.series-header { max-width: 760px; margin-bottom: 40px; }
h1 { font-size: clamp(2.2rem, 4vw, 3.5rem); line-height: 1.15; letter-spacing: -.04em; font-weight: 600; text-wrap: balance; }
.intro { margin-top: 24px; line-height: 1.8; font-size: 1.1rem; }
.series-meta { margin-block: 16px 24px; font-size: .9rem; }
.start-link { font-weight: 600; }
.module-nav { display: flex; flex-wrap: wrap; gap: 12px 24px; padding-block: 24px; border-block: 1px solid rgba(var(--v-theme-on-surface), .2); }
.module-nav a { font-size: .9rem; }
.lesson-group { margin-top: 48px; scroll-margin-top: 104px; }
h2 { margin-bottom: 16px; font-size: clamp(1.4rem, 3vw, 1.8rem); line-height: 1.3; font-weight: 600; }
.lessons { list-style: none; padding: 0; }
.lessons li + li { border-top: 1px solid rgba(var(--v-theme-on-surface), .15); }
.lessons a { display: grid; grid-template-columns: 32px minmax(0, 1fr) auto; gap: 16px; padding-block: 24px; text-decoration: none; color: inherit; }
.lesson-number { font-variant-numeric: tabular-nums; color: rgb(var(--v-theme-primary)); }
.lesson-title { display: block; font-weight: 600; line-height: 1.5; }
.lesson-description { display: block; margin-top: 8px; line-height: 1.7; color: rgba(var(--v-theme-on-surface), .8); }
.lesson-time { font-size: .8rem; white-space: nowrap; padding-top: 4px; }
.lessons a:hover .lesson-title { text-decoration: underline; }
a:focus-visible { outline: 2px solid rgb(var(--v-theme-primary)); outline-offset: 4px; }
@media (max-width: 767px) { .lessons a { grid-template-columns: 24px minmax(0, 1fr); gap: 12px; } .lesson-time { grid-column: 2; padding-top: 0; } }
</style>
