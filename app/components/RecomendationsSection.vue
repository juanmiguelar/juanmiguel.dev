<template>
  <section id="recomendations" class="section">
    <v-container>
      <h2 class="text-h4 text-center mb-8">{{ $t('home.recommendations.title') }}</h2>
      
      <!-- SSR Safe version -->
      <LazyClientOnly>
        <v-row>
          <v-col 
            cols="12" 
            md="6" 
            v-for="testimonial in recomendations" 
            :key="testimonial.name"
          >
            <v-card 
              class="testimonial-card pa-6 mb-4" 
              elevation="3"
              :class="{ 'loaded': isLoaded }"
            >
              <div class="testimonial-header d-flex align-center mb-4">
                <v-avatar size="72" class="me-4">
                  <NuxtImg 
                    :src="testimonial.avatar" 
                    :alt="`${testimonial.name} portrait`"
                    width="72"
                    height="72"
                    format="webp"
                    sizes="72px"
                    class="avatar-img"
                    loading="lazy"
                  />
                </v-avatar>
                <div>
                  <h4 class="testimonial-author mb-1">{{ testimonial.name }}</h4>
                  <div class="testimonial-role text-medium-emphasis">{{ $t('home.recommendations.role') }}</div>
                </div>
              </div>
              <blockquote class="testimonial-quote">
                "{{ testimonial.quote.trim() }}"
              </blockquote>
            </v-card>
          </v-col>
        </v-row>
        
        <template #fallback>
          <!-- Skeleton loader que coincide con el layout final -->
          <v-row>
            <v-col cols="12" md="6" v-for="n in 2" :key="`skeleton-${n}`">
              <v-card class="testimonial-card pa-6 mb-4" elevation="1">
                <div class="testimonial-header d-flex align-center mb-4">
                  <v-skeleton-loader
                    type="avatar"
                    class="me-4"
                  ></v-skeleton-loader>
                  <div>
                    <v-skeleton-loader
                      type="heading"
                      class="mb-2"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                      type="text"
                      width="80px"
                    ></v-skeleton-loader>
                  </div>
                </div>
                <v-skeleton-loader
                  type="paragraph"
                  :loading="true"
                ></v-skeleton-loader>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </LazyClientOnly>
    </v-container>
  </section>
</template>

<script setup lang="ts">
interface Testimonial { 
  name: string
  quote: string
  avatar: string 
}

// Reactive flag para animaciones
const isLoaded = ref(false)
const { t } = useI18n()

const recomendations = computed<Testimonial[]>(() => [
  { 
    name: 'Lenin Chacon', 
    quote: t('home.recommendations.items.lenin.quote'), 
    avatar: '/img/lenin.jpeg' 
  },
  { 
    name: 'Kenneth Sanabria', 
    quote: t('home.recommendations.items.kenneth.quote'), 
    avatar: '/img/ken.jpeg' 
  }
])

// Marcar como loaded después del mount
onMounted(() => {
  nextTick(() => {
    isLoaded.value = true
  })
})
</script>

<style scoped>
.section {
  padding: 4rem 0;
}

.testimonial-card {
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  border-radius: 12px;
  opacity: 0.8;
}

.testimonial-card.loaded {
  opacity: 1;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
}

.testimonial-header {
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.1);
  padding-bottom: 1rem;
  margin-bottom: 1.5rem !important;
}

.testimonial-quote {
  font-style: italic;
  line-height: 1.7;
  color: rgb(var(--v-theme-on-surface));
  font-size: 1rem;
  position: relative;
  padding-left: 1.5rem;
  border-left: 4px solid rgb(var(--v-theme-primary));
}

.testimonial-author {
  color: rgb(var(--v-theme-on-surface));
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem !important;
}

.testimonial-role {
  font-size: 0.875rem;
  opacity: 0.7;
}

/* Utility classes */
.d-flex {
  display: flex;
}

.align-center {
  align-items: center;
}

.me-4 {
  margin-right: 1rem;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

@media (max-width: 960px) {
  .testimonial-card {
    margin-bottom: 2rem;
  }
  
  .testimonial-header {
    flex-direction: column;
    text-align: center;
  }
  
  .me-4 {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>
