<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';

/*
 * Interactive Grid Pattern from Inspira-UI
 * https://inspira-ui.com/components/backgrounds/interactive-grid-pattern
 * 
 * Modified by: cybercoder-naj
 * Modifications:
 *   - Changed hover color effect to electric-blue
 */

interface InteractiveGridPatternProps {
  className?: HTMLAttributes['class'];
  squaresClassName?: HTMLAttributes['class'];
  width?: number;
  height?: number;
  squares?: [number, number];
}

const {
  width = 40,
  height = 40,
  squares = [24, 24],
  className,
  squaresClassName,
  ...restProps
} = defineProps<InteractiveGridPatternProps>();

const horizontal = computed(() => squares[0]);
const vertical = computed(() => squares[1]);

const totalSquares = computed(() => horizontal.value * vertical.value);

const hoveredSquare = ref<number | null>(null);

const gridWidth = computed(() => width * horizontal.value);
const gridHeight = computed(() => height * vertical.value);

function getX(index: number) {
  return (index % horizontal.value) * width + gridWidth.value / 2;
}

function getY(index: number) {
  return Math.floor(index / horizontal.value) * height;
}

const svgClass = computed(() =>
  cn('absolute inset-0 h-full w-full border border-gray-400/30', className)
);

function getRectClass(index: number) {
  return cn(
    'stroke-gray-400/30 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000',
    hoveredSquare.value === index ? 'fill-electric-blue/30' : 'fill-transparent',
    squaresClassName
  );
}

function handleMouseEnter(index: number) {
  hoveredSquare.value = index;
}

function handleMouseLeave() {
  hoveredSquare.value = null;
}
</script>

<template>
  <svg :width="gridWidth" :height="gridHeight" v-bind="restProps" :class="svgClass">
    <rect v-for="(_, index) in totalSquares" :key="index" :x="getX(index)" :y="getY(index)" :width="width"
      :height="height" :class="getRectClass(index)" @mouseenter="handleMouseEnter(index)"
      @mouseleave="handleMouseLeave" />
  </svg>
</template>
