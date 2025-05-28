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
  <div class="flex h-screen items-center justify-between lg:px-24">
    <div>
      <h1 class="text-6xl font-semibold md:text-7xl">
        Hi, I'm Nishant
        <div class="mt-2">
          <span class="text-primary max-w-min" ref="cybercoder">
            AKA <br />
            Cybercoder
          </span>
        </div>
      </h1>

      <div class="mt-20 text-lg [&>p]:my-4">
        <p>I'm a Full-stack developer, and also a Musician/Teacher.</p>
        <p>
          I take complex problems and turn them into simple and intuitive
          solutions.
        </p>
        <p>I also enjoy cycling, watching Formula 1 and go-karting.</p>
      </div>
    </div>
  </div>
</template>
