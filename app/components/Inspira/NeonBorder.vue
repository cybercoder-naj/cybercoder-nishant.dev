<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';

interface Props {
  color1?: string;
  color2?: string;
  animationType?: 'none' | 'half' | 'full';
  duration?: number;
  clazz?: HTMLAttributes['class'];
}

const {
  color1 = 'var(--color-neon-pink)',
  color2 = 'var(--color-electric-blue)',
  duration = 6,
  animationType = 'half'
} = defineProps<Props>();

const durationInSeconds = computed(() => `${duration}s`);
const animWidth = computed(() => `${getWidth(animationType)}%`);

function getWidth(animationType: 'none' | 'half' | 'full') {
  switch (animationType) {
    case 'none':
      return 12;
    case 'half':
      return 50;
    case 'full':
      return 100;
  }
}
</script>

<style scoped>
.neon-border-container {
  position: relative;
  display: inline-block;
  padding: 2rem;
}

.neon-border-one {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  filter: blur(1px) drop-shadow(0 0 12px v-bind(color1));
  z-index: -1;
  inset: 0;
}

.neon-border-one::before {
  content: '';
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: v-bind(animWidth);
  height: 100%;
  background: linear-gradient(
    135deg,
    v-bind(color1),
    v-bind(color1),
    transparent,
    transparent
  );
}

.neon-border-two {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  filter: blur(1px) drop-shadow(0 0 12px v-bind(color2));
  z-index: -1;
  inset: 0;
}
.neon-border-two::before {
  content: '';
  position: absolute;
  bottom: 0%;
  right: 0%;
  overflow: hidden;
  width: v-bind(animWidth);
  height: 100%;
  background: linear-gradient(
    135deg,
    transparent,
    transparent,
    v-bind(color2),
    v-bind(color2)
  );
}

.animate-border {
  animation: rotate v-bind(durationInSeconds) linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <div
    :class="
      cn(
        'relative z-10 inline-block h-10 w-full max-w-sm overflow-hidden rounded-lg p-px',
        clazz
      )
    ">
    <div
      :class="
        cn(
          'neon-border-one rounded-lg',
          animationType != 'none' ? 'animate-border' : ''
        )
      "></div>
    <div
      :class="
        cn(
          'neon-border-two rounded-lg',
          animationType != 'none' ? 'animate-border' : ''
        )
      "></div>
    <slot> </slot>
  </div>
</template>
