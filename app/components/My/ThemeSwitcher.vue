<script setup lang="ts">
import { Switch } from '@headlessui/vue';

const lightTheme = defineModel<boolean>();
</script>

<template>
  <Switch
    v-model="lightTheme"
    class="m-5 h-6 w-12 rounded-full bg-gradient-to-b"
    :class="{
      'from-blue-400 via-blue-200 to-blue-400': lightTheme,
      'from-slate-800 via-slate-600 to-slate-800': !lightTheme
    }">
    <div class="relative flex h-full items-center px-0.5 text-white">
      <!-- Sun and moon icons -->
      <Icon
        :name="
          lightTheme ? 'material-symbols:circle' : 'material-symbols:dark-mode'
        "
        class="size-5 -scale-x-100 transition-transform duration-300 ease-in-out"
        :class="{ 'translate-x-6': !lightTheme }" />

      <!-- Stars and circles -->
      <div class="h-full flex-1">
        <!-- Light themed decoration -->
        <Icon
          name="material-symbols:circle"
          class="absolute left-[58%] top-1/2 size-1 transition-opacity delay-0 duration-300 ease-in-out"
          :class="lightTheme ? 'opacity-100' : 'opacity-0'" />
        <Icon
          name="material-symbols:circle"
          class="absolute right-1 top-1 size-2 transition-opacity delay-0 duration-300 ease-in-out"
          :class="lightTheme ? 'opacity-100' : 'opacity-0'" />

        <!-- Dark themed decoration -->
        <Icon
          name="material-symbols-light:star"
          class="absolute left-1 top-0.5 size-3 transition-opacity delay-0 duration-300 ease-in-out"
          :class="!lightTheme ? 'opacity-100' : 'opacity-0'" />

        <Icon
          name="material-symbols-light:star"
          class="absolute bottom-0 left-1/4 size-3 transition-opacity delay-0 duration-300 ease-in-out"
          :class="!lightTheme ? 'opacity-100' : 'opacity-0'" />

        <Icon
          name="material-symbols-light:circle"
          class="absolute right-[45%] top-1 size-1.5 transition-opacity delay-0 duration-300 ease-in-out"
          :class="!lightTheme ? 'opacity-100' : 'opacity-0'" />

        <Icon
          name="material-symbols-light:circle"
          class="absolute bottom-1.5 left-1 size-1 transition-opacity delay-0 duration-300 ease-in-out"
          :class="!lightTheme ? 'opacity-100' : 'opacity-0'" />
      </div>
    </div>
  </Switch>
</template>
