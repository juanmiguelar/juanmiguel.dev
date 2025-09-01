<template>
  <section id="services" class="section">
    <v-container>
      <h2 class="text-h4 text-center mb-8">Services</h2>
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
interface Service { title: string; desc: string; icon: string }
const services: Service[] = [
  { title: 'Web Development', desc: 'Responsive websites', icon: 'mdi-laptop' },
  { title: 'API Design', desc: 'Scalable REST', icon: 'mdi-api' },
  { title: 'Ads', desc: 'Meta Ads', icon: 'mdi-advertisements' },
]
</script>
