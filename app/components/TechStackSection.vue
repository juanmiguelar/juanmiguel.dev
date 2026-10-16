<template>
  <section id="tech" class="section">
    <v-container>
      <header class="section-heading"><h2>{{ $t('home.tech.title') }}</h2><p>{{ $t('home.tech.intro') }}</p></header>
      <div class="skill-grid"><div v-for="group in groups" :key="group.key"><h3><v-icon :icon="group.icon" size="22" color="primary" />{{ $t(`home.tech.${group.key}`) }}</h3><ul><li v-for="skill in group.skills" :key="skill">{{ skill }}</li></ul></div></div>
    </v-container>
  </section>
</template>
<script setup lang="ts">
interface SkillGroup { key: string; icon: string; skills: string[] }
const groups: SkillGroup[] = [
  { key: 'backend', icon: 'mdi-code-braces', skills: ['Go / Golang', 'REST & GraphQL', 'Microservices', 'Concurrent programming'] },
  { key: 'platform', icon: 'mdi-kubernetes', skills: ['Kubernetes / GKE / GCP', 'Controllers / CRDs / Kubebuilder', 'Argo CD / Helm', 'GitHub Actions / Docker'] },
  { key: 'quality', icon: 'mdi-test-tube', skills: ['Unit / Integration / E2E', 'Mockery / Kind', 'SonarQube / FOSSA', 'Go Vulnerability Check'] },
  { key: 'ai', icon: 'mdi-auto-fix', skills: ['Claude Code', 'Codex', 'GitHub Copilot', 'Cursor'] }
]
</script>
<style scoped>
.skill-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
h3 { font-size: .95rem; font-weight: 600; display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
ul { list-style: none; padding: 0; display: grid; gap: 12px; }
li { font-size: .86rem; line-height: 1.6; color: rgba(var(--v-theme-on-surface), .75); }
@media (max-width: 960px) { .skill-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 480px) { .skill-grid { grid-template-columns: 1fr; } }
</style>
