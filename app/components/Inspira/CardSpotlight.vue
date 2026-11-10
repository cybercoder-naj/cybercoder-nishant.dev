<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";

type CardSpotlightProps = {
  class?: HTMLAttributes["class"];
  slotClass?: HTMLAttributes["class"];
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
};

const {
  class: className = "",
  slotClass = "",
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
} = defineProps<CardSpotlightProps>();

const mouseX = ref(-gradientSize * 10);
const mouseY = ref(-gradientSize * 10);

function handleMouseMove(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  mouseX.value = e.clientX - rect.left;
  mouseY.value = e.clientY - rect.top;
}

function handleMouseLeave() {
  mouseX.value = -gradientSize * 10;
  mouseY.value = -gradientSize * 10;
}

onMounted(() => {
  mouseX.value = -gradientSize * 10;
  mouseY.value = -gradientSize * 10;
});

const backgroundStyle = computed(() => {
  return `radial-gradient(
    circle at ${mouseX.value}px ${mouseY.value}px,
    ${gradientColor} 0%,
    rgba(0, 0, 0, 0) 70%
  )`;
});
</script>

<template>
  <div :class="cn(
    `group relative flex overflow-hidden rounded-xl border bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white`,
    className,
  )
    " @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <div :class="cn(`relative z-10`, slotClass)">
      <slot />
    </div>
    <div
      class="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      :style="{
        background: backgroundStyle,
        opacity: gradientOpacity,
      }" />
  </div>
</template>
