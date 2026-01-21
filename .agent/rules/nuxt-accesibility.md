---
trigger: always_on
---

Semantic Structure: Use semantic landmarks (<main>, <nav>, <aside>, <footer>) instead of generic <div> wrappers. Ensure strictly sequential heading levels (h1 → h2 → h3) with exactly one <h1> per page.

Focus Management: Ensure visible focus indicators (:focus-visible) for all interactive elements. Use await nextTick(() => element.focus()) when opening modals/drawers and trap focus using @vueuse/components (UseFocusTrap).

ARIA & State: Bind ARIA states dynamically: :aria-expanded="isOpen" for accordions/menus and :aria-pressed="isActive" for toggle buttons. Use aria-current="page" for active navigation links.

Route Announcements: Update document titles on navigation using useHead({ title: 'Page Name - Site' }) so screen readers announce the context switch immediately.

Forms & Labels: Explicitly link labels to inputs using :for="id" and :id="id". Associate error messages using aria-describedby="error-id" on the input and id="error-id" on the error text.

Image Alt Text: Mandatory alt prop on <NuxtImg> and <img>. Use descriptive text for functional images and alt="" (empty string) for purely decorative visuals.

Keyboard Interaction: Avoid click events on non-interactive elements. Replace <div @click="..."> with <button type="button">. If unavoidable, add tabindex="0" and @keydown.enter="handler".

Motion Sensitivity: Respect user motion preferences. Use CSS @media (prefers-reduced-motion) or conditionally disable JS animations if matchMedia('(prefers-reduced-motion: reduce)').matches.

Color Contrast: Ensure text meets WCAG AA standards (4.5:1 ratio). Do not rely on color alone to convey state (e.g., use icons or text labels alongside color changes for errors).

Automated Testing: Integrate eslint-plugin-vuejs-accessibility and use the "Axe" browser extension for auditing.

Example: Replace <div class="btn" @click="submit">Submit</div> with <button type="button" class="btn" @click="submit" :aria-disabled="isLoading"> <span v-if="isLoading">Loading...</span> <span v-else>Submit</span> </button>.