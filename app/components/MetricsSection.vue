<template>
  <section id="metrics" class="section">
    <v-container>
      <h2 class="text-h4 text-center mb-8">By the numbers</h2>
      <v-row>
        <v-col cols="12" md="3" v-for="metric in metrics" :key="metric.label" class="text-center">
          <div class="text-h4 font-weight-bold">{{ metric.value }}</div>
          <div>{{ metric.label }}</div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script setup lang="ts">
interface Metric { value: string; label: string }
const metrics: Metric[] = [
  { value: '5+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support' }
]
</script>
