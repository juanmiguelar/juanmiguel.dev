<template>
  <v-container class="consulting-page">
    <nav class="breadcrumbs" :aria-label="t('blog.breadcrumbs')"><NuxtLink :to="localePath('/')">{{ t('nav.home') }}</NuxtLink><span aria-hidden="true">/</span><span>{{ copy.meta.title }}</span></nav>
    <header class="consulting-hero">
      <p class="eyebrow">{{ copy.hero.eyebrow }}</p>
      <h1>{{ copy.hero.title }}</h1>
      <p class="lead">{{ copy.hero.subtitle }}</p>
      <div class="hero-actions"><v-btn color="primary" size="large" :to="localePath('/') + '#contact'">{{ copy.hero.primary }}</v-btn><a href="#experience">{{ copy.hero.secondary }}</a></div>
    </header>
    <section class="intro"><h2>{{ copy.intro.title }}</h2><p>{{ copy.intro.p1 }}</p><p>{{ copy.intro.p2 }}</p></section>
    <section><h2>{{ copy.offerTitle }}</h2><div class="offer-list"><article v-for="(offer, index) in copy.offers" :key="offer.title"><span class="index" aria-hidden="true">0{{ index + 1 }}</span><div><h3>{{ offer.title }}</h3><p>{{ offer.description }}</p><p class="detail">{{ offer.deliverable }}</p></div></article></div></section>
    <section id="experience"><h2>{{ copy.proofTitle }}</h2><p>{{ copy.proofIntro }}</p><article v-for="item in copy.cases" :key="item.company" class="case-study"><p class="eyebrow">{{ item.company }}</p><h3>{{ item.title }}</h3><dl><dt>{{ copy.caseLabel }}</dt><dd>{{ item.context }}</dd><dt>{{ copy.workLabel }}</dt><dd>{{ item.work }}</dd></dl></article></section>
    <section><h2>{{ copy.processTitle }}</h2><ol class="process"><li v-for="step in copy.steps" :key="step.title"><h3>{{ step.title }}</h3><p>{{ step.description }}</p></li></ol></section>
    <section><h2>{{ copy.faqTitle }}</h2><details v-for="faq in copy.faqs" :key="faq.q"><summary>{{ faq.q }}</summary><p>{{ faq.a }}</p></details></section>
    <section><h2>{{ copy.readingTitle }}</h2><p>{{ copy.readingIntro }}</p><ul class="reading"><li v-for="article in articles" :key="article.slug"><NuxtLink :to="localePath(`/blog/${article.slug}`)">{{ article.title }}</NuxtLink></li></ul></section>
    <section class="consulting-cta"><h2>{{ copy.ctaTitle }}</h2><p>{{ copy.ctaDescription }}</p><v-btn color="primary" size="large" :to="localePath('/') + '#contact'">{{ copy.hero.primary }}</v-btn></section>
  </v-container>
</template>
<script setup lang="ts">
import { professionalIdentity } from '~/utils/professionalIdentity'
import { publishedPosts, postTranslation } from '~/content/blog'
import servicesEn from '../../../locales/services.json'
import servicesEs from '../../../locales/services-es.json'

const { public: publicRuntime } = useRuntimeConfig()
const siteUrl = publicRuntime.siteUrl || 'https://www.juanmiguel.dev'
const { locale, t } = useI18n()
const localePath = useLocalePath()
const copy = computed(() => (locale.value === 'es' ? servicesEs : servicesEn).golang.consulting)
const articles = computed(() => publishedPosts.map(post => ({ slug: post.slug, title: postTranslation(post, locale.value).title })))

const currentUrl = computed(() =>
  locale.value === 'es'
    ? `${siteUrl}/es/services/golang-development`
    : `${siteUrl}/services/golang-development`
)

const pageTitle = computed(() =>
  locale.value === 'es' ? servicesEs.golang.meta.title : servicesEn.golang.meta.title
)
const pageDesc = computed(() =>
  locale.value === 'es' ? servicesEs.golang.meta.description : servicesEn.golang.meta.description
)

useSeoMeta({
  title: pageTitle,
  description: pageDesc,
  ogTitle: pageTitle,
  ogDescription: pageDesc,
  ogType: 'website',
  ogUrl: currentUrl,
  ogImage: `${siteUrl}/img/juanmiguelweb.png`,
  twitterTitle: pageTitle,
  twitterDescription: pageDesc,
  twitterImage: `${siteUrl}/img/juanmiguelweb.png`,
  twitterCard: 'summary_large_image'
})

useHead(() => ({
  htmlAttrs: {
    lang: locale.value
  },
  link: [{ rel: 'canonical', href: currentUrl.value }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name:
          locale.value === 'es'
            ? 'Consultoría freelance en Go'
            : 'Freelance Go Development',
        provider: professionalIdentity(siteUrl),
        url: currentUrl.value,
        serviceType: 'Go backend and Kubernetes platform consulting',
        areaServed: 'Worldwide',
        inLanguage: locale.value,
        description: pageDesc.value

      })
    }
  ]
}))
</script>

<style scoped>
.consulting-page { max-width: 1040px; padding-block: 32px 80px; }
.breadcrumbs { display: flex; flex-wrap: wrap; gap: 12px; font-size: .85rem; margin-bottom: 48px; }
.consulting-hero { padding-block: 24px 64px; border-bottom: 1px solid rgba(var(--v-theme-on-surface), .15); }
.eyebrow { color: rgb(var(--v-theme-primary)); font-size: .8rem; font-weight: 600; letter-spacing: .06em; margin-bottom: 16px; }
h1 { font-size: clamp(2.25rem, 5vw, 3.75rem); line-height: 1.12; letter-spacing: -.04em; max-width: 22ch; font-weight: 600; }
.lead { font-size: 1.15rem; max-width: 66ch; margin-block: 24px 32px; }
p, dd { line-height: 1.8; color: rgba(var(--v-theme-on-surface), .8); }
.hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 24px; }
section { margin-top: 64px; scroll-margin-top: 100px; }
h2 { font-size: clamp(1.5rem, 3vw, 2rem); letter-spacing: -.025em; line-height: 1.25; margin-bottom: 24px; }
h3 { font-size: 1.2rem; line-height: 1.4; margin-bottom: 12px; font-weight: 600; }
.intro p + p { margin-top: 16px; }
.offer-list article { display: grid; grid-template-columns: 40px minmax(0, 1fr); gap: 24px; padding-block: 28px; border-bottom: 1px solid rgba(var(--v-theme-on-surface), .15); }
.index { font-size: .85rem; color: rgb(var(--v-theme-primary)); padding-top: 4px; }
p.detail { font-size: .9rem; margin-top: 12px; }
.case-study { background: rgb(var(--v-theme-surface-variant)); border-radius: 12px; padding: 32px; margin-top: 24px; }
dt { font-size: .85rem; font-weight: 600; margin-block: 20px 8px; }
dd { margin: 0; }
.process { padding-left: 24px; }
.process li { padding-left: 12px; margin-bottom: 24px; }
details { border-bottom: 1px solid rgba(var(--v-theme-on-surface), .15); padding-block: 20px; }
summary { cursor: pointer; font-weight: 600; line-height: 1.5; }
details p { margin-top: 16px; max-width: 75ch; }
.reading { padding-left: 20px; margin-top: 20px; }
.reading li { padding-block: 8px; }
.consulting-cta { border-top: 1px solid rgba(var(--v-theme-on-surface), .15); padding-top: 40px; }
.consulting-cta p { margin-bottom: 24px; max-width: 65ch; }
a { color: rgb(var(--v-theme-primary)); text-underline-offset: 4px; }
@media (max-width: 600px) { .consulting-page { padding-inline: 20px; } .breadcrumbs { margin-bottom: 24px; } section { margin-top: 48px; } .case-study { padding: 24px; } .hero-actions { align-items: flex-start; flex-direction: column; } .hero-actions :deep(.v-btn), .consulting-cta :deep(.v-btn) { max-width: 100%; height: auto; min-height: 48px; padding-block: 12px; } :deep(.v-btn__content) { white-space: normal; } }
</style>
