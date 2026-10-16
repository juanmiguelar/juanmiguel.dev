<template>
  <section id="faq" class="section faq-section">
    <v-container>
      <div class="section-heading">
        <h2 >{{ title }}</h2>
        <p >
          {{ description }}
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

      <div v-if="showCta" class="text-center mt-10">
        <v-btn color="primary" size="large" :href="ctaLink">
          <v-icon start>mdi-email</v-icon>
          {{ ctaText }}
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

const props = withDefaults(defineProps<{
  items: FaqItem[]
  title?: string
  description?: string
  ctaText?: string
  showCta?: boolean
  ctaLink?: string
}>(), {
  showCta: true,
  title: 'FAQ',
  description: 'Quick answers about my process, timelines, and how we can work together.',
  ctaText: 'Book a call',
  ctaLink: '#contact'
})
</script>

<style scoped>
.faq-section { background: transparent; }
:deep(.v-expansion-panel) { background: transparent; border-bottom: 1px solid rgba(var(--v-theme-on-surface), .14); }
:deep(.v-expansion-panel__shadow) { display: none; }
:deep(.v-expansion-panel-title) { padding: 24px 4px; font-size: 1rem; line-height: 1.5; }
:deep(.v-expansion-panel-text__wrapper) { padding: 0 32px 24px; line-height: 1.8; color: rgba(var(--v-theme-on-surface), .75); max-width: 80ch; }
</style>
