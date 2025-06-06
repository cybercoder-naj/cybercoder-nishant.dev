<script setup lang="ts">
import { HEADER_REF_STRING } from './composables/useHeaderHeight';

useHead({
  title: 'Portfolio'
});

useSeoMeta({
  description:
    "I'm Nishant Aanjaney Jalan (aka cybercoder). I'm a full-stack web and android developer. Explore my experiences, my skills and my projects.",
  keywords:
    'cybercoder, Nishant Aanjaney Jalan, software engineer, web developer, android developer, full-stack developer, portfolio'
});

const { headerHeightPx } = useHeaderHeight();
</script>

<template>
  <div class="bg-background text-foreground relative h-full px-8 font-sans">
    <header
      class="bg-background sticky top-0 right-0 left-0 z-50"
      :ref="HEADER_REF_STRING">
      <NavBar class="w-full" />
    </header>

    <main class="main-container">
      <SectionSplash class="h-full" />
    </main>

    <footer></footer>
  </div>
</template>

<style scoped>
.main-container {
  @apply relative;

  height: calc(100dvh - v-bind(headerHeightPx));
}
</style>
