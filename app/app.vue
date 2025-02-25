<script setup lang="ts">
const colorMode = useColorMode();
const lightTheme = ref(false);

watch(lightTheme, () => {
  colorMode.preference = lightTheme.value ? 'light' : 'dark';
});
</script>

<template>
  <header>
    <nav class="fixed z-20">
      <!-- <MyThemeSwitcher v-model="lightTheme" /> -->
    </nav>
  </header>

  <main class="font-sora">
    <div class="relative flex px-40 h-screen overflow-hidden justify-center items-center w-full">
      <h1 class="z-10 whitespace-pre-wrap text-6xl tracking-tighter text-black dark:text-white">
        I am
        <div
          class="inline-block bg-gradient bg-clip-text text-transparent bg-gradient-to-tr from-neon-pink to-electric-blue">
          <InspiraTextHyper class="font-fira" text="The Cybercoder" />
        </div>
      </h1>

      <div class="absolute items-center bottom-20 text-white flex flex-col gap-4">
        <i class="text-2xl">More coming soon!</i>
        <Icon name="material-symbols:keyboard-double-arrow-down-rounded" class="size-16 animate-bounce" />
      </div>

      <InspiraGrid :class="[
        '[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]',
        'inset-0 h-[200%] skew-y-12'
      ]" />
    </div>
  </main>
</template>
