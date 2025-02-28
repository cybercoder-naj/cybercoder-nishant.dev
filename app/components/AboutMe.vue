<script setup lang="ts">
const { navbarHeight } = useNavbarHeight();
</script>

<template>
  <div class="bg-white dark:bg-black">
    <div
      class="sticky h-1 animate-gradient bg-gradient-to-r from-neon-pink to-electric-blue bg-[length:200%_200%]"
      :style="{ top: `${navbarHeight}px` }"></div>

    <div class="flex items-center justify-center">
      <i class="text-lg md:text-2xl">More coming soon!</i>
    </div>
  </div>
</template>
