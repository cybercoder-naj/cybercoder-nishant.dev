<script setup lang="ts">
type Props = {
  icon: string;
  link: string;
  ariaLabel?: string;
};
defineProps<Props>();
</script>

<template>
  <a :href="link" target="_blank" rel="noopener" :aria-label="ariaLabel">
    <Icon
      :name="icon"
      class="size-full transition-opacity not-hover:opacity-80" />
  </a>
</template>
