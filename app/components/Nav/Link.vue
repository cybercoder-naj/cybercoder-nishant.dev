<script setup lang="ts">
type Props = {
  to: string;
};
const props = defineProps<Props>();
</script>

<template>
  <a :href="props.to" class="transition duration-300 not-hover:opacity-70 relative">
    <slot />
  </a>
</template>

<style scoped>
a::after {
  content: '';
  position: absolute;
  bottom: -0.25rem;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-secondary);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-in-out;
}

a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
