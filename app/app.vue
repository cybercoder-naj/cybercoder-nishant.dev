<script setup lang="ts">
const colorMode = useColorMode();
const lightTheme = ref(false);

watch(lightTheme, () => {
  colorMode.preference = lightTheme.value ? 'light' : 'dark';
});

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
  <header>
    <nav class="fixed z-20">
      <!-- <MyThemeSwitcher v-model="lightTheme" /> -->
    </nav>
  </header>

  <main class="font-sora text-black dark:text-white">
    <Jumbotron class="h-screen w-full" />
  </main>
</template>
