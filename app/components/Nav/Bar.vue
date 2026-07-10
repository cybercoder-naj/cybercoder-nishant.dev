<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';

const MD_BREAKPOINT = 768;
const hamburgerOpen = ref(false);

const { width } = useWindowSize();

const toggleHamburger = () => {
  hamburgerOpen.value = !hamburgerOpen.value;
};
watchEffect(() => {
  if (width.value >= MD_BREAKPOINT) {
    hamburgerOpen.value = false;
  }
});
</script>

<template>
  <nav class="py-8">
    <div class="relative flex items-center justify-between">
      <a id="main-icon" href="/">Nishant</a>
      <ul class="hidden gap-8 md:flex">
        <NavLink to="#">Home</NavLink>
        <NavLink to="#experience">Experience</NavLink>
        <NavLink to="#projects">Projects</NavLink>
        <NavLink to="#blog">Blog</NavLink>
        <NavLink to="#hobbies">Hobbies</NavLink>
        <NavLink to="#testimonials">Testimonials</NavLink>
        <NavLink to="#contact">Contact</ NavLink>
      </ul>
      <div class="md:hidden">
        <HamburgerIcon @click="toggleHamburger" />
      </div>
      <div class="hidden gap-2 md:flex">
        <ThemeSwitcher class="w-12" />

        <div class="bg-separator w-0.5"></div>

        <IconLink aria-label="GitHub" class="size-6" icon="uil:github" link="https://github.com/cybercoder-naj" />
        <IconLink aria-label="LinkedIn" class="size-6" icon="uil:linkedin"
          link="https://linkedin.com/in/nishant-a-jalan" />
        <IconLink aria-label="Email" class="size-6" icon="uil:envelope" link="mailto:cybercoder.nishant@gmail.com" />
      </div>

      <div
        class="bg-surface text-on-surface absolute top-full right-0 left-0 mt-4 origin-top rounded-md px-4 py-2 shadow transition-transform duration-500 ease-in-out"
        :class="{
          'scale-y-100': hamburgerOpen,
          'scale-y-0': !hamburgerOpen
        }">
        <div class="flex justify-between">
          <ul class="flex flex-col [&>a]:py-2">
            <NavLink to="#">Home</NavLink>
            <NavLink to="#experience">Experience</NavLink>
            <NavLink to="#projects">Projects</NavLink>
            <NavLink to="#blog">Blog</NavLink>
            <NavLink to="#hobbies">Hobbies</NavLink>
            <NavLink to="#testimonials">Testimonials</NavLink>
            <NavLink to="#contact">Contact</ NavLink>
          </ul>

          <div class="flex items-end gap-2 py-2">
            <ThemeSwitcher class="h-6 w-12" />

            <IconLink aria-label="GitHub" class="size-6" icon="uil:github" link="https://github.com/cybercoder-naj" />
            <IconLink aria-label="LinkedIn" class="size-6" icon="uil:linkedin"
              link="https://linkedin.com/in/nishant-a-jalan" />
            <IconLink aria-label="Email" class="size-6" icon="uil:envelope"
              link="mailto:cybercoder.nishant@gmail.com" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@reference "~/assets/css/index.css";

#main-icon {
  @apply font-semibold text-xl;
}

#main-icon::after {
  @apply content-['::'] text-primary ml-1;
}
</style>