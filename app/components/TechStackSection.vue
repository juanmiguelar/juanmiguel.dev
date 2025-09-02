<template>
  <section id="tech" class="section">
    <UContainer>
      <h2 class="text-4xl text-center mb-8">Tech Stack</h2>
      <div class="grid grid-cols-4 sm:grid-cols-6 gap-4 justify-items-center">
        <NuxtImg v-for="tech in techs" :key="tech" :src="tech" :alt="tech" height="80" />
      </div>
    </UContainer>
  </section>
</template>
<script setup lang="ts">
const techs = [
'/img/postgre.png',
'/img/gologo.png', 
'/img/vue.png', 
'/img/nuxt.svg', 
'/img/docker.png', 
'/img/k8s.png', 
'/img/aws.png'
]
</script>
