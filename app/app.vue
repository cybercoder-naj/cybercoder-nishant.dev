<script setup lang="ts">
const colorMode = useColorMode();
const mode = ref(true);
</script>

<template>
  <header>
    <nav class="fixed">
      <MySwitch v-model="mode" />
    </nav>
  </header>

  <main>
    <div class="relative grid h-screen place-content-center overflow-hidden">
      <p
        class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Interactive Grid Pattern
      </p>

      <InspiraGrid
        :class="[
          '[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]',
          'inset-0 h-[200%] skew-y-12'
        ]" />
    </div>
  </main>
</template>
