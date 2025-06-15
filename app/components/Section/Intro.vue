<script setup lang="ts">
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

const cybercoder = useTemplateRef<HTMLSpanElement>('cybercoder');
onMounted(() => {
  const split = SplitText.create(cybercoder.value, {
    type: 'chars'
  });

  gsap.from(split.chars, {
    duration: 0.5,
    opacity: 0,
    y: 50,
    stagger: 0.03
  });
});
</script>

<template>
  <section class="relative min-h-dvh w-full">
    <div
      class="2xs:text-4xl relative z-20 flex min-h-dvh flex-col items-start justify-center text-3xl sm:text-5xl md:text-6xl">
      <h1 class="font-semibold">Hi, I'm Nishant</h1>
      <div class="mt-2">
        <div
          class="text-primary mt-2 inline max-w-min"
          ref="cybercoder"
          role="text">
          AKA Cybercoder
        </div>
      </div>
    </div>

    <div class="min-h-dvh">
      <h3 class="2xs:text-2xl text-3xl sm:text-5xl md:text-6xl">I am a:</h3>
    </div>

    <canvas class="absolute inset-0 z-10 hidden h-full w-full"> </canvas>
  </section>
</template>
