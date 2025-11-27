<template>
  <section id="faq" class="section faq-section">
    <v-container>
      <div class="text-center mb-8">
        <h2 class="text-h4 text-md-h3 font-weight-bold mb-3">FAQ</h2>
        <p class="text-body-1 text-medium-emphasis">
          Quick answers about my process, timelines, and how we can work together.
        </p>
      </div>

      <v-expansion-panels multiple variant="accordion">
        <v-expansion-panel
          v-for="item in items"
          :key="item.question"
        >
          <v-expansion-panel-title>
            <v-icon start color="primary">mdi-help-circle</v-icon>
            {{ item.question }}
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            {{ item.answer }}
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>

      <div class="text-center mt-10">
        <v-btn color="primary" size="large" href="#contact">
          <v-icon start>mdi-email</v-icon>
          Book a call
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
}

defineProps<{
  items: FaqItem[]
}>()
</script>

<style scoped lang="scss">
.faq-section {
  background: linear-gradient(135deg, rgba(25, 118, 210, 0.02) 0%, rgba(25, 118, 210, 0.08) 100%);
  padding: 80px 0;
}

@media (max-width: 768px) {
  .faq-section {
    padding: 60px 0;
  }
}
</style>
