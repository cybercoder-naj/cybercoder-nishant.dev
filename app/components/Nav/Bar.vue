<script setup lang="ts"></script>

<template>
  <div class="flex justify-between py-8">
    <a href="/">Cybercoder</a>
    <nav class="flex gap-4">
      <NavLink to="#about">About</NavLink>
      <NavLink to="#skills">Skills</NavLink>
      <NavLink to="#projects">Experience</NavLink>
      <NavLink to="#contact">Projects</NavLink>
      <NavLink to="#blog">Blog</NavLink>
    </nav>
    <div class="flex gap-2">
      <ThemeSwitcher class="w-12" />

      <div class="bg-separator w-0.5"></div>

      <IconLink
        class="size-6"
        icon="uil:github"
        link="https://github.com/cybercoder-naj" />
      <IconLink
        class="size-6"
        icon="uil:linkedin"
        link="https://linkedin.com/in/nishant-aanjaney-jalan-0b8a1a1b4/" />
      <IconLink
        class="size-6"
        icon="uil:medium-m"
        link="https://medium.com/@cybercoder.naj" />
      <IconLink
        class="size-6"
        icon="uil:envelope"
        link="mailto:cybercoder.nishant@gmail.com" />
    </div>
  </div>
</template>
