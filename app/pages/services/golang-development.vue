<template>
  <div class="golang-service-page">
    <v-container>
      <!-- Hero Section -->
      <section class="service-hero py-16">
        <v-row>
          <v-col cols="12" md="8" class="mx-auto text-center">
            <h1 class="text-h2 mb-4">{{ st('golang.hero.title') }}</h1>
            <p class="text-h6 mb-6">{{ st('golang.hero.subtitle') }}</p>
            <v-btn color="primary" size="large" href="#contact">{{ $t('nav.contact') }}</v-btn>
          </v-col>
        </v-row>
      </section>

      <!-- What is Golang Development -->
      <section class="py-12">
        <v-row>
          <v-col cols="12" md="10" class="mx-auto">
            <h2 class="text-h3 mb-6">{{ st('golang.intro.title') }}</h2>
            <p class="text-body-1 mb-4" v-html="st('golang.intro.p1')"></p>
            <p class="text-body-1 mb-4" v-html="st('golang.intro.p2')"></p>
          </v-col>
        </v-row>
      </section>

      <!-- Services Offered -->
      <section class="py-12 bg-grey-lighten-4">
        <v-container>
          <h2 class="text-h3 text-center mb-8">{{ st('golang.services.title') }}</h2>
          <v-row>
            <v-col cols="12" md="4">
              <v-card elevation="2" class="pa-6 h-100">
                <h3 class="text-h5 mb-3">{{ st('golang.services.api.title') }}</h3>
                <p class="text-body-2">{{ st('golang.services.api.desc') }}</p>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card elevation="2" class="pa-6 h-100">
                <h3 class="text-h5 mb-3">{{ st('golang.services.microservices.title') }}</h3>
                <p class="text-body-2">{{ st('golang.services.microservices.desc') }}</p>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card elevation="2" class="pa-6 h-100">
                <h3 class="text-h5 mb-3">{{ st('golang.services.optimization.title') }}</h3>
                <p class="text-body-2">{{ st('golang.services.optimization.desc') }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Why Choose Me -->
      <section class="py-12">
        <v-row>
          <v-col cols="12" md="10" class="mx-auto">
            <h2 class="text-h3 mb-6">{{ st('golang.why.title') }}</h2>
            <v-list>
              <v-list-item>
                <template #prepend><v-icon>mdi-check-circle</v-icon></template>
                <v-list-item-title v-html="st('golang.why.experience')"></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template #prepend><v-icon>mdi-check-circle</v-icon></template>
                <v-list-item-title v-html="st('golang.why.code')"></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template #prepend><v-icon>mdi-check-circle</v-icon></template>
                <v-list-item-title v-html="st('golang.why.performance')"></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template #prepend><v-icon>mdi-check-circle</v-icon></template>
                <v-list-item-title v-html="st('golang.why.fullstack')"></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </section>

      <!-- Technologies -->
      <section class="py-12 bg-grey-lighten-4">
        <v-container>
          <h2 class="text-h3 text-center mb-6">{{ st('golang.tech.title') }}</h2>
          <v-row justify="center">
            <v-col cols="12" md="8">
              <v-chip-group column>
                <v-chip>Go / Golang</v-chip>
                <v-chip>Gin Framework</v-chip>
                <v-chip>Echo Framework</v-chip>
                <v-chip>gRPC</v-chip>
                <v-chip>GraphQL</v-chip>
                <v-chip>PostgreSQL</v-chip>
                <v-chip>MongoDB</v-chip>
                <v-chip>Redis</v-chip>
                <v-chip>Docker</v-chip>
                <v-chip>Kubernetes</v-chip>
                <v-chip>AWS</v-chip>
                <v-chip>Google Cloud</v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- FAQ -->
      <section class="py-12">
        <v-row>
          <v-col cols="12" md="10" class="mx-auto">
            <h2 class="text-h3 mb-6">{{ st('golang.faq.title') }}</h2>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title>{{ st('golang.faq.q1.q') }}</v-expansion-panel-title>
                <v-expansion-panel-text>{{ st('golang.faq.q1.a') }}</v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-title>{{ st('golang.faq.q2.q') }}</v-expansion-panel-title>
                <v-expansion-panel-text>{{ st('golang.faq.q2.a') }}</v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-title>{{ st('golang.faq.q3.q') }}</v-expansion-panel-title>
                <v-expansion-panel-text>{{ st('golang.faq.q3.a') }}</v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </section>

      <!-- CTA -->
      <section class="py-12 text-center bg-primary">
        <v-container>
          <h2 class="text-h3 mb-4 text-white">{{ st('golang.cta.title') }}</h2>
          <p class="text-h6 mb-6 text-white">{{ st('golang.cta.subtitle') }}</p>
          <v-btn color="white" size="large" href="#contact">{{ st('golang.cta.button') }}</v-btn>
        </v-container>
      </section>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import servicesEn from '../../../locales/services.json'
import servicesEs from '../../../locales/services-es.json'

const { public: publicRuntime } = useRuntimeConfig()
const siteUrl = publicRuntime.siteUrl || 'https://juanmiguel.dev'
const { locale } = useI18n()
const { t: st } = useServiceTranslations()

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
  twitterCard: 'summary_large_image'
})

useHead({
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
            ? 'Servicios de Desarrollo Golang'
            : 'Golang Development Services',
        provider: {
          '@type': 'Person',
          name: 'Juan Miguel Arias Mejias',
          jobTitle: locale.value === 'es' ? 'Desarrollador Golang' : 'Golang Developer'
        },
        serviceType: 'Golang Development',
        areaServed: 'Worldwide',
        inLanguage: locale.value,
        description: pageDesc.value,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          description:
            locale.value === 'es'
              ? 'Servicios personalizados de desarrollo Golang para empresas y startups'
              : 'Custom Golang development services for enterprise and startups'
        }
      })
    }
  ]
})
</script>

<style scoped>
.service-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.service-hero h1,
.service-hero p {
  color: white;
}
</style>
