<template>
  <section id="tech" class="section">
    <v-container>
      <h2 class="text-h4 text-center mb-8">Tech Stack</h2>
      <v-row class="justify-center">
        <v-col cols="4" sm="2" v-for="tech in techs" :key="tech" class="text-center">
          <NuxtImg :src="tech" :alt="tech" height="80" />
        </v-col>
      </v-row>
    </v-container>
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
