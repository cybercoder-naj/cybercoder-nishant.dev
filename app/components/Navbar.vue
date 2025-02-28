<script setup lang="ts">
const colorMode = useColorMode();
const lightTheme = ref(false);

watch(lightTheme, () => {
  colorMode.preference = lightTheme.value ? 'light' : 'dark';
});
</script>

<template>
  <div class="flex items-center justify-between">
    <NuxtLink to="/">Cybercoder</NuxtLink>

    <ul>
      <li>
        <NuxtLink to="/#about">About</NuxtLink>
      </li>
    </ul>

    <div>
      <MyThemeSwitcher v-model="lightTheme" />
    </div>
  </div>
</template>
