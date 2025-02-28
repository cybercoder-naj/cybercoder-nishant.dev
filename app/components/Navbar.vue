<script setup lang="ts">
const colorMode = useColorMode();
const lightTheme = ref(false);

watch(lightTheme, () => {
  colorMode.preference = lightTheme.value ? 'light' : 'dark';
});
</script>

<template>
  <div class="flex items-center justify-between">
    <NuxtLink to="/" class="max-md:hidden">Cybercoder</NuxtLink>

    <ul>
      <li>
        <NuxtLink to="/#about" class="max-md:hidden">About</NuxtLink>
      </li>
    </ul>

    <div class="flex items-center gap-3">
      <MyThemeSwitcher v-model="lightTheme" />

      <div class="w-px self-stretch bg-gray-300 dark:bg-gray-800"></div>

      <MySocialLink
        icon="mdi:github"
        href="https://github.com/cybercoder-naj" />
      <MySocialLink
        icon="mdi:linkedin"
        href="https://linkedin.com/nishant-a-jalan" />
      <MySocialLink
        icon="mdi:medium"
        href="https://medium.com/@cybercoder.naj" />
      <MySocialLink
        icon="mdi:email"
        href="mailto:cybercoder.nishant@gmail.com" />
    </div>
  </div>
</template>
