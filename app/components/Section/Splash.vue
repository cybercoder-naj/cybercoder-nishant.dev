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
  <div class="flex flex-col justify-center text-center">
    <h1 class="text-4xl font-semibold sm:text-5xl md:text-6xl">
      Hi, I'm Nishant
    </h1>
    <div class="mt-2">
      <div
        class="text-primary mt-2 inline max-w-min text-4xl sm:text-5xl md:text-6xl"
        ref="cybercoder"
        role="text">
        AKA Cybercoder
      </div>
    </div>

    <!--<div class="mt-20 text-lg [&>p]:my-4">
        <p>I'm a Full-stack developer, and also a Musician/Teacher.</p>
        <p>
          I take complex problems and turn them into simple and intuitive
          solutions.
        </p>
        <p>I also enjoy cycling, watching Formula 1 and go-karting.</p>
      </div>-->
  </div>
</template>
