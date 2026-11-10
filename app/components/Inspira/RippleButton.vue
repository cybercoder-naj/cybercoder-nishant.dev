<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";

interface RippleButtonProps {
  class?: HTMLAttributes["class"];
  rippleColor?: string;
  duration?: number;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

const {
  rippleColor = "#ADD8E6",
  duration = 600,
  class: className = "",
  href,
  target,
  rel,
} = defineProps<RippleButtonProps>();

const rippleButtonRef = ref<HTMLButtonElement | null>(null);
const buttonRipples = ref<Array<{ x: number; y: number; size: number; key: number }>>([]);

const isLink = computed(() => !!href);
const isNewTab = computed(() => target === "_blank");
const computedRel = computed(() =>
  rel ?? (isNewTab.value ? "noopener noreferrer" : undefined)
);

function handleClick(event: MouseEvent) {
  createRipple(event);
}

function createRipple(event: MouseEvent) {
  const button = rippleButtonRef.value;
  if (!button) return;

  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);

  const isKeyboardEvent = event.detail === 0;
  const x = (isKeyboardEvent ? rect.width / 2 : event.clientX - rect.left) - size / 2;
  const y = (isKeyboardEvent ? rect.height / 2 : event.clientY - rect.top) - size / 2;

  const key = Date.now() + Math.random();
  buttonRipples.value.push({ x, y, size, key });

  setTimeout(() => {
    buttonRipples.value = buttonRipples.value.filter(r => r.key !== key);
  }, duration);
}
</script>

<template>
  <component :is="isLink ? 'a' : 'button'" ref="rippleButtonRef" :href="isLink ? href : undefined"
    :target="isLink ? target : undefined" :rel="isLink ? computedRel : undefined" :type="isLink ? undefined : 'button'"
    :style="{ '--duration': `${duration}ms` }" :class="cn(
      `bg-background text-primary relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 px-4 py-2 text-center`,
      className,
    )
      " @click="handleClick">
    <div class="relative z-10">
      <slot />
    </div>

    <span class="pointer-events-none absolute inset-0">
      <span v-for="ripple in buttonRipples" :key="ripple.key"
        class="ripple-animation bg-background absolute rounded-full opacity-30" :style="{
          width: `${ripple.size}px`,
          height: `${ripple.size}px`,
          top: `${ripple.y}px`,
          left: `${ripple.x}px`,
          backgroundColor: $props.rippleColor,
          transform: 'scale(0)',
          animationDuration: `${$props.duration}ms`,
        }" />
    </span>
  </component>
</template>

<style scoped>
@keyframes rippling {
  0% {
    opacity: 1;
  }

  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.ripple-animation {
  animation: rippling var(--duration) ease-out;
}
</style>
