<script setup lang="ts"></script>

<template>
  <div class="fixed top-0 right-24 left-24 z-50 flex justify-between py-8">
    <a href="/">Cybercoder</a>
    <nav class="flex gap-4">
      <!-- <NavLink to="#about">About</NavLink>
      <NavLink to="#skills">Skills</NavLink>
      <NavLink to="#projects">Experience</NavLink>
      <NavLink to="#contact">Projects</NavLink> -->
    </nav>
    <div class="flex gap-2">
      <ThemeSwitcher class="w-12" />

      <div class="bg-separator w-0.5"></div>

      <IconLink
        aria-label="GitHub"
        class="size-6"
        icon="uil:github"
        link="https://github.com/cybercoder-naj" />
      <IconLink
        aria-label="LinkedIn"
        class="size-6"
        icon="uil:linkedin"
        link="https://linkedin.com/in/nishant-aanjaney-jalan-0b8a1a1b4/" />
      <IconLink
        aria-label="Medium"
        class="size-6"
        icon="uil:medium-m"
        link="https://medium.com/@cybercoder.naj" />
      <IconLink
        aria-label="Email"
        class="size-6"
        icon="uil:envelope"
        link="mailto:cybercoder.nishant@gmail.com" />
    </div>
  </div>
</template>
