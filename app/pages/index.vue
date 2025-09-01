<template>
  <SeoHead
    title="Juan Miguel - Full-Stack Developer Portfolio"
    description="Experienced developer specializing in Vue, Nuxt, and Golang"
    :schema="schema"
  />
  <HeroSection />
  <ServicesSection />
  <ProjectsSection />
  <MetricsSection />
  <RecomendationsSection />
  <TechStackSection />
  <ContactForm />
</template>
<script setup lang="ts">
import SeoHead from '~/components/global/SeoHead.vue'
import HeroSection from '~/components/HeroSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import ProjectsSection from '~/components/ProjectsSection.vue'
import MetricsSection from '~/components/MetricsSection.vue'
import RecomendationsSection from '~/components/RecomendationsSection.vue'
import TechStackSection from '~/components/TechStackSection.vue'
import ContactForm from '~/components/ContactForm.vue'

const schema = {
  '@context': 'https://schema.org',
  '@type': ['Person', 'WebSite'],
  name: 'Juan Miguel',
  url: 'https://juanmiguel.dev'
}
</script>
