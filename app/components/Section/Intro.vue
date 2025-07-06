<script setup lang="ts">
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

const cybercoder = useTemplateRef<HTMLSpanElement>('cybercoder');
const description = useTemplateRef<HTMLSpanElement>('description');

onMounted(() => {
  const tl = gsap.timeline();

  const split = SplitText.create(cybercoder.value, {
    type: 'chars'
  });

  tl.from(split.chars, {
    duration: 0.5,
    opacity: 0,
    y: 50,
    stagger: 0.03
  });

  tl.from(
    description.value,
    {
      duration: 0.5,
      opacity: 0,
      y: 25
    },
    '-=0.4'
  );
});
</script>

<template>
  <section class="relative min-h-dvh w-full">
    <div
      class="relative z-20 flex min-h-dvh w-1/2 flex-col items-start justify-center">
      <h1 class="heading-1 font-semibold">Hi, I'm Nishant</h1>
      <div class="heading-1">
        <div
          class="text-primary mt-2 inline max-w-min"
          ref="cybercoder"
          role="text">
          AKA Cybercoder
        </div>
      </div>
      <p class="heading-6 mt-8" ref="description">
        I'm a Developer, Student, Musician and Teacher. I also enjoy cycling,
        motorsport racing and coffee.
      </p>
    </div>

    <canvas class="absolute inset-0 z-10 hidden h-full w-full"> </canvas>
  </section>
</template>
