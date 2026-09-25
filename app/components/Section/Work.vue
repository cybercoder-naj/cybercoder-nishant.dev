<script lang="ts" setup>
const experiences = [
  {
    image: '/images/experience/bloomberg.webp',
    title: 'Bloomberg',
    duration: 'Starting Nov 2026',
    description: 'My upcoming full-time position as a Software Engineer working in C++.',
  },
  {
    image: '/images/experience/thetradedesk.jpg',
    title: 'The Trade Desk',
    duration: 'Mar 2025 - Sep 2025',
    description: 'My previous internship as a Software Engineer Intern working in .NET and React.'
  },
  {
    image: '/images/experience/jetbrains.png',
    title: 'JetBrains',
    duration: 'Jul 2024 - Sep 2024',
    description: 'Another internship implementing the Android Device Manager in the Fleet IDE using Kotlin.',
  },
  {
    image: '/images/experience/thetimes.jpg',
    title: 'The Times',
    duration: 'Jul 2023 - Aug 2023',
    description: 'My first internship in London working on The Times website with Next.js.',
  },
] as const as Experience[];
</script>

<template>
  <section id="experience" class="flex flex-col h-full">
    <h1 class="text-4xl lg:text-6xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white">
      Experience
    </h1>

    <div class="lg:hidden flex-1 py-12 grid grid-cols-2 gap-2">
      <div class="relative size-full" v-for="(exp, i) in experiences" :key="i">
        <img class="object-cover size-full" :src="exp.image" :alt="exp.title" />
        <div
          class="absolute inset-0 bg-linear-to-t from-black to-transparent flex flex-col items-start justify-end p-4 wrap-break-word">
          <h3 class="text-white text-lg font-bold">{{ exp.title }} </h3>
          <h4 class="text-white text-sm">{{ exp.duration }}</h4>
          <p class="text-white text-sm mt-2">{{ exp.description }}</p>
        </div>
      </div>
    </div>
    <div class="max-lg:hidden flex-1 py-12">
      <InspiraExpandableGallery :experiences="experiences" class="h-full" />
    </div>
  </section>
</template>