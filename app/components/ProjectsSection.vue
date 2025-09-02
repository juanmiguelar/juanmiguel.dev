<template>
  <section id="projects" class="py-20">
    <UContainer>
      <div class="text-center mb-12">
        <h2 class="mb-4 text-3xl font-bold">My Experience</h2>
        <p class="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
          From enterprise-scale systems to custom solutions - delivering value across different contexts
        </p>
      </div>

      <div class="flex justify-center mb-10 space-x-4">
        <UButton :variant="activeTab === 'corporate' ? 'solid' : 'ghost'" @click="activeTab = 'corporate'">
          <UIcon name="i-heroicons-building-office-2" class="mr-2" /> Corporate
        </UButton>
        <UButton :variant="activeTab === 'independent' ? 'solid' : 'ghost'" @click="activeTab = 'independent'">
          <UIcon name="i-heroicons-user" class="mr-2" /> Independent
        </UButton>
      </div>

      <div v-if="activeTab === 'corporate'">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <UCard v-for="project in corporateProjects" :key="project.id" class="flex flex-col h-full">
            <div class="flex items-center justify-between mb-4">
              <NuxtImg :src="project.companyLogo" :alt="project.company" height="60" class="max-w-[120px]" />
              <UBadge :color="project.statusColor" variant="soft">{{ project.status }}</UBadge>
            </div>
            <template #header>
              <h3 class="text-xl font-semibold">{{ project.title }}</h3>
              <p class="text-sm text-gray-500">{{ project.company }} • {{ project.period }}</p>
            </template>
            <p class="mb-3">{{ project.description }}</p>
            <div class="mb-3 flex items-center text-sm text-green-600">
              <UIcon name="i-heroicons-arrow-trending-up" class="mr-2" />
              {{ project.impact }}
            </div>
            <div class="mt-auto flex flex-wrap gap-1">
              <UBadge v-for="tech in project.technologies" :key="tech" color="primary" variant="soft">{{ tech }}</UBadge>
            </div>
          </UCard>
        </div>
      </div>

      <div v-else>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <UCard v-for="project in independentProjects" :key="project.id" class="flex flex-col h-full">
            <NuxtImg :src="project.screenshot" :alt="project.title" height="200" class="mb-4 w-full object-cover" />
            <template #header>
              <h3 class="text-xl font-semibold">{{ project.title }}</h3>
              <p class="text-sm text-gray-500">{{ project.category }} • {{ project.timeline }}</p>
            </template>
            <p class="mb-3">{{ project.description }}</p>
            <div class="mb-3 flex flex-wrap gap-1">
              <UBadge v-for="feature in project.keyFeatures" :key="feature" color="green" variant="soft">
                <UIcon name="i-heroicons-check" class="mr-1" />{{ feature }}
              </UBadge>
            </div>
            <div class="mt-auto flex flex-wrap gap-1">
              <UBadge v-for="tech in project.technologies" :key="tech" variant="soft">{{ tech }}</UBadge>
            </div>
            <template #footer>
              <div class="flex space-x-2">
                <UButton v-if="project.github" :href="project.github" target="_blank" variant="ghost">
                  <UIcon name="i-simple-icons-github" class="mr-1" />Code
                </UButton>
                <UButton v-if="project.liveDemo" :href="project.liveDemo" target="_blank" variant="ghost" color="success">
                  <UIcon name="i-heroicons-arrow-top-right-on-square" class="mr-1" />Demo
                </UButton>
              </div>
            </template>
          </UCard>
        </div>
      </div>

      <div class="text-center mt-12">
        <hr class="mb-8" />
        <h3 class="mb-4 text-2xl font-semibold">Ready for Your Project?</h3>
        <p class="mb-6 text-lg text-gray-600 dark:text-gray-300">
          Whether you need enterprise-scale systems or custom solutions, I bring the right experience
        </p>
        <UButton size="lg" color="primary" href="#contact" class="px-8">
          <UIcon name="i-heroicons-envelope" class="mr-2" />Let's discuss your needs
        </UButton>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const activeTab = ref('corporate')

const corporateProjects = [
  {
    id: 'nbc-bff',
    title: 'NBCUniversal Streaming Platform BFF',
    company: 'NBC (via GorillaLogic)',
    period: '2024 - Present',
    description: 'High-performance Backend-for-Frontend using Go and GraphQL, handling millions of daily requests for NBC\'s streaming infrastructure.',
    impact: 'Optimized API performance for millions of users',
    technologies: ['Go', 'GraphQL', 'Microservices', 'Cloud'],
    companyLogo: 'https://placehold.co/150x60/000000/FFFFFF?text=NBC',
    status: 'Active',
    statusColor: 'green'
  },
  {
    id: 'windriver-microservices',
    title: 'Cloud Microservices Architecture',
    company: 'Wind River',
    period: '2022 - 2024',
    description: 'Restructured monolithic services into 6 specialized microservices with concurrent processing, improving system efficiency and maintainability.',
    impact: '70% performance boost, 30% bug reduction',
    technologies: ['Go', 'Microservices', 'Docker', 'Kubernetes'],
    companyLogo: 'https://placehold.co/150x60/1976D2/FFFFFF?text=Wind+River',
    status: 'Completed',
    statusColor: 'blue'
  },
  {
    id: 'kyndryl-apis',
    title: 'Multi-Cloud API Gateway',
    company: 'Kyndryl',
    period: '2021 - 2022',
    description: 'Developed scalable APIs for cloud resource discovery and management. Led Go training for 80+ professionals across global teams.',
    impact: 'Trained 80+ developers, established Go standards',
    technologies: ['Go', 'Cloud APIs', 'DevOps', 'Training'],
    companyLogo: 'https://placehold.co/150x60/4CAF50/FFFFFF?text=Kyndryl',
    status: 'Completed',
    statusColor: 'blue'
  }
]

const independentProjects = [
  {
    id: 'malcolm',
    title: 'Malcolm Ugalde Website',
    category: 'Full-Stack',
    timeline: '1 week',
    description: `A clean, responsive site that presents Malcolm Ugalde—an MBA(c) in Finance and investment advisor with over five years of experience—offering tailored, 1:1 financial guidance. The site explains how to begin investing confidently even with limited funds, highlights personalized mentorship programs, and features real client testimonials that reinforce trust and effectiveness`,
    keyFeatures: ['Mobile responsive', 'SEO optimized'],
    technologies: ['Nuxt', 'Versel', 'Codex', 'Vuetify'],
    screenshot: '/img/malcolmweb.png',
    github: 'https://github.com/juanmiguelar/malcolmugalde.web',
    liveDemo: 'https://malcolmugalde.netlify.app/'
  },
  {
    id: 'soygioco',
    title: 'SoyGioco Website',
    category: 'Full-Stack',
    timeline: '4 weeks',
    description: `A vibrant, mobile-first platform built with Nuxt 3 and Vuetify, crafted to connect Costa Rican art enthusiasts with accessible watercolor and acrylic workshops. Users can explore creative themes like Pokémon, Studio Ghibli, Botánica, and Colibríes—regardless of their skill level—from beginner-friendly to intermediate, and book their first workshop via WhatsApp. The site also features a gallery spotlighting student artwork and warmly introduces Gioconda Cerdas, a passionate instructor who has guided over 300 budding artists for more than eight years`,
    keyFeatures: ['blog', 'Mobile responsive', 'SEO optimized'],
    technologies: ['Nuxt', 'Strapi', 'Codex', 'Vuetify', 'Claude'],
    screenshot: '/img/soygiocoweb.png',
    github: 'https://github.com/juanmiguelar/SoyGioco.art',
    liveDemo: 'https://soygiocoart.netlify.app/'
  },
  {
    id: 'portfolio-website',
    title: 'Developer Portfolio Template',
    category: 'Frontend',
    timeline: '1 week',
    description: `A polished portfolio built with Nuxt 3, TypeScript, and Vuetify—showcasing professional strengths in Go and Vue.js. This mobile-first, responsive site includes a hero section, services, project highlights, performance metrics, tech stack, recommendations, and a contact form. A clean, functional representation of developer identity and experience.`,
    keyFeatures: ['SEO optimized', 'Mobile first'],
    technologies: ['Nuxt.js', 'Vuetify', 'TypeScript', 'SCSS'],
    screenshot: '/img/juanmiguelweb.png',
    github: 'https://github.com/juanmiguelar/juanmiguel.dev',
    liveDemo: 'https://juanmigueldev.netlify.app/'
  }
]
</script>
