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
    <div
      class="relative flex h-full items-center overflow-hidden rounded-full px-0.5">
      <!-- Sun and moon icons -->
      <Icon
        :name="
          lightTheme ? 'material-symbols:circle' : 'material-symbols:dark-mode'
        "
        class="size-5 -scale-x-100 transition-transform duration-300 ease-in-out"
        :class="{
          'translate-x-6 text-white': !lightTheme,
          'text-yellow-400': lightTheme
        }" />

      <!-- Sun rays -->
      <div
        class="sun-glare absolute left-0.5 aspect-square w-5 rounded-full transition-opacity duration-300 ease-in-out"
        :class="lightTheme ? 'opacity-40' : 'opacity-0'"></div>
      <div
        class="sun-glare absolute left-0.5 aspect-square w-6 rounded-full transition-opacity duration-300 ease-in-out"
        :class="lightTheme ? 'opacity-40' : 'opacity-0'"></div>
      <div
        class="sun-glare absolute left-0.5 aspect-square w-8 rounded-full transition-opacity duration-300 ease-in-out"
        :class="lightTheme ? 'opacity-40' : 'opacity-0'"></div>

      <!-- A cloud -->
      <div
        class="relative z-10 h-full flex-1"
        :class="lightTheme ? 'opacity-100' : 'opacity-0'">
        <div
          class="absolute right-0.5 top-1 flex w-1/2 flex-col justify-center">
          <div class="relative flex translate-y-1/2 justify-center gap-0.5">
            <div class="size-1 rounded-full bg-white"></div>
            <div class="size-1 rounded-full bg-white"></div>
            <div class="absolute left-1/2 -translate-x-1/2 -translate-y-0.5">
              <div class="size-1 rounded-full bg-white"></div>
              <div class="size-1 rounded-full bg-white"></div>
            </div>
          </div>
          <div class="h-1 w-full rounded-2xl bg-white"></div>
        </div>
      </div>

      <!-- Stars and circles -->
      <!-- Dark themed decoration -->
      <Icon
        name="material-symbols-light:star"
        class="absolute left-1 top-0.5 size-3 text-white transition-opacity delay-0 duration-300 ease-in-out"
        :class="!lightTheme ? 'opacity-60' : 'opacity-0'" />

      <Icon
        name="material-symbols-light:star"
        class="absolute bottom-0 left-1/4 size-3 text-white transition-opacity delay-0 duration-300 ease-in-out"
        :class="!lightTheme ? 'opacity-60' : 'opacity-0'" />

      <Icon
        name="material-symbols-light:circle"
        class="absolute right-[45%] top-1 size-1.5 text-white transition-opacity delay-0 duration-300 ease-in-out"
        :class="!lightTheme ? 'opacity-60' : 'opacity-0'" />

      <Icon
        name="material-symbols-light:circle"
        class="absolute bottom-1.5 left-1 size-1 text-white transition-opacity delay-0 duration-300 ease-in-out"
        :class="!lightTheme ? 'opacity-60' : 'opacity-0'" />
    </div>
  </Switch>
</template>

<style scoped>
.sun-glare {
  --outer-sun: hsl(50.44, 97.85%, 63.53%);
  --inner-sun: hsl(50.44, 97.85%, 90%);

  background: radial-gradient(
    circle at center,
    var(--inner-sun) 0,
    var(--outer-sun) 40%,
    transparent 100%
  );
}
</style>
