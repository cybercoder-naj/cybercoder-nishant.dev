<script setup lang="ts">
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import { GLTFModel } from '@tresjs/cientos';

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
  <div class="relative">
    <div class="relative z-20 flex h-full flex-col items-start justify-center">
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
    </div>

    <TresCanvas class="!absolute inset-0 z-10">
      <TresPerspectiveCamera
        :position="[5.5, 1.65, -2.2]"
        :look-at="[3, 0.5, 0]" />
      <Suspense>
        <GLTFModel path="/models/desk.glb" darco />
      </Suspense>
      <TresDirectionalLight cast-shadow :position="[3, 2, -1]" />
      <TresAmbientLight :intensity="0.4" />
    </TresCanvas>
  </div>
</template>
