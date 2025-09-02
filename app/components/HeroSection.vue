<template>
  <section id="hero" class="py-20">
    <UContainer>
      <div class="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h1 class="text-3xl md:text-4xl font-bold">Full-stack solutions in Go &amp; Nuxt</h1>
          <p class="mt-4 text-lg">I build performant applications that drive business value.</p>
          <UButton color="primary" class="mt-6" href="#contact" aria-label="Contact">Let's work together</UButton>
        </div>
        <div class="text-center">
          <NuxtImg src="/img/juanmiguel.jpeg" alt="Profile image" width="300" height="300" class="mx-auto rounded-full" />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts"></script>
