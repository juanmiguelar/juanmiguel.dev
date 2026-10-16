<template>
  <section id="services" class="section">
    <v-container>
      <header class="section-heading"><h2>{{ $t('home.services.title') }}</h2><p>{{ $t('home.services.intro') }}</p></header>
      <div class="services-layout">
        <article class="platform-service">
          <v-icon icon="mdi-kubernetes" size="42" color="primary" />
          <h3>{{ $t('home.services.items.platform.title') }}</h3>
          <p>{{ $t('home.services.items.platform.desc') }}</p>
          <p class="service-detail">{{ $t('home.services.items.platform.detail') }}</p>
        </article>
        <div class="supporting-services">
          <article v-for="service in services" :key="service.key">
            <v-icon :icon="service.icon" size="28" color="primary" />
            <div><h3>{{ $t(`home.services.items.${service.key}.title`) }}</h3><p>{{ $t(`home.services.items.${service.key}.desc`) }}</p></div>
          </article>
        </div>
      </div>
    </v-container>
  </section>
</template>
<script setup lang="ts">
interface Service { key: string; icon: string }
const services: Service[] = [{ key: 'api', icon: 'mdi-code-braces' }, { key: 'delivery', icon: 'mdi-source-branch' }]
</script>
<style scoped>
.services-layout { display: grid; grid-template-columns: 1.1fr 1fr; gap: 48px; }
h3 { margin-block: 18px 12px; font-size: 1.3rem; font-weight: 600; letter-spacing: -.02em; }
p { line-height: 1.75; color: rgba(var(--v-theme-on-surface), .75); max-width: 54ch; }
.platform-service { background: rgb(var(--v-theme-surface-variant)); padding: 32px; border-radius: 12px; }
p.service-detail { margin-top: 30px; font-size: .8rem; color: rgb(var(--v-theme-primary)); }
.supporting-services { display: grid; gap: 32px; align-content: center; }
.supporting-services article { display: flex; gap: 20px; align-items: start; }
.supporting-services h3 { margin-top: 0; }
@media (max-width: 767px) { .services-layout { grid-template-columns: 1fr; gap: 32px; } .platform-service { padding: 24px; } }
</style>
