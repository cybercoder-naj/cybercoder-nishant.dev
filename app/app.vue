<script setup lang="ts">
useHead({
  title: 'Portfolio'
});

useSeoMeta({
  description:
    "I'm Nishant Aanjaney Jalan (aka cybercoder). I'm a C++, full-stack web and android developer. Explore my experiences, my skills and my projects.",
  keywords:
    'cybercoder, Nishant Aanjaney Jalan, software engineer, C++, web developer, android developer, full-stack developer, portfolio'
});

const scrollContainer = useTemplateRef<HTMLDivElement>('scroll-container');
provide('scrollContainer', scrollContainer);

const header = useTemplateRef<HTMLElement>('header');
const headerHeight = ref(0);
onMounted(() => {
  headerHeight.value = header.value?.offsetHeight ?? 0;
});
</script>

<template>
  <div
    class="bg-background text-foreground relative h-full overflow-y-scroll px-8 font-sans md:px-16 lg:px-28 xl:px-36 2xl:px-40"
    ref="scroll-container">
    <header class="bg-background fixed inset-x-8 top-0 z-50 md:inset-x-16 lg:inset-x-28 xl:inset-x-36 2xl:inset-x-40"
      ref="header">
      <NavBar class="w-full" />
    </header>

    <main class="h-dvh">
      <SectionHome class="h-screen w-full" />
      <SectionWork class="h-screen w-full" :style="{ 'padding-top': `${headerHeight}px` }" />
    </main>

    <footer></footer>
  </div>
</template>
