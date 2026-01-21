<template>
  <section id="services" class="section">
    <v-container>
      <h2 class="text-h4 text-center mb-8">{{ $t('home.services.title') }}</h2>
      <v-row>
        <v-col cols="12" md="4" v-for="service in services" :key="service.title">
          <v-card class="pa-4" elevation="2">
            <v-icon :icon="service.icon" size="36" class="mb-3" />
            <h3 class="text-h6 mb-2">{{ service.title }}</h3>
            <p>{{ service.desc }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const { t } = useI18n()

interface Service { title: string; desc: string; icon: string }
const services = computed<Service[]>(() => [
  { title: t('home.services.items.web.title'), desc: t('home.services.items.web.desc'), icon: 'mdi-laptop' },
  { title: t('home.services.items.api.title'), desc: t('home.services.items.api.desc'), icon: 'mdi-api' },
  { title: t('home.services.items.ads.title'), desc: t('home.services.items.ads.desc'), icon: 'mdi-advertisements' },
])
</script>
