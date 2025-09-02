<template>
  <section id="contact" class="py-20 bg-gradient-to-br from-blue-100/50 to-blue-200/50 dark:from-blue-900/20 dark:to-blue-800/20">
    <UContainer>
      <div class="text-center">
        <h2 class="mb-4 text-3xl font-bold">Let's work together</h2>
        <p class="mx-auto mb-8 max-w-xl text-lg text-gray-600 dark:text-gray-300">
          Ready to bring your ideas to life? I'm currently available for small website projects and would love to discuss how we can collaborate.
        </p>
        <UButton :href="mailtoLink" size="lg" color="primary" class="mb-8 px-8 py-4">
          <UIcon name="i-heroicons-envelope" class="mr-2" />Get in touch
        </UButton>
        <div class="flex flex-wrap justify-center gap-2">
          <UButton href="https://www.linkedin.com/in/juan-miguel-arias/" target="_blank" variant="outline">
            <UIcon name="i-simple-icons-linkedin" class="mr-2" />LinkedIn
          </UButton>
          <UButton href="https://github.com/juanmiguelar" target="_blank" variant="outline">
            <UIcon name="i-simple-icons-github" class="mr-2" />GitHub
          </UButton>
        </div>
        <div class="mt-8">
          <UBadge color="green" variant="soft" size="lg" class="mb-2">
            <UIcon name="i-heroicons-check-circle" class="mr-1" />Available for new projects
          </UBadge>
          <p class="text-sm text-gray-600 dark:text-gray-400">I typically respond within 24 hours</p>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const mailtoLink = 'mailto:contact@juanmiguelarias.dev?subject=Project Inquiry&body=Hi Juan Miguel,%0D%0A%0D%0AI\'d like to discuss a potential project with you.%0D%0A%0D%0AProject details:%0D%0A%0D%0ABest regards,'
</script>
