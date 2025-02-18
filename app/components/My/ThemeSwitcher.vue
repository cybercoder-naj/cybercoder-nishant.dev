<script setup lang="ts">
import { Switch } from '@headlessui/vue';

const lightTheme = defineModel<boolean>();
</script>

<template>
  <Switch
    v-model="lightTheme"
    class="h-6 w-12 rounded-full bg-gradient-to-b"
    :class="{
      'from-blue-400 via-blue-200 to-blue-400': lightTheme,
      'from-slate-800 via-slate-600 to-slate-800': !lightTheme
    }">
    <div v-if="lightTheme" class="flex h-full items-center px-0.5 text-white">
      <Icon name="material-symbols:circle" class="size-5" />
      <div class="relative h-full flex-1">
        <Icon
          name="material-symbols:circle"
          class="absolute left-0.5 top-1/2 size-1" />
        <Icon
          name="material-symbols:circle"
          class="absolute right-1 top-1 size-2" />
      </div>
    </div>
    <div v-else class="flex h-full items-center px-0.5 text-white">
      <div class="relative h-full flex-1">
        <Icon
          name="material-symbols-light:star"
          class="absolute left-0.5 top-0 size-3" />

        <Icon
          name="material-symbols-light:star"
          class="absolute bottom-0 right-0 size-3" />

        <Icon
          name="material-symbols-light:circle"
          class="absolute -right-0.5 top-1 size-1.5" />

        <Icon
          name="material-symbols-light:circle"
          class="absolute bottom-1.5 left-1 size-1" />
      </div>
      <Icon name="material-symbols:dark-mode" class="size-5 -scale-x-100" />
    </div>
  </Switch>
</template>
