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
@reference '~/assets/css/index.css';

a::after {
  @apply md:content-[''] absolute left-0 w-full bg-secondary;

  bottom: -0.25rem;
  height: 2px;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-in-out;
}

a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
