<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  title: "Juan Miguel - Full-Stack Developer Portfolio",
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
    { rel: 'manifest', href: '/favicon/site.webmanifest' }
  ],
  meta: [
    { name: 'msapplication-TileColor', content: '#da532c' },
    { name: 'theme-color', content: '#ffffff' },
    { name: 'description', content: 'Experienced developer specializing in Vue, Nuxt, and Golang.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': 'https://juanmiguel.dev#website',
            url: 'https://juanmiguel.dev',
            name: 'Juan Miguel Arias Mejias - Full-stack Developer',
            inLanguage: 'en',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://juanmiguel.dev/?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          },
          {
            '@type': 'Person',
            '@id': 'https://juanmiguel.dev#person',
            name: 'Juan Miguel Arias Mejias',
            url: 'https://juanmiguel.dev',
            image: 'https://juanmiguel.dev/img/juanmiguel.jpeg',
            jobTitle: 'Full-stack Developer',
            sameAs: [
              'https://www.linkedin.com/in/juan-miguel-arias/',
              'https://github.com/juanmiguelar'
            ],
            worksFor: {
              '@type': 'Organization',
              name: 'Freelance'
            }
          }
        ]
      })
    }
  ]
})
</script>
