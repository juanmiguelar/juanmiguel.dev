<template>
  <section id="services" class="py-20">
    <UContainer>
      <h2 class="mb-8 text-center text-4xl font-semibold">Services</h2>
      <div class="grid gap-8 md:grid-cols-3">
        <UCard v-for="service in services" :key="service.title" class="p-6 text-center">
          <UIcon :name="service.icon" class="mb-3 text-4xl" />
          <h3 class="mb-2 text-xl font-semibold">{{ service.title }}</h3>
          <p>{{ service.desc }}</p>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface Service { title: string; desc: string; icon: string }
const services: Service[] = [
  { title: 'Web Development', desc: 'Responsive websites', icon: 'i-heroicons-computer-desktop' },
  { title: 'API Design', desc: 'Scalable REST', icon: 'i-heroicons-code-bracket' },
  { title: 'Ads', desc: 'Meta Ads', icon: 'i-heroicons-megaphone' }
]
</script>
