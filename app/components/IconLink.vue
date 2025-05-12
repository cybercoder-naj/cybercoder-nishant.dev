<script setup lang="ts">
type Props = {
  icon: string;
  link: string;
};
defineProps<Props>();
</script>

<template>
  <a :href="link" target="_blank" rel="noopener">
    <Icon
      :name="icon"
      class="size-full transition-opacity not-hover:opacity-80" />
  </a>
</template>
