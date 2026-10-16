<template>
  <section id="metrics" class="metrics-section" :aria-label="$t('home.metrics.title')">
    <v-container>
      <dl class="metrics-grid">
        <div v-for="metric in metrics" :key="metric.key">
          <dt>{{ $t(`home.metrics.items.${metric.key}.label`) }}</dt>
          <dd>{{ metric.value }}</dd>
        </div>
      </dl>
    </v-container>
  </section>
</template>
<script setup lang="ts">
interface Metric { key: string; value: string }
const metrics: Metric[] = [{ key: 'coverage', value: '5% → 60%' }, { key: 'boost', value: '+70%' }, { key: 'training', value: '80+' }]
</script>
<style scoped>
.metrics-section { padding-block: 28px 42px; }
.metrics-grid { display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 32px; border-block: 1px solid rgba(var(--v-theme-on-surface), .14); padding-block: 32px; }
.metrics-grid > div { display: flex; flex-direction: column-reverse; gap: 10px; }
dt { font-size: .87rem; color: rgba(var(--v-theme-on-surface), .7); }
dd { font-size: clamp(1.8rem, 3vw, 2.8rem); line-height: 1.1; font-weight: 600; letter-spacing: -.04em; font-variant-numeric: tabular-nums; }
@media (max-width: 600px) { .metrics-grid { grid-template-columns: 1fr; gap: 28px; } .metrics-grid > div { flex-direction: row; justify-content: space-between; align-items: center; gap: 20px; } dt { max-width: 22ch; } dd { white-space: nowrap; } }
</style>
