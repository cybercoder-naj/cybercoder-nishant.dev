<script setup lang="ts">
/*
 * HyperText from Inspira-UI
 * https://inspira-ui.com/components/text-animations/hyper-text
 *
 * Modified by: cybercoder-naj
 * Modifications:
 *   - Changed flex to inline-flex on the parent divs
 *   - Removed the padding py-2
 */

import { ref, computed, watch, type HTMLAttributes } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import { Motion } from 'motion-v';

type Props = {
  text: string;
  duration?: number;
  textClass?: HTMLAttributes['class'];
  animateOnLoad?: boolean;
};

const { textClass, text, duration = 800, animateOnLoad } = defineProps<Props>();

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const displayText = ref(text.split(''));
const iterations = ref(0);

function getRandomLetter() {
  return alphabets[Math.floor(Math.random() * alphabets.length)]!;
}
function triggerAnimation() {
  iterations.value = 0;
  startAnimation();
}

const { pause, resume } = useIntervalFn(
  () => {
    if (iterations.value < text.length) {
      displayText.value = displayText.value.map((l, i) =>
        l === ' ' ? l : i <= iterations.value ? text[i]! : getRandomLetter()
      );
      iterations.value += 0.1;
    } else {
      pause();
    }
  },
  computed(() => duration / (text.length * 10))
);

function startAnimation() {
  pause();
  resume();
}

watch(
  () => text,
  newText => {
    displayText.value = newText.split('');
    triggerAnimation();
  }
);

if (animateOnLoad) {
  triggerAnimation();
}
</script>

<template>
  <div
    :class="
      cn(
        'from-neon-pink to-electric-blue flex scale-100 cursor-default overflow-hidden bg-linear-to-tr/srgb bg-clip-text py-2',
        textClass
      )
    "
    @mouseenter="triggerAnimation">
    <div class="flex">
      <Motion
        v-for="(letter, i) in displayText"
        :key="i"
        as="span"
        :class="cn(letter === ' ' ? 'w-3' : '', 'text-transparent', textClass)"
        class="inline-block font-mono"
        :initial="{ opacity: 0, y: -10 }"
        :animate="{ opacity: 1, y: 0 }"
        :delay="i * (duration / (text.length * 10))">
        {{ letter.toUpperCase() }}
      </Motion>
    </div>
  </div>
</template>
