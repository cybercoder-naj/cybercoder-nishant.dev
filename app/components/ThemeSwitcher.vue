<script setup lang="ts">
const colorMode = useColorMode();
const isLightTheme = computed(() => colorMode.preference === 'light');

const toggleTheme = () => {
  colorMode.preference = isLightTheme.value ? 'dark' : 'light';
};

const gradient = computed(() => {
  return isLightTheme.value
    ? 'from-blue-400 via-blue-200 to-blue-400'
    : 'from-slate-800 via-slate-600 to-slate-800';
});
</script>

<template>
  <div
    class="rounded-full bg-linear-to-b/srgb"
    aria-label="Toggle between light and dark theme"
    :class="gradient"
    role="switch"
    tabindex="0"
    type="button"
    :aria-checked="!isLightTheme"
    @click="toggleTheme">
    <div
      class="relative flex h-full items-center overflow-hidden rounded-full px-0.5">
      <!-- Sun and moon icons -->
      <Icon
        :name="
          isLightTheme
            ? 'material-symbols:circle' /* Sun Icon */
            : 'material-symbols:dark-mode' /* Moon Icon */
        "
        class="size-5 -scale-x-100 transition-transform duration-300 ease-in-out"
        :class="{
          'translate-x-6 text-white': !isLightTheme,
          'text-yellow-400': isLightTheme
        }" />

      <!-- Sun rays -->
      <div
        class="sun-glare absolute left-0.5 aspect-square w-5 rounded-full transition-opacity duration-300 ease-in-out"
        :class="isLightTheme ? 'opacity-40' : 'opacity-0'"></div>
      <div
        class="sun-glare absolute left-0.5 aspect-square w-6 rounded-full transition-opacity duration-300 ease-in-out"
        :class="isLightTheme ? 'opacity-40' : 'opacity-0'"></div>
      <div
        class="sun-glare absolute left-0.5 aspect-square w-8 rounded-full transition-opacity duration-300 ease-in-out"
        :class="isLightTheme ? 'opacity-40' : 'opacity-0'"></div>

      <!-- A cloud -->
      <div
        class="relative z-10 h-full flex-1"
        :class="isLightTheme ? 'opacity-100' : 'opacity-0'">
        <Icon
          name="material-symbols:cloud"
          class="absolute top-0.5 right-0.5 flex w-1/2 flex-col justify-center text-white" />
      </div>

      <!-- Stars and circles -->
      <!-- Dark themed decoration -->
      <Icon
        name="material-symbols:star"
        class="absolute top-0.5 left-1 size-3 text-white transition-opacity delay-0 duration-300 ease-in-out"
        :class="!isLightTheme ? 'opacity-80' : 'opacity-0'" />

      <Icon
        name="material-symbols:star"
        class="absolute bottom-0 left-1/4 size-3 text-white transition-opacity delay-0 duration-300 ease-in-out"
        :class="!isLightTheme ? 'opacity-80' : 'opacity-0'" />

      <Icon
        name="material-symbols:circle"
        class="absolute top-1 right-[45%] size-1.5 text-white transition-opacity delay-0 duration-300 ease-in-out"
        :class="!isLightTheme ? 'opacity-80' : 'opacity-0'" />

      <Icon
        name="material-symbols:circle"
        class="absolute bottom-1.5 left-1 size-1 text-white transition-opacity delay-0 duration-300 ease-in-out"
        :class="!isLightTheme ? 'opacity-80' : 'opacity-0'" />
    </div>
  </div>
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
