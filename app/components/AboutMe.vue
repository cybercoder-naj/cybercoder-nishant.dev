<script setup lang="ts">
import skills from '~/assets/data/skills';

const { navbarHeight } = useNavbarHeight();
</script>

<template>
  <div class="bg-white dark:bg-black">
    <div
      class="animate-gradient from-neon-pink to-electric-blue sticky h-1 bg-linear-to-r/srgb bg-[length:200%_200%]"
      :style="{ top: `${navbarHeight}px` }"></div>

    <div class="h-full pt-32">
      <div
        class="mx-auto flex max-w-4xl flex-col items-center justify-between gap-24 px-8 md:flex-row-reverse md:gap-0">
        <div class="relative">
          <img
            src="https://github.com/cybercoder-naj.png"
            alt="Nishant Aanjaney Jalan"
            class="aspect-square h-48 rounded-full" />

          <div
            class="image-circle border-electric-blue size-56 border-r-2"></div>

          <div
            class="image-circle reverse border-neon-pink size-64 border-t-2 border-l-2"></div>
        </div>

        <div class="max-w-lg text-2xl">
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

      <div
        class="mx-auto mt-10 grid max-w-lg grid-cols-2 gap-4 px-8 md:mt-16 md:max-w-4xl md:grid-cols-4 md:gap-6">
        <InspiraNeonBorder
          animation-type="full"
          v-for="skill in skills"
          :key="skill.name">
          <div
            class="flex size-full items-center justify-center gap-5 rounded-lg bg-white text-sm dark:bg-black">
            <Icon :name="skill.icon" class="size-6" />
            <span class="font-mono font-bold">{{ skill.name }}</span>
          </div>
        </InspiraNeonBorder>
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
