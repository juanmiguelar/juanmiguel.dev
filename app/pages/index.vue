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
const pageTitle = 'Full-stack Go & Nuxt Developer'
const pageDescription = 'Full-stack Go & Nuxt developer delivering fast APIs and polished web apps. I design architectures, build secure services, and ship engaging UI for SaaS teams.'
const ogImage = `${siteUrl}/img/juanmiguelweb.png`
const faqItems = [
  {
    question: 'What tech stack do you use?',
    answer: 'Go for high-performance backend services and APIs; Nuxt/Vue for frontend; Postgres/Mongo for data; deployed on Vercel.'
  },
  {
    question: 'How long does a typical website project take?',
    answer: 'A marketing/portfolio site takes 1–2 weeks. If we include custom integrations or headless CMS, budget 2–4 weeks depending on scope.'
  },
  {
    question: 'Do you handle both backend and frontend?',
    answer: 'Yes. I design and build the backend (Go APIs, auth, performance) and the frontend (Nuxt/Vue, UI/UX)'
  },
  {
    question: 'Can you join as a fractional engineer?',
    answer: 'I am currently working full-time, so my availability for fractional roles is limited. However, I am open to discussing specific consulting opportunities.'
  },
  {
    question: 'Which time zones do you work with?',
    answer: 'I collaborate mostly with US and LATAM teams and can overlap 4–6 hours with US time zones for standups and reviews.'
  }
]

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
  canonical: siteUrl
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}#website`,
            url: siteUrl,
            name: 'Juan Miguel Arias Mejias - Full-stack Developer',
            inLanguage: 'en',
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
            jobTitle: 'Full-stack Developer',
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
            name: 'Full-stack Go & Nuxt development services',
            provider: { '@id': `${siteUrl}#person` },
            areaServed: [
              { '@type': 'Country', name: 'United States' },
              { '@type': 'Country', name: 'Costa Rica' }
            ],
            serviceType: ['API design', 'Web development', 'Performance optimization'],
            url: siteUrl,
            image: ogImage,
            description: pageDescription
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
            mainEntity: faqItems.map((item) => ({
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
