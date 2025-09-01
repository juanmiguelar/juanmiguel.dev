<template>
  <section id="projects" class="section">
    <v-container>
      <h2 class="text-h4 text-center mb-8">Projects</h2>
      <v-row>
        <v-col cols="12" md="4" v-for="project in projects" :key="project.title">
          <v-card>
            <v-img :src="project.img" height="200" :alt="project.title" />
            <v-card-title>{{ project.title }}</v-card-title>
            <v-card-text>{{ project.desc }}</v-card-text>
            <v-card-actions>
              <v-btn :href="project.github" target="_blank" aria-label="GitHub">GitHub</v-btn>
              <v-btn :href="project.demo" target="_blank" aria-label="Demo">Demo</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script setup lang="ts">
interface Project { title: string; desc: string; img: string; github: string; demo: string }
const projects: Project[] = [
  {
    title: 'Analytics Dashboard',
    desc: 'Vue + Go analytics platform.',
    img: 'https://placehold.co/600x400',
    github: 'https://github.com/username/project-name',
    demo: 'https://project-demo.com'
  },
  {
    title: 'E-commerce API',
    desc: 'Scalable backend for shops.',
    img: 'https://placehold.co/600x400',
    github: 'https://github.com/username/project-name',
    demo: 'https://project-demo.com'
  },
  {
    title: 'Real-time Chat',
    desc: 'WebSocket based chat app.',
    img: 'https://placehold.co/600x400',
    github: 'https://github.com/username/project-name',
    demo: 'https://project-demo.com'
  }
]
</script>
