<template>
  <HeroSection />
  <ServicesSection />
  <ProjectsSection />
  <MetricsSection />
  <TestimonialsSection />
  <TechStackSection />
  <ContactForm />
</template>
<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import ProjectsSection from '~/components/ProjectsSection.vue'
import MetricsSection from '~/components/MetricsSection.vue'
import TestimonialsSection from '~/components/TestimonialsSection.vue'
import TechStackSection from '~/components/TechStackSection.vue'
import ContactForm from '~/components/ContactForm.vue'

useHead({
  title: 'Juan Miguel Arias | Full-stack Developer',
  meta: [
    { name: 'description', content: 'Professional portfolio for Juan Miguel Arias, full-stack developer specialized in Go and Vue.js.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>
