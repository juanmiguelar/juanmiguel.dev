<template>
  <section id="contact" class="contact-section">
    <v-container>
      <div class="text-center">
        <h2 class="text-h3 font-weight-bold mb-4">{{ $t('home.contact.title') }}</h2>
        <p class="text-h6 text-medium-emphasis mb-8 mx-auto" style="max-width: 600px" v-html="$t('home.contact.description')">
        </p>
        
        <!-- Main CTA Button -->
        <v-btn
          :href="mailtoLink"
          size="x-large"
          color="primary"
          variant="elevated"
          class="mb-8 px-8 py-4"
          style="text-transform: none; font-size: 1.1rem;"
          @click="trackEmail"
        >
          <v-icon start>mdi-email-outline</v-icon>
          {{ $t('home.contact.cta') }}
        </v-btn>
        
        <!-- Alternative Contact Methods -->
        <div class="contact-links">
          <v-btn
            href="https://www.linkedin.com/in/juan-miguel-arias/"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="large"
            class="mx-2 mb-2"
            style="text-transform: none;"
            @click="trackSocial('linkedin')"
          >
            <v-icon start>mdi-linkedin</v-icon>
            LinkedIn
          </v-btn>
          
          <v-btn
            href="https://github.com/juanmiguelar"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="large"
            class="mx-2 mb-2"
            style="text-transform: none;"
            @click="trackSocial('github')"
          >
            <v-icon start>mdi-github</v-icon>
            GitHub
          </v-btn>
        </div>
        
        <!-- Availability Status -->
        <div class="availability-status mt-8">
          <v-chip
            color="primary"
            variant="flat"
            size="large"
            class="mb-2"
          >
            <v-icon start>mdi-clock-outline</v-icon>
            {{ $t('home.contact.status.label') }}
          </v-chip>
          <p class="text-body-2 text-medium-emphasis">
            {{ $t('home.contact.status.text') }}
          </p>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const mailtoLink = 'mailto:juanmiguelar09@gmail.com?subject=Platform Engineering Inquiry&body=Hi Juan Miguel,%0D%0A%0D%0AI\'d like to discuss platform engineering consulting with you.%0D%0A%0D%0APlatform details:%0D%0A%0D%0ABest regards,'

const pixel = usePixel()

const trackEmail = () => {
  pixel.track('Contact', {
    type: 'email'
  })
}

const trackSocial = (platform: string) => {
  pixel.trackCustom('SocialClick', {
    platform: platform
  })
}
</script>

<style scoped>
.contact-section { padding-block: 72px; border-top: 1px solid rgba(var(--v-theme-on-surface), .14); background: rgb(var(--v-theme-surface-variant)); }
.contact-links { display: flex; justify-content: center; flex-wrap: wrap; gap: 8px; }
.availability-status .v-chip { font-weight: 500; }
@media (max-width: 600px) { .contact-section { padding-block: 48px; } }
</style>
