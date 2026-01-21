<template>
  <section id="tech" class="section">
    <v-container>
      <h2 class="text-h4 text-center mb-8">{{ $t('home.tech.title') }}</h2>
      <v-row class="justify-center">
        <v-col cols="4" sm="2" v-for="tech in techs" :key="tech.src" class="text-center">
          <NuxtImg 
            :src="tech.src" 
            :alt="tech.label" 
            width="90"
            height="80"
            format="webp"
            sizes="(min-width: 960px) 90px, 70px"
            class="tech-logo"
            loading="lazy"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script setup lang="ts">
interface TechLogo { src: string; label: string }
const techs: TechLogo[] = [
  { src: '/img/postgre.png', label: 'PostgreSQL' },
  { src: '/img/gologo.png', label: 'Go programming language' },
  { src: '/img/vue.png', label: 'Vue.js' },
  { src: '/img/nuxt.svg', label: 'Nuxt' },
  { src: '/img/docker.png', label: 'Docker' },
  { src: '/img/k8s.png', label: 'Kubernetes' },
  { src: '/img/aws.png', label: 'Amazon Web Services' }
]
</script>

<style scoped>
.tech-logo {
  max-height: 80px;
  object-fit: contain;
}
</style>
