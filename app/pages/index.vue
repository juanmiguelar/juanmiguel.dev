<template>
  <HeroSection />
  <MetricsSection />
  <ServicesSection />
  <ProjectsSection />
  <TechStackSection />
  <CredentialsSection />
  <RecomendationsSection />
  <FaqSection :items="faqItems" :title="t('home.faq.title')" :description="t('home.faq.description')" :show-cta="false" />
  <BlogSection />
  <ContactForm />
</template>
<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import ProjectsSection from '~/components/ProjectsSection.vue'
import MetricsSection from '~/components/MetricsSection.vue'
import RecomendationsSection from '~/components/RecomendationsSection.vue'
import TechStackSection from '~/components/TechStackSection.vue'
import FaqSection from '~/components/FaqSection.vue'
import ContactForm from '~/components/ContactForm.vue'
import CredentialsSection from '~/components/CredentialsSection.vue'

const { public: publicRuntime } = useRuntimeConfig()
const siteUrl = publicRuntime.siteUrl || 'https://www.juanmiguel.dev'
const { t, locale } = useI18n()

const localePath = useLocalePath()
const canonicalUrl = computed(() => `${siteUrl}${localePath('/')}`)

const pageTitle = computed(() => t('home.meta.title'))
const pageDescription = computed(() => t('home.meta.description'))
const ogImage = `${siteUrl}/img/juanmiguelweb.png`

const faqItems = computed(() => [
  {
    question: t('home.faq.items.stack.q'),
    answer: t('home.faq.items.stack.a')
  },
  {
    question: t('home.faq.items.time.q'),
    answer: t('home.faq.items.time.a')
  },
  {
    question: t('home.faq.items.backend.q'),
    answer: t('home.faq.items.backend.a')
  },
  {
    question: t('home.faq.items.fractional.q'),
    answer: t('home.faq.items.fractional.a')
  },
  {
    question: t('home.faq.items.timezone.q'),
    answer: t('home.faq.items.timezone.a')
  }
])

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  keywords: 'platform engineer, golang, kubernetes, GKE, GCP, controllers, CRDs, GitOps, Argo CD, Helm, CI/CD',
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogImage,
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: ogImage,
})

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  link: [{ rel: 'canonical', href: canonicalUrl.value }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${siteUrl}#website`,
          url: siteUrl,
          name: 'Juan Miguel Arias Mejias | Platform Engineering',
          inLanguage: locale.value,
          description: pageDescription.value
        },
        {
          '@type': 'Person',
          '@id': `${siteUrl}#person`,
          name: 'Juan Miguel Arias Mejias',
          url: siteUrl,
          image: `${siteUrl}/img/juanmiguel.jpeg`,
          jobTitle: 'Senior Software Engineer',
          description: pageDescription.value,
          knowsAbout: ['Go', 'Platform Engineering', 'Kubernetes', 'GKE', 'GCP', 'Kubernetes Controllers', 'CRDs', 'Argo CD', 'Helm', 'GitHub Actions', 'GraphQL', 'Automated Testing'],
          sameAs: ['https://www.linkedin.com/in/juan-miguel-arias/', 'https://github.com/juanmiguelar'],
          worksFor: { '@type': 'Organization', name: 'Gorilla Logic' },
          alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad de Costa Rica' },
          knowsLanguage: ['Spanish', 'English']
        },
        {
          '@type': 'ProfessionalService',
          '@id': `${siteUrl}#service`,
          name: 'Platform Engineering & Go Backend Consulting',
          provider: { '@id': `${siteUrl}#person` },
          url: canonicalUrl.value,
          description: pageDescription.value,
          serviceType: ['Platform Engineering', 'Kubernetes Automation', 'Go Backend Development', 'CI/CD', 'GitOps']
        },
        ...[
          { key: 'gorillaLogic', id: 'gorilla-logic', date: '2024-07' },
          { key: 'windriver', id: 'windriver', date: '2022-08' },
          { key: 'kyndryl', id: 'kyndryl', date: '2021-04' }
        ].map(project => ({
          '@type': 'Project',
          '@id': `${siteUrl}#project-${project.id}`,
          name: t(`home.projects.companies.${project.key}.title`),
          description: t(`home.projects.companies.${project.key}.description`),
          creator: { '@id': `${siteUrl}#person` },
          url: `${canonicalUrl.value}#projects`,
          startDate: project.date
        })),
        {
          '@type': 'FAQPage',
          '@id': `${siteUrl}#faq`,
          mainEntity: faqItems.value.map(item => ({
            '@type': 'Question', name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer }
          }))
        }
      ]
    })
  }]
}))
</script>
