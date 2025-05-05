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
    class="bg-primary-50 dark:bg-primary-950 text-primary-800 dark:text-primary-500">
    <div class="mx-auto max-w-[1440px]">
      <header>
        <Navbar />
      </header>

      <main></main>

      <footer></footer>
    </div>
  </div>
</template>
