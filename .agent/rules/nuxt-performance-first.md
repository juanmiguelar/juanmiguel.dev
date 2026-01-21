---
trigger: always_on
---

Memoize expensive computations: Use computed(() => calculateTotal(items.value)) for synchronous logic and useLazyAsyncData() for async data fetching to prevent blocking navigation.

Stable callbacks: Define event handlers inside <script setup> (e.g., const handleDelete = (id) => { ... }) rather than inline to maintain referential equality.

List virtualization: Mandatory for lists exceeding 50 items. Use @tanstack/vue-virtual or vue-virtual-scroller. Never use v-for on datasets larger than 100 rows.

Lazy load components: Use defineAsyncComponent(() => import('./OrderDetail.vue')) or the <LazyClientOnly> wrapper for heavy UI elements that are not immediately visible.

Debounce inputs: Prevent excessive re-renders on user input by using useDebounce(searchTerm, 300) from @vueuse/core.

Image optimization: Use the @nuxt/image module. Replace standard <img> tags with <NuxtImg src="/img.jpg" sizes="sm:100vw md:50vw" /> to serve optimized formats.

Code splitting: Leverage Nuxt's auto-splitting for pages. For specific heavy features, use await import('./UserProfile.vue') inside interaction handlers.

Avoid anonymous functions in templates: Bind events directly (e.g., @click="handleClick") instead of using inline arrow functions (@click="() => handleClick()"), which create new function instances on every render.

Windowing for tables: Use <VirtualScroller :items="orders" height="400" :item-size="50"> for large tabular data.

Bundle analyzer: Run nuxi analyze regularly. Configure nuxt.config with analyze: true and aim to keep individual chunks under 100KB.

Example: Replace <ul><li v-for="item in items" :key="item.id">{{ item.name }}</li></ul> with <VirtualScroller :items="items" height="400"><template #default="{item}"><li>{{item.name}}</li></template></VirtualScroller>.