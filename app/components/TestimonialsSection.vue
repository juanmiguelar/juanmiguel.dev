<template>
  <section id="testimonials" class="section">
    <v-container>
      <h2 class="text-h4 text-center mb-8">Testimonials</h2>
      <v-row>
        <v-col cols="12" md="6" v-for="t in testimonials" :key="t.name">
          <v-card class="pa-4 mb-4">
            <v-row>
              <v-col cols="3">
                <v-avatar size="64">
                  <v-img :src="t.avatar" :alt="t.name" />
                </v-avatar>
              </v-col>
              <v-col cols="9">
                <p class="mb-2">"{{ t.quote }}"</p>
                <strong>{{ t.name }}</strong>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script setup lang="ts">
interface Testimonial { name: string; quote: string; avatar: string }
const testimonials: Testimonial[] = [
  { name: 'Alice Johnson', quote: 'Juan delivered exactly what we needed on time.', avatar: 'https://placehold.co/100x100' },
  { name: 'Bob Smith', quote: 'Professional and highly skilled developer.', avatar: 'https://placehold.co/100x100' }
]
</script>
