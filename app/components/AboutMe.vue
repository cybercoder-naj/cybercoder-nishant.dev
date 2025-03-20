<script setup lang="ts">
const { navbarHeight } = useNavbarHeight();
</script>

<template>
  <div class="bg-white dark:bg-black">
    <div
      class="animate-gradient from-neon-pink to-electric-blue sticky h-1 bg-linear-to-r/srgb bg-[length:200%_200%]"
      :style="{ top: `${navbarHeight}px` }"></div>

    <div
      class="flex h-full flex-col items-start justify-center gap-32 px-8 pt-32 md:flex-row-reverse md:gap-48">
      <div class="relative">
        <img
          src="https://github.com/cybercoder-naj.png"
          alt="Nishant Aanjaney Jalan"
          class="size-36 rounded-full md:size-52" />

        <div
          class="image-circle border-electric-blue size-44 border-r-2 md:size-60"></div>

        <div
          class="image-circle reverse border-neon-pink size-52 border-t-2 border-l-2 md:size-72"></div>
      </div>

      <div class="max-w-[512px] text-2xl">
        <h1 class="inline">
          Hi there! 👋🏼 My real name is
          <strong
            class="from-neon-pink to-electric-blue bg-linear-to-tr/srgb bg-clip-text text-transparent"
            >Nishant Aanjaney Jalan</strong
          >.
        </h1>
        <div class="inline">
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
  @apply absolute top-1/2 left-1/2 rounded-full;
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
