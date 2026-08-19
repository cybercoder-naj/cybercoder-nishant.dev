<script setup lang="ts">
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

const cybercoder = useTemplateRef<HTMLSpanElement>('cybercoder');
onMounted(() => {
  const split = SplitText.create(cybercoder.value, {
    type: 'chars',
    tag: 'span'
  });

  split.chars.forEach((char) => {
    char.setAttribute('role', 'presentation');
  });

  gsap.from(split.chars, {
    duration: 0.5,
    opacity: 0,
    y: 50,
    stagger: 0.03,
  });
});
</script>

<template>
  <section id="" class="relative grid place-content-center overflow-hidden">
    <h1
      class="z-10 text-center text-4xl lg:text-6xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white">
      I'm <span ref="cybercoder" class="font-bold text-primary" role="text">Nishant</span>, The Cybercoder.
    </h1>

    <h2 class="z-10 whitespace-pre-wrap mx-auto text-3xl lg:text-5xl mt-2 lg:mt-4 ">
      <span>I am a </span>
      <InspiraTypewriter :text="['Developer', 'Teacher', 'Racer', 'Musician']" class="text-pretty text-secondary" />
    </h2>

    <InspiraGridPattern
      class="absolute inset-0 h-[200%] skew-y-12 mask-[radial-gradient(350px_circle_at_center,white,transparent)]"
      :width="40" :height="40" :squares="[32, 32]" />

    <div class="max-md:hidden absolute bottom-8 w-full grid place-items-center">
      <Icon name="material-symbols:mouse-outline" class="text-foreground-secondary size-8 animate-bounce" />
    </div>
  </section>
</template>
