<script setup lang="ts">
const value = defineModel<boolean>();
</script>

<template>
  <div
    class="flex h-6 w-12 items-center rounded-full border border-white shadow-inner">
    <span
      class="grid size-5 translate-x-6 place-items-center rounded-full bg-white">
      <Icon name="material-symbols:dark-mode" />
    </span>
  </div>
</template>
