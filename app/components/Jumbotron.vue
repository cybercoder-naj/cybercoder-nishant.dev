<script setup lang="ts">
const { navbarHeight } = useNavbarHeight();
</script>

<template>
  <div
    class="relative flex items-center justify-center overflow-hidden px-40"
    :style="{ top: `${navbarHeight}px` }">
    <h2 class="z-10 text-4xl tracking-tighter whitespace-pre-wrap sm:text-6xl">
      I am
      <div class="inline-block min-w-max">
        <InspiraTextHyper text="The Cybercoder" class="max-md:hidden" />
        <span class="text-transparent uppercase md:hidden">The Cybercoder</span>
      </div>
    </h2>

    <div class="absolute bottom-20 flex flex-col items-center gap-4">
      <a href="#about" class="animate-bounce" aria-label="Scroll down">
        <Icon
          name="material-symbols:keyboard-double-arrow-down-rounded"
          class="size-12" />
      </a>
    </div>

    <InspiraGrid
      :class="[
        '[mask-image:radial-gradient(320px_circle_at_center,white,transparent)]',
        'skew-y-12'
      ]" />
  </div>
</template>
