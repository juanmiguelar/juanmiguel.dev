<template>
  <section id="metrics" class="metrics-section">
    <v-container>
      <h2 class="text-h4 text-center mb-8">Professional Experience</h2>
      <v-row justify="center">
        <v-col 
          cols="6" 
          md="3" 
          v-for="metric in metrics" 
          :key="metric.label" 
          class="text-center"
        >
          <div class="metric-card">
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

const metrics: Metric[] = [
  { 
    value: '8+', 
    label: 'Years Experience',
    icon: 'mdi-calendar-clock',
    color: 'primary'
  },
  { 
    value: '70%', 
    label: 'Performance Boost',
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
</script>

<style scoped lang="scss">
.metrics-section {
  padding: 80px 0;
  background-color: rgb(var(--v-theme-surface));
  
  .metric-card {
    padding: 24px;
    border-radius: 12px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-4px);
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
</style>