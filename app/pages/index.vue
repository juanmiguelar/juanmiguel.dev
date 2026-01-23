<template>
  <HeroSection />
  <ServicesSection />
  <ProjectsSection />
  <MetricsSection />
  <RecomendationsSection />
  <TechStackSection />
  <FaqSection :items="faqItems" />
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

const { public: publicRuntime } = useRuntimeConfig()
const siteUrl = publicRuntime.siteUrl || 'https://juanmiguel.dev'
const { t, locale } = useI18n()

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
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: 'website',
  ogUrl: siteUrl,
  ogImage,
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: ogImage,
})

useHead({
  link: [
    { rel: 'canonical', href: siteUrl }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}#website`,
            url: siteUrl,
            name: 'Juan Miguel Arias Mejias - Golang Developer & Landing Page Specialist',
            alternateName: 'Juan Miguel Arias - Go Developer',
            inLanguage: locale.value,
            about: {
              '@type': 'Thing',
              name: 'Golang Development and Landing Page Services'
            },
            keywords: 'golang developer, go developer, landing page development, golang api development, microservices, nuxt developer',
            potentialAction: {
              '@type': 'SearchAction',
              target: `${siteUrl}/?q={search_term_string}`,
              'query-input': 'required name=search_term_string'
            }
          },
          {
            '@type': 'Person',
            '@id': `${siteUrl}#person`,
            name: 'Juan Miguel Arias Mejias',
            url: siteUrl,
            image: `${siteUrl}/img/juanmiguel.jpeg`,
            jobTitle: 'Golang Developer & Landing Page Specialist',
            description: 'Expert Golang developer specializing in high-performance API development and conversion-optimized landing page development',
            knowsAbout: [
              'Golang Development',
              'Go Programming',
              'Landing Page Development',
              'Nuxt.js',
              'Vue.js',
              'API Development',
              'Microservices Architecture',
              'GraphQL',
              'REST API',
              'Web Performance Optimization',
              'TypeScript',
              'PostgreSQL',
              'MongoDB',
              'Cloud Architecture'
            ],
            sameAs: [
              'https://www.linkedin.com/in/juan-miguel-arias/',
              'https://github.com/juanmiguelar'
            ],
            worksFor: {
              '@type': 'Organization',
              name: 'Freelance'
            }
          },
          {
            '@type': 'ProfessionalService',
            '@id': `${siteUrl}#service`,
            name: 'Golang Development & Landing Page Services',
            provider: { '@id': `${siteUrl}#person` },
            areaServed: [
              { '@type': 'Country', name: 'United States' },
              { '@type': 'Country', name: 'Costa Rica' },
              { '@type': 'Place', name: 'Worldwide' }
            ],
            serviceType: [
              'Golang Development',
              'Go API Development',
              'Landing Page Development',
              'Web Development',
              'Microservices Development',
              'GraphQL API Development',
              'REST API Development',
              'Performance Optimization',
              'Frontend Development',
              'Backend Development'
            ],
            url: siteUrl,
            image: ogImage,
            description: pageDescription.value,
            offers: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Golang API Development',
                  description: 'High-performance Go backend development, REST and GraphQL APIs, microservices architecture'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Landing Page Development',
                  description: 'Conversion-optimized landing pages built with Nuxt/Vue for maximum performance and user engagement'
                }
              }
            ]
          },
          {
            '@type': 'Project',
            '@id': `${siteUrl}#project-nbc`,
            name: 'NBCUniversal Streaming Platform BFF',
            creator: { '@id': `${siteUrl}#person` },
            url: `${siteUrl}#projects`,
            description: 'High-performance Backend-for-Frontend using Go and GraphQL, handling millions of daily requests.',
            keywords: ['Go', 'GraphQL', 'Streaming'],
            startDate: '2024'
          },
          {
            '@type': 'Project',
            '@id': `${siteUrl}#project-windriver`,
            name: 'Cloud Microservices Architecture',
            creator: { '@id': `${siteUrl}#person` },
            url: `${siteUrl}#projects`,
            description: 'Restructured monolithic services into specialized microservices with concurrent processing.',
            keywords: ['Go', 'Microservices', 'Kubernetes'],
            startDate: '2022'
          },
          {
            '@type': 'Project',
            '@id': `${siteUrl}#project-kyndryl`,
            name: 'Multi-Cloud API Gateway',
            creator: { '@id': `${siteUrl}#person` },
            url: `${siteUrl}#projects`,
            description: 'Developed scalable APIs for cloud resource discovery and management; led Go training for global teams.',
            keywords: ['API Gateway', 'Go', 'Cloud'],
            startDate: '2021'
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Lenin Chacon' },
            itemReviewed: { '@id': `${siteUrl}#service` },
            reviewBody: 'Working with Juan Miguel has been an exceptional experience. His charisma, collaborative spirit, and deep technical expertise made him an invaluable part of our team.',
            reviewRating: { '@type': 'Rating', ratingValue: '5' },
            datePublished: '2024-01-01',
            url: `${siteUrl}#recomendations`
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Kenneth Sanabria' },
            itemReviewed: { '@id': `${siteUrl}#service` },
            reviewBody: 'Juan is an exceptional team player who consistently showcases his high level of expertise by implementing best practices and offering valuable feedback.',
            reviewRating: { '@type': 'Rating', ratingValue: '5' },
            datePublished: '2024-01-01',
            url: `${siteUrl}#recomendations`
          },
          {
            '@type': 'FAQPage',
            mainEntity: faqItems.value.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
              }
            }))
          }
        ]
      })
    }
  ]
})
</script>
