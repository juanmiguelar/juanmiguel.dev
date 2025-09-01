<template>
  <section id="metrics" class="metrics-section">
    <v-container>
      <h2 class="text-h4 text-center mb-8">Professional Experience</h2>
      
      <ClientOnly>
        <v-row justify="center">
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="metric in metrics"
            :key="metric.label"
            class="text-center"
          >
            <div class="metric-card" :class="{ 'loaded': isLoaded }">
              <v-icon 
                :icon="metric.icon" 
                size="48" 
                :color="metric.color"
                class="mb-3"
              />
              <div class="text-h4 font-weight-bold text-primary mb-1">
                {{ metric.value }}
              </div>
              <div class="text-body-1 text-medium-emphasis">
                {{ metric.label }}
              </div>
            </div>
          </v-col>
        </v-row>
        
        <template #fallback>
          <!-- Skeleton loader para las métricas -->
          <v-row justify="center">
            <v-col
              cols="12"
              sm="6"
              md="4"
              v-for="n in 3"
              :key="`skeleton-${n}`"
              class="text-center"
            >
              <div class="metric-card skeleton-card">
                <v-skeleton-loader
                  type="avatar"
                  class="mb-3 mx-auto"
                  width="48"
                  height="48"
                ></v-skeleton-loader>
                <v-skeleton-loader
                  type="heading"
                  class="mb-1"
                  width="60px"
                ></v-skeleton-loader>
                <v-skeleton-loader
                  type="text"
                  width="120px"
                ></v-skeleton-loader>
              </div>
            </v-col>
          </v-row>
        </template>
      </ClientOnly>
    </v-container>
  </section>
</template>

<script setup lang="ts">
interface Metric { 
  value: string; 
  label: string;
  icon: string;
  color: string;
}

// Reactive flag para animaciones
const isLoaded = ref(false)

const metrics: Metric[] = [
  { 
    value: '8+', 
    label: '8+ Years Experience',
    icon: 'mdi-calendar-clock',
    color: 'primary'
  },
  { 
    value: '70%', 
    label: '70% Performance Boost',
    icon: 'mdi-trending-up',
    color: 'success'
  },
  { 
    value: '10+', 
    label: 'Technical workshops',
    icon: 'mdi-account-group',
    color: 'warning'
  }
]

// Marcar como loaded después del mount
onMounted(() => {
  nextTick(() => {
    isLoaded.value = true
  })
})
</script>

<style scoped lang="scss">
.metrics-section {
  padding: 80px 0;
  background-color: rgb(var(--v-theme-surface));
  
  .metric-card {
    padding: 24px;
    border-radius: 12px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0.8;
    
    &.loaded {
      opacity: 1;
    }
    
    &:hover {
      transform: translateY(-4px);
    }
  }
  
  .skeleton-card {
    opacity: 1;
    
    .v-skeleton-loader {
      background-color: rgba(var(--v-theme-on-surface), 0.1);
    }
  }
}

@media (max-width: 768px) {
  .metrics-section {
    padding: 60px 0;
    
    .metric-card {
      padding: 16px;
      margin-bottom: 16px;
    }
  }
}

/* Custom skeleton styles */
:deep(.v-skeleton-loader__avatar) {
  border-radius: 8px !important;
}

:deep(.v-skeleton-loader__heading) {
  margin: 0 auto;
}

:deep(.v-skeleton-loader__text) {
  margin: 0 auto;
}
</style>