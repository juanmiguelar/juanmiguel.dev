<template>
  <section id="projects" class="experience-section">
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-4">{{ $t('home.projects.title') }}</h2>
        <p class="text-h6 text-medium-emphasis mx-auto" style="max-width: 700px">
          {{ $t('home.projects.subtitle') }}
        </p>
      </div>

      <!-- Experience Toggle -->
      <v-tabs v-model="activeTab" centered class="mb-10">
        <v-tab value="corporate">
          <v-icon start>mdi-office-building</v-icon>
          {{ $t('home.projects.tabs.corporate') }}
        </v-tab>
        <v-tab value="independent">
          <v-icon start>mdi-account-star</v-icon>
          {{ $t('home.projects.tabs.independent') }}
        </v-tab>
      </v-tabs>

      <!-- Corporate Experience -->
      <v-window v-model="activeTab">
        <v-window-item value="corporate">
          <div class="corporate-section">
            <div class="text-center mb-8">
              <v-chip color="primary" variant="outlined" size="large" class="mb-4">
                <v-icon start>mdi-shield-check</v-icon>
                {{ $t('home.projects.corporate.badge') }}
              </v-chip>
              <h3 class="text-h5 mb-2">{{ $t('home.projects.corporate.title') }}</h3>
              <p class="text-body-1 text-medium-emphasis">
                {{ $t('home.projects.corporate.subtitle') }}
              </p>
            </div>

            <v-row>
              <v-col 
                cols="12" 
                md="6" 
                lg="4"
                v-for="project in corporateProjects" 
                :key="project.id"
              >
                <v-card class="corporate-card h-100" elevation="3">
                  <div class="company-header">
                    <NuxtImg 
                      :src="project.companyLogo" 
                      :alt="`${project.company} logo`"
                      width="150"
                      height="60"
                      format="webp"
                      sizes="150px"
                      class="company-logo"
                      loading="lazy"
                    />
                    <v-chip 
                      :color="project.statusColor" 
                      variant="flat" 
                      size="small"
                    >
                      {{ project.status }}
                    </v-chip>
                  </div>

                  <v-card-title class="text-h6">{{ project.title }}</v-card-title>
                  <v-card-subtitle>{{ project.company }} • {{ project.period }}</v-card-subtitle>

                  <v-card-text>
                    <p class="text-body-2 mb-3">{{ project.description }}</p>
                    
                    <!-- Key Impact -->
                    <div class="impact-metric mb-3">
                      <v-icon color="success" class="me-2">mdi-trending-up</v-icon>
                      <span class="text-success font-weight-medium">
                        {{ project.impact }}
                      </span>
                    </div>

                    <!-- Tech Stack -->
                    <div class="tech-stack">
                      <v-chip
                        v-for="tech in project.technologies" 
                        :key="tech"
                        size="small"
                        variant="outlined"
                        class="me-1 mb-1"
                      >
                        {{ tech }}
                      </v-chip>
                    </div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn variant="text" size="small" disabled>
                      <v-icon start>mdi-lock</v-icon>
                      {{ $t('home.projects.corporate.cta_nda') }}
                    </v-btn>
                    <v-spacer />
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-window-item>

        <!-- Independent Experience -->
        <v-window-item value="independent">
          <div class="independent-section">
            <div class="text-center mb-8">
              <v-chip color="success" variant="outlined" size="large" class="mb-4">
                <v-icon start>mdi-rocket-launch</v-icon>
                {{ $t('home.projects.independent.badge') }}
              </v-chip>
              <h3 class="text-h5 mb-2">{{ $t('home.projects.independent.title') }}</h3>
              <p class="text-body-1 text-medium-emphasis">
                {{ $t('home.projects.independent.subtitle') }}
              </p>
            </div>

            <v-row>
              <v-col 
                cols="12" 
                md="6" 
                lg="4"
                v-for="project in independentProjects" 
                :key="project.id"
              >
                <v-card class="independent-card h-100" elevation="2" hover>
                  <div class="project-media">
                    <NuxtImg 
                      :src="project.screenshot" 
                      :alt="`${project.title} screenshot`"
                      width="800"
                      height="450"
                      format="webp"
                      sizes="(min-width: 1280px) 400px, (min-width: 960px) 320px, 100vw"
                      class="project-image"
                      loading="lazy"
                    />
                    <div class="project-overlay">
                      <v-btn
                        v-if="project.liveDemo"
                        :href="project.liveDemo"
                        target="_blank"
                        color="white"
                        variant="elevated"
                        size="small"
                        class="demo-btn"
                        @click="trackProjectAction(project.title, 'live_demo')"
                      >
                        <v-icon start>mdi-eye</v-icon>
                        {{ $t('home.projects.independent.actions.live') }}
                      </v-btn>
                    </div>
                  </div>

                  <v-card-title class="text-h6">{{ project.title }}</v-card-title>
                  <v-card-subtitle>{{ project.category }} • {{ project.timeline }}</v-card-subtitle>

                  <v-card-text>
                    <p class="text-body-2 mb-3">{{ project.description }}</p>
                    
                    <!-- Key Features -->
                    <div class="features-list mb-3">
                      <v-chip
                        v-for="feature in project.keyFeatures" 
                        :key="feature"
                        size="small"
                        color="success"
                        variant="outlined"
                        class="me-1 mb-1"
                      >
                        <v-icon start size="14">mdi-check</v-icon>
                        {{ feature }}
                      </v-chip>
                    </div>

                    <!-- Tech Stack -->
                    <div class="tech-stack">
                      <v-chip
                        v-for="tech in project.technologies" 
                        :key="tech"
                        size="small"
                        variant="flat"
                        class="me-1 mb-1"
                      >
                        {{ tech }}
                      </v-chip>
                    </div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      v-if="project.github"
                      :href="project.github"
                      target="_blank"
                      variant="text"
                      color="primary"
                      @click="trackProjectAction(project.title, 'source_code')"
                    >
                      <v-icon start>mdi-github</v-icon>
                      {{ $t('home.projects.independent.actions.code') }}
                    </v-btn>
                    
                    <v-btn
                      v-if="project.liveDemo"
                      :href="project.liveDemo"
                      target="_blank"
                      variant="text"
                      color="success"
                      @click="trackProjectAction(project.title, 'live_demo')"
                    >
                      <v-icon start>mdi-open-in-new</v-icon>
                      {{ $t('home.projects.independent.actions.demo') }}
                    </v-btn>

                    <v-spacer />
                    
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-window-item>
      </v-window>

      <!-- Call to Action -->
      <div class="text-center mt-12">
        <v-divider class="mb-8" />
        <h3 class="text-h5 mb-4">{{ $t('home.projects.cta.title') }}</h3>
        <p class="text-body-1 text-medium-emphasis mb-6">
          {{ $t('home.projects.cta.subtitle') }}
        </p>
        <v-btn 
          size="x-large" 
          color="primary" 
          variant="elevated"
          href="#contact"
          class="px-8"
        >
          <v-icon start>mdi-message</v-icon>
          {{ $t('home.projects.cta.btn') }}
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeTab = ref('corporate')
const { t } = useI18n()
const pixel = usePixel()

const trackProjectAction = (projectTitle: string, actionType: string) => {
  pixel.track('ViewContent', {
    content_name: projectTitle,
    content_category: actionType
  })
}

// Corporate projects (based on real experience)
const corporateProjects = computed(() => [
  {
    id: 'nbc-bff',
    title: 'NBCUniversal Streaming Platform BFF',
    company: 'NBC (via GorillaLogic)',
    period: '2024 - Present',
    description: t('home.projects.companies.nbc.description'),
    impact: t('home.projects.companies.nbc.impact'),
    technologies: ['Go', 'GraphQL', 'Microservices', 'Cloud'],
    companyLogo: 'https://placehold.co/150x60/000000/FFFFFF?text=NBC',
    status: 'Active',
    statusColor: 'success'
  },
  {
    id: 'windriver-microservices',
    title: 'Cloud Microservices Architecture',
    company: 'Wind River',
    period: '2022 - 2024',
    description: t('home.projects.companies.windriver.description'),
    impact: t('home.projects.companies.windriver.impact'),
    technologies: ['Go', 'Microservices', 'Docker', 'Kubernetes'],
    companyLogo: 'https://placehold.co/150x60/1976D2/FFFFFF?text=Wind+River',
    status: 'Completed',
    statusColor: 'info'
  },
  {
    id: 'kyndryl-apis',
    title: 'Multi-Cloud API Gateway',
    company: 'Kyndryl',
    period: '2021 - 2022',
    description: t('home.projects.companies.kyndryl.description'),
    impact: t('home.projects.companies.kyndryl.impact'),
    technologies: ['Go', 'Cloud APIs', 'DevOps', 'Training'],
    companyLogo: 'https://placehold.co/150x60/4CAF50/FFFFFF?text=Kyndryl',
    status: 'Completed',
    statusColor: 'info'
  }
])

// Independent projects (you can add real ones here)
const independentProjects = computed(() => [
  {
    id: 'malcolm',
    title: 'Malcolm Ugalde Website',
    category: 'Full-Stack',
    timeline: '1 week',
    description: t('home.projects.companies.malcolm.description'),
    keyFeatures: ['Mobile responsive', 'SEO optimized'],
    technologies: ['React', 'Versel', 'Antigravity'],
    screenshot: '/img/malcolmweb.png',
    liveDemo: 'https://www.malcolmugalde.com/'
  },
  {
    id: 'soygioco',
    title: 'SoyGioco Website',
    category: 'Full-Stack',
    timeline: '4 weeks',
    description: t('home.projects.companies.soygioco.description'),
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
    description: t('home.projects.companies.portfolio.description'),
    keyFeatures: ['SEO optimized', 'Mobile first'],
    technologies: ['Nuxt.js', 'Vuetify', 'TypeScript', 'SCSS'],
    screenshot: '/img/juanmiguelweb.png',
    github: 'https://github.com/juanmiguelar/juanmiguel.dev',
    liveDemo: 'https://juanmigueldev.netlify.app/'
  }
])

const openCorporateCaseStudy = (projectId: string) => {
  console.log(`Opening corporate case study for: ${projectId}`)
}

const openIndependentCaseStudy = (projectId: string) => {
  console.log(`Opening independent case study for: ${projectId}`)
}
</script>

<style scoped lang="scss">
.experience-section {
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(25, 118, 210, 0.02) 0%, rgba(156, 39, 176, 0.02) 100%);

  .corporate-card, .independent-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 12px;
    overflow: hidden;

    &:hover {
      transform: translateY(-4px);
    }
  }

  .corporate-card {
    border-top: 4px solid rgb(var(--v-theme-primary));
    
    .company-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 16px 0;
      
      .company-logo {
        width: 120px;
        height: 60px;
        object-fit: contain;
      }
    }

    .impact-metric {
      background: rgba(76, 175, 80, 0.1);
      padding: 8px 12px;
      border-radius: 8px;
      border-left: 3px solid rgb(76, 175, 80);
    }
  }

  .independent-card {
    border-top: 4px solid rgb(var(--v-theme-success));

    .project-media {
      position: relative;
      overflow: hidden;
    }

    .project-image {
      display: block;
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover .project-overlay {
      opacity: 1;
    }
  }

  .tech-stack, .features-list {
    margin-top: 12px;
  }
}

@media (max-width: 768px) {
  .experience-section {
    padding: 60px 0;
    
    .corporate-card, .independent-card {
      margin-bottom: 24px;
    }
  }
}
</style>
