<script lang="ts" setup>
type MySectionProps = {
  id: string;
};

const { id } = defineProps<MySectionProps>();
</script>

<template>
  <section :id="id" class="flex flex-col h-full">
    <h1 class="text-4xl lg:text-6xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white">
      <slot name="title" />
    </h1>

    <slot />
  </section>
</template>