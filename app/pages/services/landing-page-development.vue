<template>
  <div class="landing-page-service">
    <v-container>
      <!-- Hero Section -->
      <section class="service-hero py-16">
        <v-row>
          <v-col cols="12" md="8" class="mx-auto text-center">
            <h1 class="text-h2 mb-4">{{ st('landingPage.hero.title') }}</h1>
            <p class="text-h6 mb-6">
              {{ st('landingPage.hero.subtitle') }}
            </p>
            <v-btn color="primary" size="large" href="#contact">{{ $t('nav.contact') }}</v-btn>
          </v-col>
        </v-row>
      </section>

      <!-- What is Landing Page Development -->
      <section class="py-12">
        <v-row>
          <v-col cols="12" md="10" class="mx-auto">
            <h2 class="text-h3 mb-6">{{ st('landingPage.intro.title') }}</h2>
            <p class="text-body-1 mb-4" v-html="st('landingPage.intro.p1')"></p>
            <p class="text-body-1 mb-4" v-html="st('landingPage.intro.p2')"></p>
          </v-col>
        </v-row>
      </section>

      <!-- Services Offered -->
      <section class="py-12 bg-grey-lighten-4">
        <v-container>
          <h2 class="text-h3 text-center mb-8">{{ st('landingPage.services.title') }}</h2>
          <v-row>
            <v-col cols="12" md="4">
              <v-card elevation="2" class="pa-6 h-100">
                <h3 class="text-h5 mb-3">{{ st('landingPage.services.saas.title') }}</h3>
                <p class="text-body-2">{{ st('landingPage.services.saas.desc') }}</p>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card elevation="2" class="pa-6 h-100">
                <h3 class="text-h5 mb-3">{{ st('landingPage.services.leadgen.title') }}</h3>
                <p class="text-body-2">{{ st('landingPage.services.leadgen.desc') }}</p>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card elevation="2" class="pa-6 h-100">
                <h3 class="text-h5 mb-3">{{ st('landingPage.services.product.title') }}</h3>
                <p class="text-body-2">{{ st('landingPage.services.product.desc') }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Why Choose My Landing Page Development -->
      <section class="py-12">
        <v-row>
          <v-col cols="12" md="10" class="mx-auto">
            <h2 class="text-h3 mb-6">{{ st('landingPage.why.title') }}</h2>
            <v-row>
              <v-col cols="12" md="6">
                <h3 class="text-h5 mb-3">
                  <v-icon color="primary" class="mr-2">mdi-speedometer</v-icon>
                  {{ st('landingPage.why.performance.title') }}
                </h3>
                <p class="text-body-1">{{ st('landingPage.why.performance.desc') }}</p>
              </v-col>
              <v-col cols="12" md="6">
                <h3 class="text-h5 mb-3">
                  <v-icon color="primary" class="mr-2">mdi-chart-line</v-icon>
                  {{ st('landingPage.why.conversion.title') }}
                </h3>
                <p class="text-body-1">{{ st('landingPage.why.conversion.desc') }}</p>
              </v-col>
              <v-col cols="12" md="6">
                <h3 class="text-h5 mb-3">
                  <v-icon color="primary" class="mr-2">mdi-cellphone-link</v-icon>
                  {{ st('landingPage.why.mobile.title') }}
                </h3>
                <p class="text-body-1">{{ st('landingPage.why.mobile.desc') }}</p>
              </v-col>
              <v-col cols="12" md="6">
                <h3 class="text-h5 mb-3">
                  <v-icon color="primary" class="mr-2">mdi-google</v-icon>
                  {{ st('landingPage.why.seo.title') }}
                </h3>
                <p class="text-body-1">{{ st('landingPage.why.seo.desc') }}</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </section>

      <!-- Landing Page Features -->
      <section class="py-12 bg-grey-lighten-4">
        <v-container>
          <h2 class="text-h3 text-center mb-6">{{ st('landingPage.features.title') }}</h2>
          <v-row>
            <v-col cols="12" md="6">
              <v-list>
                <v-list-item>
                  <template #prepend><v-icon>mdi-check-circle</v-icon></template>
                  <v-list-item-title>{{ st('landingPage.features.responsive') }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend><v-icon>mdi-check-circle</v-icon></template>
                  <v-list-item-title>{{ st('landingPage.features.forms') }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend><v-icon>mdi-check-circle</v-icon></template>
                  <v-list-item-title>{{ st('landingPage.features.analytics') }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend><v-icon>mdi-check-circle</v-icon></template>
                  <v-list-item-title>{{ st('landingPage.features.seo') }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="6">
              <v-list>
                <v-list-item>
                  <template #prepend><v-icon>mdi-check-circle</v-icon></template>
                  <v-list-item-title>{{ st('landingPage.features.vitals') }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend><v-icon>mdi-check-circle</v-icon></template>
                  <v-list-item-title>{{ st('landingPage.features.social') }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend><v-icon>mdi-check-circle</v-icon></template>
                  <v-list-item-title>{{ st('landingPage.features.images') }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend><v-icon>mdi-check-circle</v-icon></template>
                  <v-list-item-title>{{ st('landingPage.features.ssl') }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Tech Stack -->
      <section class="py-12">
        <v-container>
          <h2 class="text-h3 text-center mb-6">{{ st('landingPage.tech.title') }}</h2>
          <v-row justify="center">
            <v-col cols="12" md="8">
              <v-chip-group column>
                <v-chip>Nuxt 3</v-chip>
                <v-chip>Vue.js</v-chip>
                <v-chip>TypeScript</v-chip>
                <v-chip>Vuetify</v-chip>
                <v-chip>TailwindCSS</v-chip>
                <v-chip>SCSS</v-chip>
                <v-chip>Vercel</v-chip>
                <v-chip>Netlify</v-chip>
                <v-chip>Google Analytics</v-chip>
                <v-chip>Facebook Pixel</v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Process -->
      <section class="py-12 bg-grey-lighten-4">
        <v-container>
          <h2 class="text-h3 text-center mb-8">{{ st('landingPage.process.title') }}</h2>
          <v-row>
            <v-col cols="12" md="3">
              <div class="text-center">
                <v-avatar color="primary" size="64" class="mb-4">
                  <span class="text-h4">1</span>
                </v-avatar>
                <h3 class="text-h6 mb-2">{{ st('landingPage.process.step1.title') }}</h3>
                <p class="text-body-2">{{ st('landingPage.process.step1.desc') }}</p>
              </div>
            </v-col>
            <v-col cols="12" md="3">
              <div class="text-center">
                <v-avatar color="primary" size="64" class="mb-4">
                  <span class="text-h4">2</span>
                </v-avatar>
                <h3 class="text-h6 mb-2">{{ st('landingPage.process.step2.title') }}</h3>
                <p class="text-body-2">{{ st('landingPage.process.step2.desc') }}</p>
              </div>
            </v-col>
            <v-col cols="12" md="3">
              <div class="text-center">
                <v-avatar color="primary" size="64" class="mb-4">
                  <span class="text-h4">3</span>
                </v-avatar>
                <h3 class="text-h6 mb-2">{{ st('landingPage.process.step3.title') }}</h3>
                <p class="text-body-2">{{ st('landingPage.process.step3.desc') }}</p>
              </div>
            </v-col>
            <v-col cols="12" md="3">
              <div class="text-center">
                <v-avatar color="primary" size="64" class="mb-4">
                  <span class="text-h4">4</span>
                </v-avatar>
                <h3 class="text-h6 mb-2">{{ st('landingPage.process.step4.title') }}</h3>
                <p class="text-body-2">{{ st('landingPage.process.step4.desc') }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- FAQ -->
      <section class="py-12">
        <v-row>
          <v-col cols="12" md="10" class="mx-auto">
            <h2 class="text-h3 mb-6">{{ st('landingPage.faq.title') }}</h2>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title>{{ st('landingPage.faq.q1.q') }}</v-expansion-panel-title>
                <v-expansion-panel-text>
                  {{ st('landingPage.faq.q1.a') }}
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-title>{{ st('landingPage.faq.q2.q') }}</v-expansion-panel-title>
                <v-expansion-panel-text>
                  {{ st('landingPage.faq.q2.a') }}
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-title>{{ st('landingPage.faq.q3.q') }}</v-expansion-panel-title>
                <v-expansion-panel-text>
                  {{ st('landingPage.faq.q3.a') }}
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-title>{{ st('landingPage.faq.q4.q') }}</v-expansion-panel-title>
                <v-expansion-panel-text>
                  {{ st('landingPage.faq.q4.a') }}
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </section>

      <!-- CTA -->
      <section class="py-12 text-center bg-primary">
        <v-container>
          <h2 class="text-h3 mb-4 text-white">{{ st('landingPage.cta.title') }}</h2>
          <p class="text-h6 mb-6 text-white">
            {{ st('landingPage.cta.subtitle') }}
          </p>
          <v-btn color="white" size="large" href="#contact">{{ st('landingPage.cta.button') }}</v-btn>
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

const currentUrl = computed(() => locale.value === 'es' ? `${siteUrl}/es/services/landing-page-development` : `${siteUrl}/services/landing-page-development`)

const pageTitle = computed(() => locale.value === 'es' ? servicesEs.landingPage.meta.title : servicesEn.landingPage.meta.title)
const pageDesc = computed(() => locale.value === 'es' ? servicesEs.landingPage.meta.description : servicesEn.landingPage.meta.description)

useSeoMeta({
  title: pageTitle,
  description: pageDesc,
  ogTitle: pageTitle,
  ogDescription: pageDesc,
  ogType: 'website',
  ogUrl: currentUrl,
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: locale.value
  },
  link: [
    { rel: 'canonical', href: currentUrl.value }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: locale.value === 'es' ? 'Desarrollo de Landing Pages' : 'Landing Page Development',
        provider: {
          '@type': 'Person',
          name: 'Juan Miguel Arias Mejias',
          jobTitle: locale.value === 'es' ? 'Desarrollador de Landing Pages' : 'Landing Page Developer'
        },
        serviceType: 'Landing Page Development',
        areaServed: 'Worldwide',
        inLanguage: locale.value,
        description: pageDesc.value,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          description: locale.value === 'es' ? 'Desarrollo personalizado de landing pages con Nuxt/Vue' : 'Custom landing page development with Nuxt/Vue'
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
