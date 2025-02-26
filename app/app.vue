<script setup lang="ts">
const colorMode = useColorMode();
const lightTheme = ref(false);

watch(lightTheme, () => {
  colorMode.preference = lightTheme.value ? 'light' : 'dark';
});

useHead({
  title: 'Portfolio',
});
</script>

<template>
  <header>
    <nav class="fixed z-20">
      <!-- <MyThemeSwitcher v-model="lightTheme" /> -->
    </nav>
  </header>

  <main class="font-sora text-black dark:text-white">
    <div class="relative flex h-screen w-full items-center justify-center overflow-hidden px-40">
      <h2 class="z-10 whitespace-pre-wrap text-4xl tracking-tighter sm:text-6xl">
        I am
        <div
          class="bg-gradient inline-block bg-gradient-to-tr from-neon-pink to-electric-blue bg-clip-text text-transparent">
          <InspiraTextHyper class="font-fira" text="The Cybercoder" />
        </div>
      </h2>

      <div class="absolute bottom-20 flex flex-col items-center gap-4">
        <i class="text-lg md:text-2xl">More coming soon!</i>
        <!-- <Icon name="material-symbols:keyboard-double-arrow-down-rounded" class="size-12 animate-bounce" /> -->
      </div>

      <InspiraGrid :class="[
        '[mask-image:radial-gradient(320px_circle_at_center,white,transparent)]',
        'skew-y-12'
      ]" />
    </div>
  </main>
</template>
