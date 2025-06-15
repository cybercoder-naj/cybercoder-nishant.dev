<script setup lang="ts">
useHead({
  title: 'Portfolio'
});

useSeoMeta({
  description:
    "I'm Nishant Aanjaney Jalan (aka cybercoder). I'm a full-stack web and android developer. Explore my experiences, my skills and my projects.",
  keywords:
    'cybercoder, Nishant Aanjaney Jalan, software engineer, web developer, android developer, full-stack developer, portfolio'
});
</script>

<template>
  <div
    class="bg-background text-foreground relative px-8 font-sans md:px-16 lg:px-28 xl:px-36 2xl:px-40">
    <header
      class="bg-background fixed inset-x-8 top-0 z-50 md:inset-x-16 lg:inset-x-28 xl:inset-x-36 2xl:inset-x-40">
      <NavBar class="w-full" />
    </header>

    <main>
      <SectionIntro />
    </main>

    <footer></footer>
  </div>
</template>
