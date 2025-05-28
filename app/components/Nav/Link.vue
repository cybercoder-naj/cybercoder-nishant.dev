<script setup lang="ts">
type Props = {
  to: string;
};
const props = defineProps<Props>();
</script>

<template>
  <a :href="props.to" class="transition-opacity not-hover:opacity-80">
    <slot />
  </a>
</template>
