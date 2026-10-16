<template>
  <section id="background" class="section credentials-section">
    <v-container>
      <header class="section-heading"><h2>{{ $t('home.credentials.title') }}</h2></header>
      <div class="credentials-layout">
        <div class="education"><v-icon icon="mdi-school-outline" size="32" color="primary" /><h3>{{ $t('home.credentials.education') }}</h3><p class="credential-name">{{ $t('home.credentials.degree') }}</p><p>{{ $t('home.credentials.university') }}</p><h3 class="language-heading">{{ $t('home.credentials.languages') }}</h3><p>{{ $t('home.credentials.languageDetail') }}</p></div>
        <div><h3>{{ $t('home.credentials.certifications') }}</h3><dl class="certification-list"><div v-for="cert in certifications" :key="cert"><dt>{{ $t(`home.credentials.${cert}`) }}</dt><dd>{{ $t(`home.credentials.${cert}Issuer`) }}</dd></div></dl></div>
      </div>
    </v-container>
  </section>
</template>
<script setup lang="ts">
const certifications = ['kcna', 'istqb', 'itil'] as const
</script>
<style scoped>
.credentials-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
h3 { font-size: .9rem; color: rgba(var(--v-theme-on-surface), .7); font-weight: 500; margin-bottom: 16px; }
.education h3 { margin-top: 20px; }
p { font-size: .9rem; color: rgba(var(--v-theme-on-surface), .72); line-height: 1.7; }
p.credential-name { font-size: 1.2rem; color: rgb(var(--v-theme-on-surface)); font-weight: 600; margin-bottom: 6px; }
h3.language-heading { margin-top: 32px; margin-bottom: 8px; }
.certification-list { display: grid; gap: 24px; }
dt { font-size: 1rem; font-weight: 600; margin-bottom: 6px; }
dd { font-size: .85rem; color: rgba(var(--v-theme-on-surface), .72); }
@media (max-width: 767px) { .credentials-layout { grid-template-columns: 1fr; gap: 40px; } }
</style>
