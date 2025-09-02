<template>
  <section id="metrics" class="py-20 bg-gray-50 dark:bg-gray-900">
    <UContainer>
      <h2 class="mb-8 text-center text-4xl font-semibold">Professional Experience</h2>
      <ClientOnly>
        <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-center">
          <div
            v-for="metric in metrics"
            :key="metric.label"
            class="p-6 rounded-lg bg-white dark:bg-gray-800 shadow transition-transform hover:-translate-y-1"
          >
            <UIcon :name="metric.icon" class="mb-3 text-4xl" :class="metric.color" />
            <div class="text-4xl font-bold text-primary mb-1">{{ metric.value }}</div>
            <div class="text-base text-gray-600 dark:text-gray-300">{{ metric.label }}</div>
          </div>
        </div>
        <template #fallback>
          <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-center">
            <div v-for="n in 3" :key="n" class="p-6 rounded-lg bg-white dark:bg-gray-800 shadow">
              <USkeleton class="w-12 h-12 mb-3 mx-auto" />
              <USkeleton class="w-16 h-6 mb-1 mx-auto" />
              <USkeleton class="w-24 h-5 mx-auto" />
            </div>
          </div>
        </template>
      </ClientOnly>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface Metric { value: string; label: string; icon: string; color: string }
const metrics: Metric[] = [
  { value: '8+', label: '8+ Years Experience', icon: 'i-heroicons-calendar-days', color: 'text-primary' },
  { value: '70%', label: '70% Performance Boost', icon: 'i-heroicons-arrow-trending-up', color: 'text-green-500' },
  { value: '10+', label: 'Technical workshops', icon: 'i-heroicons-user-group', color: 'text-yellow-500' }
]
</script>
