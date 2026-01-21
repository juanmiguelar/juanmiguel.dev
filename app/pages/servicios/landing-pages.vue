<template>
  <div class="landing-page-service">
    <!-- HERO SECTION -->
    <v-sheet tag="section" theme="dark" color="surface-variant" class="section hero-section">
      <v-container>
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="12" md="10">
            <v-chip color="primary" class="mb-6 font-weight-bold" variant="flat" size="large">
              {{ $t('landing.hero.badge') }}
            </v-chip>
            <h1 class="text-h3 text-md-h2 font-weight-bold mb-6 text-white">
              {{ $t('landing.hero.title') }}
            </h1>
            <p class="text-h5 text-medium-emphasis mb-8" style="line-height: 1.6;">
              {{ $t('landing.hero.subtitle') }}
              <br class="d-none d-md-block">
              <strong>{{ $t('landing.hero.subtitle_bold') }}</strong>
            </p>
            <div class="d-flex flex-column flex-sm-row justify-center align-center gap-4">
              <v-btn
                color="primary"
                size="x-large"
                class="px-8"
                href="#pricing"
              >
                {{ $t('landing.hero.cta_primary') }}
              </v-btn>
              <v-btn
                variant="outlined"
                size="x-large"
                class="px-8"
                href="#benefits"
                color="white"
              >
                {{ $t('landing.hero.cta_secondary') }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- PROBLEM / AUTHORITY GAP -->
    <section id="benefits" class="section">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <h2 class="text-h4 font-weight-bold mb-6">{{ $t('landing.benefits.title') }}</h2>
            <p class="text-body-1 mb-4">
              {{ $t('landing.benefits.description') }}
            </p>
            <v-list bg-color="transparent">
              <v-list-item prepend-icon="mdi-close-circle" base-color="error" :title="$t('landing.benefits.list.slow')"></v-list-item>
              <v-list-item prepend-icon="mdi-close-circle" base-color="error" :title="$t('landing.benefits.list.generic')"></v-list-item>
              <v-list-item prepend-icon="mdi-close-circle" base-color="error" :title="$t('landing.benefits.list.scheduling')"></v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="6">
             <v-card theme="dark" color="surface-variant" class="pa-8 border-primary text-center">
               <v-icon icon="mdi-shield-check" size="64" color="primary" class="mb-4"></v-icon>
               <h3 class="text-h5 font-weight-bold mb-2 text-white">{{ $t('landing.benefits.card.title') }}</h3>
               <p class="text-body-1 text-white">
                 {{ $t('landing.benefits.card.description') }}
               </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CASE MOCKUPS (Finanzas) -->
    <v-sheet tag="section" theme="dark" color="surface-variant" class="section">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h4 font-weight-bold text-white">{{ $t('landing.mockups.title') }}</h2>
        </div>
        <v-row justify="center">
          <v-col cols="12" md="5">
            <v-card class="pa-6 h-100 text-center">
              <v-icon icon="mdi-calendar-check" color="success" size="48" class="mb-4"></v-icon>
              <h3 class="text-h6 font-weight-bold mb-2 text-white">{{ $t('landing.mockups.card1.title') }}</h3>
              <p class="text-body-2 text-white">{{ $t('landing.mockups.card1.description') }}</p>
            </v-card>
          </v-col>
          <v-col cols="12" md="5">
            <v-card class="pa-6 h-100 text-center">
              <v-icon icon="mdi-speedometer" color="primary" size="48" class="mb-4"></v-icon>
              <h3 class="text-h6 font-weight-bold mb-2 text-white">{{ $t('landing.mockups.card2.title') }}</h3>
              <p class="text-body-2 text-white">{{ $t('landing.mockups.card2.description') }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- PRICING -->
    <section id="pricing" class="section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" lg="6">
            <v-card elevation="6" class="h-100 pa-8 d-flex flex-column border-primary position-relative">
              <v-chip color="secondary" size="default" class="position-absolute top-0 right-0 mt-4 mr-4 font-weight-bold">{{ $t('landing.pricing.badge') }}</v-chip>
              <div class="text-center mb-6">
                <h3 class="text-h4 font-weight-bold mb-2">{{ $t('landing.pricing.title') }}</h3>
                <p class="text-h6 text-medium-emphasis">{{ $t('landing.pricing.subtitle') }}</p>
              </div>
              
              <div class="text-center mb-8">
                 <div class="text-h2 font-weight-bold text-primary">
                  $990 <span class="text-h6 text-medium-emphasis">USD</span>
                </div>
                <p class="text-caption mt-2 text-medium-emphasis">{{ $t('landing.pricing.one_time_payment') }}</p>
                <p class="text-body-2 mt-1 font-weight-bold">{{ $t('landing.pricing.maintenance') }} <span class="text-caption text-medium-emphasis">{{ $t('landing.pricing.maintenance_note') }}</span></p>
              </div>
              
              <v-divider class="mb-8"></v-divider>
              
              <v-row>
                <v-col cols="12" sm="6">
                  <v-list density="compact" bg-color="transparent">
                    <v-list-item class="px-0"><v-icon color="success" class="mr-2">mdi-check-circle</v-icon> <strong>{{ $t('landing.pricing.features.design') }}</strong></v-list-item>
                    <v-list-item class="px-0"><v-icon color="success" class="mr-2">mdi-check-circle</v-icon> {{ $t('landing.pricing.features.pages') }}</v-list-item>
                    <v-list-item class="px-0"><v-icon color="success" class="mr-2">mdi-check-circle</v-icon> {{ $t('landing.pricing.features.integration') }}</v-list-item>
                    <v-list-item class="px-0"><v-icon color="success" class="mr-2">mdi-check-circle</v-icon> {{ $t('landing.pricing.features.copy') }}</v-list-item>
                  </v-list>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-list density="compact" bg-color="transparent">
                     <v-list-item class="px-0"><v-icon color="success" class="mr-2">mdi-check-circle</v-icon> {{ $t('landing.pricing.features.speed') }}</v-list-item>
                    <v-list-item class="px-0"><v-icon color="success" class="mr-2">mdi-check-circle</v-icon> {{ $t('landing.pricing.features.hosting') }}</v-list-item>
                    <v-list-item class="px-0"><v-icon color="success" class="mr-2">mdi-check-circle</v-icon> {{ $t('landing.pricing.features.support') }}</v-list-item>
                    <v-list-item class="px-0"><v-icon color="info" class="mr-2">mdi-information</v-icon> <span class="text-caption">{{ $t('landing.pricing.features.external') }}</span></v-list-item>
                  </v-list>
                </v-col>
              </v-row>

              <div class="mt-8 text-center">
                <v-btn block color="primary" size="x-large" height="64" class="text-h6 mb-4" href="https://calendly.com/juanmiguelar09/sesion-personalizada?back=1&month=2026-01" target="_blank" @click="trackSchedule">
                  {{ $t('landing.pricing.cta') }}
                </v-btn>

                <v-btn block variant="outlined" size="large" height="56" class="text-body-1" href="https://wa.me/50684590688" target="_blank" @click="trackWhatsapp">
                  <v-icon start icon="mdi-whatsapp" color="success" class="mr-2"></v-icon>
                  {{ $t('landing.pricing.cta_whatsapp') }}
                </v-btn>

                <p class="text-caption mt-6 text-medium-emphasis">
                  {{ $t('landing.pricing.note') }}
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <LazyFaqSection 
      :items="faqItems"
      :title="$t('landing.faq.title')"
      :description="$t('landing.faq.description')"
      :cta-text="$t('landing.faq.cta')"
      cta-link="#pricing"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import FaqSection from '~/components/FaqSection.vue'

const { t } = useI18n()
const pixel = usePixel()

const trackSchedule = () => {
  pixel.track('Schedule', {
    content_name: 'Consultation Call',
    value: 0.00,
    currency: 'USD'
  })
}

const trackWhatsapp = () => {
  pixel.track('Contact', {
    content_name: 'WhatsApp',
    type: 'whatsapp'
  })
}

useSeoMeta({
  title: computed(() => t('landing.meta.title')),
  description: computed(() => t('landing.meta.description')),
})

const faqItems = computed(() => [
  {
    question: t('landing.faq.items.time.q'),
    answer: t('landing.faq.items.time.a')
  },
  {
    question: t('landing.faq.items.texts.q'),
    answer: t('landing.faq.items.texts.a')
  },
  {
    question: t('landing.faq.items.changes.q'),
    answer: t('landing.faq.items.changes.a')
  },
  {
    question: t('landing.faq.items.hosting.q'),
    answer: t('landing.faq.items.hosting.a')
  }
])
</script>

<style scoped>
.section {
  padding: 5rem 0;
}
.hero-section {
  padding: 8rem 0 6rem;
}
.gap-4 {
  gap: 1.5rem;
}
.border-primary {
  border: 1px solid rgb(var(--v-theme-primary));
}
</style>
