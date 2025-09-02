<template>
  <header class="bg-white dark:bg-gray-900 shadow">
    <UContainer class="flex items-center justify-between py-4">
      <h1 class="text-lg font-bold">Juan Miguel Arias Mejias</h1>
      <nav class="hidden md:flex items-center gap-2">
        <UButton v-for="link in links" :key="link.href" :href="link.href" variant="ghost" class="mx-1">{{ link.label }}</UButton>
        <UButton variant="ghost" class="ml-2" @click="toggleTheme" aria-label="Toggle theme">
          <UIcon :name="colorMode.preference === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'" />
        </UButton>
      </nav>
      <UButton class="md:hidden" variant="ghost" @click="drawer = true" aria-label="Open navigation">
        <UIcon name="i-heroicons-bars-3" />
      </UButton>
    </UContainer>
    <USlideover v-model="drawer" side="left">
      <div class="p-4 space-y-2">
        <UButton v-for="link in links" :key="link.href" :href="link.href" block variant="ghost" @click="drawer = false">{{ link.label }}</UButton>
        <UButton block variant="ghost" @click="toggleTheme">
          <UIcon :name="colorMode.preference === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'" class="mr-2" />
          Toggle theme
        </UButton>
      </div>
    </USlideover>
  </header>
</template>

<script setup lang="ts">
const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

const drawer = ref(false)
const colorMode = useColorMode()
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>
