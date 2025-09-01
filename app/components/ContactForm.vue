<template>
  <section id="contact" class="contact-section">
    <v-container>
      <div class="text-center">
        <h2 class="text-h3 font-weight-bold mb-4">Let's work together</h2>
        <p class="text-h6 text-medium-emphasis mb-8 mx-auto" style="max-width: 600px">
          Ready to bring your ideas to life? I'm currently available for small website projects and would love to discuss how we can collaborate.
        </p>
        
        <!-- Main CTA Button -->
        <v-btn
          :href="mailtoLink"
          size="x-large"
          color="primary"
          variant="elevated"
          class="mb-8 px-8 py-4"
          style="text-transform: none; font-size: 1.1rem;"
        >
          <v-icon start>mdi-email-outline</v-icon>
          Get in touch
        </v-btn>
        
        <!-- Alternative Contact Methods -->
        <div class="contact-links">
          <v-btn
            href="https://www.linkedin.com/in/juan-miguel-arias/"
            target="_blank"
            variant="outlined"
            size="large"
            class="mx-2 mb-2"
            style="text-transform: none;"
          >
            <v-icon start>mdi-linkedin</v-icon>
            LinkedIn
          </v-btn>
          
          <v-btn
            href="https://github.com/juanmiguelarias"
            target="_blank"
            variant="outlined"
            size="large"
            class="mx-2 mb-2"
            style="text-transform: none;"
          >
            <v-icon start>mdi-github</v-icon>
            GitHub
          </v-btn>
        </div>
        
        <!-- Availability Status -->
        <div class="availability-status mt-8">
          <v-chip
            color="success"
            variant="flat"
            size="large"
            class="mb-2"
          >
            <v-icon start>mdi-check-circle</v-icon>
            Available for new projects
          </v-chip>
          <p class="text-body-2 text-medium-emphasis">
            I typically respond within 24 hours
          </p>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const mailtoLink = 'mailto:contact@juanmiguelarias.dev?subject=Project Inquiry&body=Hi Juan Miguel,%0D%0A%0D%0AI\'d like to discuss a potential project with you.%0D%0A%0D%0AProject details:%0D%0A%0D%0ABest regards,'
</script>

<style scoped lang="scss">
.contact-section {
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(25, 118, 210, 0.1) 100%);
  
  .contact-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .availability-status {
    .v-chip {
      font-weight: 500;
    }
  }
}

// Dark mode adjustments
.v-theme--dark .contact-section {
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.08) 0%, rgba(33, 150, 243, 0.15) 100%);
}

@media (max-width: 768px) {
  .contact-section {
    padding: 60px 0;
    
    .contact-links {
      flex-direction: column;
      align-items: center;
      
      .v-btn {
        width: 200px;
      }
    }
  }
}
</style>