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

import { ref, computed, watch } from "vue";
import { useIntervalFn } from "@vueuse/core";
import { Motion } from "motion-v";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 0.8,
  },
  class: {
    type: String,
    default: "",
  },
  animateOnLoad: {
    type: Boolean,
    default: true,
  },
});

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const displayText = ref(props.text.split(""));
const iterations = ref(0);

function getRandomLetter() {
  return alphabets[Math.floor(Math.random() * alphabets.length)];
}
function triggerAnimation() {
  iterations.value = 0;
  startAnimation();
}

const { pause, resume } = useIntervalFn(
  () => {
    if (iterations.value < props.text.length) {
      displayText.value = displayText.value.map((l, i) =>
        l === " " ? l : i <= iterations.value ? props.text[i] : getRandomLetter(),
      );
      iterations.value += 0.1;
    } else {
      pause();
    }
  },
  computed(() => props.duration / (props.text.length * 10)),
);

function startAnimation() {
  pause();
  resume();
}

watch(
  () => props.text,
  (newText) => {
    displayText.value = newText.split("");
    triggerAnimation();
  },
);

if (props.animateOnLoad) {
  triggerAnimation();
}
</script>

<template>
  <div class="inline-flex cursor-default overflow-hidden" @mouseenter="triggerAnimation">
    <div class="inline-flex">
      <Motion v-for="(letter, i) in displayText" :key="i" as="span"
        :class="cn(letter === ' ' ? 'w-3' : '', $props.class)" class="inline-block" :initial="{ opacity: 0, y: -10 }"
        :animate="{ opacity: 1, y: 0 }" :delay="i * (duration / (text.length * 10))">
        {{ letter.toUpperCase() }}
      </Motion>
    </div>
  </div>
</template>
