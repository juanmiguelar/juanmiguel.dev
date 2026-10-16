<template>
  <section id="projects" class="section">
    <v-container>
      <header class="section-heading"><h2>{{ $t('home.projects.title') }}</h2><p>{{ $t('home.projects.subtitle') }}</p></header>
      <div class="career-list">
        <article v-for="job in jobs" :key="job.key" class="career-entry">
          <div class="career-meta"><h3>{{ job.company }}</h3><p>{{ job.period }}{{ job.current ? $t('home.projects.present') : '' }}</p><span>{{ $t(`home.projects.${job.role}`) }}</span></div>
          <div class="career-body">
            <h4>{{ $t(`home.projects.companies.${job.key}.title`) }}</h4>
            <p>{{ $t(`home.projects.companies.${job.key}.description`) }}</p>
            <p class="career-impact"><v-icon icon="mdi-arrow-top-right" size="20" />{{ $t(`home.projects.companies.${job.key}.impact`) }}</p>
            <details><summary>{{ $t('home.projects.details') }}</summary><ul><li v-for="n in job.highlights" :key="n">{{ $t(`home.projects.companies.${job.key}.highlights.${n - 1}`) }}</li></ul></details>
            <div class="technology-list"><span v-for="tech in job.technologies" :key="tech">{{ tech }}</span></div>
          </div>
        </article>
      </div>
    </v-container>
  </section>
</template>
<script setup lang="ts">
interface Job { key: string; company: string; period: string; current?: boolean; role: string; highlights: number; technologies: string[] }
const jobs: Job[] = [
  { key: 'gorillaLogic', company: 'Gorilla Logic', period: '07/2024 - ', current: true, role: 'roleSenior', highlights: 4, technologies: ['Go', 'Kubernetes', 'GKE', 'Argo CD', 'Helm', 'GraphQL', 'GitHub Actions'] },
  { key: 'windriver', company: 'Wind River', period: '08/2022 - 06/2024', role: 'roleCloud', highlights: 3, technologies: ['Go', 'Microservices', 'Concurrency', 'Unit testing'] },
  { key: 'kyndryl', company: 'Kyndryl', period: '04/2021 - 08/2022', role: 'roleBackend', highlights: 2, technologies: ['Go', 'Cloud APIs', 'Microservices', 'Unit testing'] }
]
</script>
<style scoped>
.career-entry { display: grid; grid-template-columns: 1fr 2fr; gap: 48px; padding-block: 40px; }
.career-entry + .career-entry { border-top: 1px solid rgba(var(--v-theme-on-surface), .12); }
.career-meta h3 { font-size: 1.35rem; letter-spacing: -.03em; margin-bottom: 10px; }
.career-meta p, .career-meta span { font-size: .85rem; line-height: 1.7; color: rgba(var(--v-theme-on-surface), .7); }
.career-meta span { display: block; margin-top: 8px; max-width: 26ch; }
.career-body h4 { font-size: 1.2rem; font-weight: 600; margin-bottom: 12px; }
.career-body > p { line-height: 1.75; color: rgba(var(--v-theme-on-surface), .76); }
.career-body p.career-impact { display: flex; align-items: start; gap: 8px; color: rgb(var(--v-theme-primary)); margin-block: 18px; font-weight: 600; }
.career-impact .v-icon { margin-top: 3px; }
summary { cursor: pointer; font-size: .9rem; font-weight: 550; padding-block: 8px; }
summary:hover { color: rgb(var(--v-theme-primary)); }
details ul { padding: 10px 0 6px 20px; font-size: .93rem; line-height: 1.75; color: rgba(var(--v-theme-on-surface), .75); }
details li + li { margin-top: 8px; }
.technology-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
.technology-list span { font-size: .75rem; padding: 5px 10px; border-radius: 6px; background: rgb(var(--v-theme-surface-variant)); }
@media (max-width: 767px) { .career-entry { grid-template-columns: 1fr; gap: 24px; padding-block: 32px; } .career-meta span { max-width: none; } }
</style>
