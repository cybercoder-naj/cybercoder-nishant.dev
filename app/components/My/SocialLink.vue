<script setup lang="ts">
type Props = {
  icon: string;
  href: string;
};

const {} = defineProps<Props>();
</script>

<template>
  <a
    :href="href"
    target="_blank"
    class="grid place-items-center opacity-60 transition-opacity hover:opacity-100">
    <Icon :name="icon" class="size-6" />
  </a>
</template>
