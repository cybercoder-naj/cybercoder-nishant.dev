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
  <div class="bg-background text-foreground h-full">
    <div class="mx-auto max-w-[1440px]">
      <header>
        <NavBar />
      </header>

      <main>
        <SectionSplash />
      </main>

      <footer></footer>
    </div>
  </div>
</template>
