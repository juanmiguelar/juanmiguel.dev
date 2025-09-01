<template>
  <section id="recomendations" class="section">
    <v-container>
      <h2 class="text-h4 text-center mb-8">Recomendations</h2>
      <v-row>
        <v-col cols="12" md="6" v-for="t in recomendations" :key="t.name">
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
const recomendations: Testimonial[] = [
  { name: 'Lenin Chacon', quote: `
  Working with Juan Miguel has been an exceptional experience. His charisma, collaborative spirit, and deep technical expertise made him an invaluable part of our team. He consistently brought clarity and insight to complex challenges, and his ability to connect with others created a positive and motivating environment for everyone around him.

What truly sets Juan Miguel apart is that he contributes not only as a skilled professional but also as a genuinely great person. His presence elevates the team both technically and personally—something that is rare and deeply appreciated. Having him on the team was a tremendous asset, and I would welcome any opportunity to work with him again.
  `, avatar: '/img/lenin.jpeg' },
  { name: 'Kenneth Sanabria', quote: `
  Juan is an exceptional team player who consistently showcases his high level of expertise by implementing best practices in code, conducting thorough and effective code reviews, and offering valuable feedback to his teammates. He excels in teamwork and mentorship, always ready to share his knowledge and contribute to the team's success.

His expertise in Golang is a cornerstone for the team, serving as a reference for decision-making. We always appreciate having a colleague like Juan in the workplace.
  `, avatar: '/img/ken.jpeg' }
]
</script>
