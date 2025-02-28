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

const { remainingHeight } = useNavbarHeight();
</script>

<template>
  <header class="font-sora text-black dark:text-white">
    <nav class="fixed z-20 w-full bg-white dark:bg-black" ref="navbar">
      <Navbar class="mx-28 my-4" />
    </nav>
  </header>

  <main class="font-sora text-black dark:text-white">
    <div class="relative">
      <Jumbotron id="" class="sticky h-screen w-full" />
      <AboutMe
        id="about"
        class="relative z-10 w-full"
        :style="{ height: remainingHeight }" />
    </div>
  </main>
</template>
