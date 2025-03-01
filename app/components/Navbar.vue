<script setup lang="ts">
const colorMode = useColorMode();
const lightTheme = ref(false);
watch(lightTheme, () => {
  colorMode.preference = lightTheme.value ? 'light' : 'dark';
});

const sideMenu = ref(false);
function toggleSideMenu() {
  sideMenu.value = !sideMenu.value;
}

function isAboveMd() {
  return import.meta.client && window.innerWidth >= 768;
}
</script>

<template>
  <div class="flex items-center justify-between">
    <Icon
      name="mdi:hamburger"
      class="size-6 cursor-pointer opacity-60 md:hidden"
      role="button"
      tabindex="0"
      aria-label="Toggle navigation menu"
      aria-controls="side-menu"
      :aria-expanded="sideMenu"
      :aria-hidden="isAboveMd()"
      @click="toggleSideMenu" />

    <div
      id="side-menu"
      class="absolute left-0 top-0 z-50 flex h-svh w-[75vw] flex-col gap-10 border-r border-gray-200 bg-white px-6 py-4 transition-transform md:hidden dark:border-gray-600 dark:bg-black"
      :aria-hidden="isAboveMd() || sideMenu"
      :class="{
        'translate-x-0': sideMenu,
        '-translate-x-full': !sideMenu
      }">
      <div class="flex items-center justify-between">
        <NuxtLink to="/">Cybercoder</NuxtLink>

        <Icon
          name="material-symbols:close"
          @click="toggleSideMenu"
          class="size-4 cursor-pointer text-gray-200 md:hidden dark:text-gray-600"
          role="button"
          tabindex="0"
          aria-label="Close navigation menu"
          aria-controls="side-menu"
          :aria-hidden="isAboveMd()"
          :aria-expanded="sideMenu" />
      </div>

      <ul>
        <li>
          <a href="/#about" @click="toggleSideMenu">About</a>
        </li>
      </ul>
    </div>

    <NuxtLink to="/" class="max-md:hidden">Cybercoder</NuxtLink>

    <ul class="max-md:hidden">
      <li>
        <a href="/#about" @click="toggleSideMenu">About</a>
      </li>
    </ul>

    <div class="flex items-center gap-3">
      <MyThemeSwitcher v-model="lightTheme" />

      <div class="w-px self-stretch bg-gray-300 dark:bg-gray-600"></div>

      <MySocialLink
        icon="mdi:github"
        href="https://github.com/cybercoder-naj"
        aria-label="Visit my GitHub" />
      <MySocialLink
        icon="mdi:linkedin"
        href="https://linkedin.com/nishant-a-jalan"
        aria-label="Visit my LinkedIn" />
      <MySocialLink
        icon="mdi:medium"
        href="https://medium.com/@cybercoder.naj"
        aria-label="Visit my Medium Blog" />
      <MySocialLink
        icon="mdi:email"
        href="mailto:cybercoder.nishant@gmail.com"
        aria-label="Write me an email" />
    </div>
  </div>
</template>
