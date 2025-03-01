<script setup lang="ts">
const { navbarHeight } = useNavbarHeight();
</script>

<template>
  <div class="bg-white dark:bg-black">
    <div
      class="sticky h-1 animate-gradient bg-gradient-to-r from-neon-pink to-electric-blue bg-[length:200%_200%]"
      :style="{ top: `${navbarHeight}px` }"></div>

    <div
      class="flex h-full flex-col items-start justify-center gap-32 px-8 pt-32 md:flex-row-reverse md:gap-48">
      <div class="relative">
        <img
          src="https://github.com/cybercoder-naj.png"
          alt="Nishant Aanjaney Jalan"
          class="size-36 rounded-full md:size-52" />

        <div
          class="image-circle size-44 border-r-2 border-electric-blue md:size-60"></div>

        <div
          class="image-circle reverse size-52 border-l-2 border-t-2 border-neon-pink md:size-72"></div>
      </div>

      <div class="max-w-[512px] text-2xl">
        <h1>Hi there! 👋🏼 My real name is Nishant Aanjaney Jalan.</h1>
        <div>
          I'm a Full-stack developer, and also a
          <InspiraTextFlipWords
            :words="['Teacher', 'Student', 'Musician']"
            :duration="3000"
            class="" />. I take complex problems and turn them into simple and
          intuitive solutions. I also enjoy cycling, watching Formula 1 and
          go-karting.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-circle {
  @apply absolute left-1/2 top-1/2 rounded-full;
  transform: translate(-50%, -50%) rotate(0deg);
  animation: my-spin 2s linear infinite;
}

.image-circle.reverse {
  animation-direction: reverse;
}

@keyframes my-spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
