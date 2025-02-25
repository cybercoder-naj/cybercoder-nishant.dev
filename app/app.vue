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

  <main>
    <div class="relative flex px-40 h-screen overflow-hidden justify-center items-center w-full">
      <h1 class="z-10 whitespace-pre-wrap text-5xl font-medium  tracking-tighter text-black dark:text-white">
        I am
        <InspiraTextHyper text="The Cybercoder" />
      </h1>

      <Icon name="material-symbols:keyboard-double-arrow-down-rounded"
        class="text-white absolute bottom-20 size-16 animate-bounce" />

      <InspiraGrid :class="[
        '[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]',
        'inset-0 h-[200%] skew-y-12'
      ]" />
    </div>
  </main>
</template>
