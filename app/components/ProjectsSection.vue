<template>
  <section id="projects" class="experience-section">
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-4">My Experience</h2>
        <p class="text-h6 text-medium-emphasis mx-auto" style="max-width: 700px">
          From enterprise-scale systems to custom solutions - delivering value across different contexts
        </p>
      </div>

      <!-- Experience Toggle -->
      <ClientOnly>
        <v-tabs v-model="activeTab" centered class="mb-10">
          <v-tab value="corporate">
            <v-icon start>mdi-office-building</v-icon>
            Corporate Experience
          </v-tab>
          <v-tab value="independent">
            <v-icon start>mdi-account-star</v-icon>
            Independent Projects
          </v-tab>
        </v-tabs>

        <!-- Corporate Experience -->
        <v-window v-model="activeTab">
          <v-window-item value="corporate">
            <div class="corporate-section">
            <div class="text-center mb-8">
              <v-chip color="primary" variant="outlined" size="large" class="mb-4">
                <v-icon start>mdi-shield-check</v-icon>
                Enterprise-Proven Track Record
              </v-chip>
              <h3 class="text-h5 mb-2">Trusted by Industry Leaders</h3>
              <p class="text-body-1 text-medium-emphasis">
                8+ years building mission-critical systems for Fortune 500 companies
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
                    <v-img 
                      :src="project.companyLogo" 
                      height="60" 
                      :alt="project.company"
                      contain
                      class="company-logo"
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
                      Enterprise NDA
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
                Full-Stack Independence
              </v-chip>
              <h3 class="text-h5 mb-2">End-to-End Project Delivery</h3>
              <p class="text-body-1 text-medium-emphasis">
                Custom solutions with complete ownership - from concept to deployment
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
                  <v-img 
                    :src="project.screenshot" 
                    height="200" 
                    :alt="project.title"
                    cover
                  >
                    <div class="project-overlay">
                      <v-btn
                        v-if="project.liveDemo"
                        :href="project.liveDemo"
                        target="_blank"
                        color="white"
                        variant="elevated"
                        size="small"
                        class="demo-btn"
                      >
                        <v-icon start>mdi-eye</v-icon>
                        Live Demo
                      </v-btn>
                    </div>
                  </v-img>

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
                    >
                      <v-icon start>mdi-github</v-icon>
                      Code
                    </v-btn>
                    
                    <v-btn
                      v-if="project.liveDemo"
                      :href="project.liveDemo"
                      target="_blank"
                      variant="text"
                      color="success"
                    >
                      <v-icon start>mdi-open-in-new</v-icon>
                      Demo
                    </v-btn>

                    <v-spacer />
                    
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-window-item>
      </v-window>
        <template #fallback>
          <v-tabs class="mb-10">
            <v-tab v-for="n in 2" :key="`tab-${n}`">
              <v-skeleton-loader type="text" class="mx-4 mb-2" />
            </v-tab>
          </v-tabs>
          <v-row>
            <v-col
              cols="12"
              md="6"
              lg="4"
              v-for="n in 3"
              :key="`card-${n}`"
            >
              <v-card class="h-100" elevation="2">
                <v-skeleton-loader type="image" height="200" />
                <v-card-title>
                  <v-skeleton-loader type="text" />
                </v-card-title>
                <v-card-text>
                  <v-skeleton-loader type="paragraph" />
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </ClientOnly>

      <!-- Call to Action -->
      <div class="text-center mt-12">
        <v-divider class="mb-8" />
        <h3 class="text-h5 mb-4">Ready for Your Project?</h3>
        <p class="text-body-1 text-medium-emphasis mb-6">
          Whether you need enterprise-scale systems or custom solutions, I bring the right experience
        </p>
        <v-btn 
          size="x-large" 
          color="primary" 
          variant="elevated"
          href="#contact"
          class="px-8"
        >
          <v-icon start>mdi-message</v-icon>
          Let's discuss your needs
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('corporate')

// Corporate projects (based on real experience)
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
    statusColor: 'success'
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
    statusColor: 'info'
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
    statusColor: 'info'
  }
]

// Independent projects (you can add real ones here)
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
    description: `
    A vibrant, mobile-first platform built with Nuxt 3 and Vuetify, crafted to connect Costa Rican art enthusiasts with accessible watercolor and acrylic workshops. Users can explore creative themes like Pokémon, Studio Ghibli, Botánica, and Colibríes—regardless of their skill level—from beginner-friendly to intermediate, and book their first workshop via WhatsApp. The site also features a gallery spotlighting student artwork and warmly introduces Gioconda Cerdas, a passionate instructor who has guided over 300 budding artists for more than eight years
    `,
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
        max-width: 120px;
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