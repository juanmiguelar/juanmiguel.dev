<template>
  <section id="recomendations" class="py-20">
    <UContainer>
      <h2 class="mb-8 text-center text-4xl font-semibold">Recommendations</h2>
      <ClientOnly>
        <div class="grid gap-6 md:grid-cols-2">
          <UCard v-for="testimonial in recomendations" :key="testimonial.name" class="p-6">
            <div class="flex items-center mb-4">
              <UAvatar :src="testimonial.avatar" size="72" class="mr-4" />
              <div>
                <h4 class="text-lg font-semibold">{{ testimonial.name }}</h4>
                <span class="text-sm text-gray-500">Colleague</span>
              </div>
            </div>
            <blockquote class="italic leading-relaxed">"{{ testimonial.quote.trim() }}"</blockquote>
          </UCard>
        </div>
        <template #fallback>
          <div class="grid gap-6 md:grid-cols-2">
            <UCard v-for="n in 2" :key="n" class="p-6">
              <div class="flex items-center mb-4">
                <USkeleton class="w-18 h-18 mr-4 rounded-full" />
                <div class="flex-1 space-y-2">
                  <USkeleton class="h-4 w-3/4" />
                  <USkeleton class="h-3 w-1/2" />
                </div>
              </div>
              <USkeleton class="h-20 w-full" />
            </UCard>
          </div>
        </template>
      </ClientOnly>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface Testimonial { name: string; quote: string; avatar: string }
const recomendations: Testimonial[] = [
  {
    name: 'Lenin Chacon',
    quote: `Working with Juan Miguel has been an exceptional experience. His charisma, collaborative spirit, and deep technical expertise made him an invaluable part of our team. He consistently brought clarity and insight to complex challenges, and his ability to connect with others created a positive and motivating environment for everyone around him.

What truly sets Juan Miguel apart is that he contributes not only as a skilled professional but also as a genuinely great person. His presence elevates the team both technically and personally—something that is rare and deeply appreciated. Having him on the team was a tremendous asset, and I would welcome any opportunity to work with him again.`,
    avatar: '/img/lenin.jpeg'
  },
  {
    name: 'Kenneth Sanabria',
    quote: `Juan is an exceptional team player who consistently showcases his high level of expertise by implementing best practices in code, conducting thorough and effective code reviews, and offering valuable feedback to his teammates. He excels in teamwork and mentorship, always ready to share his knowledge and contribute to the team's success.

His expertise in Golang is a cornerstone for the team, serving as a reference for decision-making. We always appreciate having a colleague like Juan in the workplace.`,
    avatar: '/img/ken.jpeg'
  }
]
</script>
