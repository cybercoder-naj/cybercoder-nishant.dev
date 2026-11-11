<script setup lang="ts">
const logos = [
  { name: "logos:bun", label: "Bun", link: "https://bun.sh" },
  { name: "logos:cloudflare-icon", label: "Cloudflare", link: "https://www.cloudflare.com" },
  { name: "logos:c-plusplus", label: "C++", link: "https://isocpp.org" },
  { name: "logos:digital-ocean-icon", label: "DigitalOcean", link: "https://www.digitalocean.com" },
  { name: "logos:docker-icon", label: "Docker", link: "https://www.docker.com" },
  { name: "logos:github-actions", label: "GitHub Actions", link: "https://github.com/features/actions" },
  { name: "logos:haskell-icon", label: "Haskell", link: "https://www.haskell.org" },
  { name: "logos:hono", label: "Hono", link: "https://hono.dev" },
  { name: "logos:compose-multiplatform", label: "Compose Multiplatform", link: "https://www.jetbrains.com/compose-multiplatform/" },
  { name: "logos:kotlin-icon", label: "Kotlin", link: "https://kotlinlang.org" },
  { name: "logos:linux-tux", label: "Linux", link: "https://www.linux.org" },
  { name: "logos:nuxt-icon", label: "Nuxt", link: "https://nuxt.com" },
  { name: "logos:postgresql", label: "PostgreSQL", link: "https://www.postgresql.org" },
  { name: "logos:tailwindcss-icon", label: "Tailwind CSS", link: "https://tailwindcss.com" },
  { name: "logos:typescript-icon", label: "TypeScript", link: "https://www.typescriptlang.org" },
  { name: "logos:vitejs", label: "Vite", link: "https://vite.dev" },
]
</script>

<template>
  <MySection id="projects">
    <template #title>
      Projects
    </template>

    <div class="py-12 grid grid-cols-1 grid-rows-6 lg:grid-cols-3 lg:grid-rows-3 gap-4">
      <div class="border border-black dark:border-white lg:col-span-2 relative isolate">
        <div class="absolute inset-0 bg-cover bg-center opacity-20"
          style="background-image: url('/images/projects/ichack.jpg');">
        </div>

        <div class="px-6 py-4 flex flex-col gap-6 h-full">
          <h2 class="text-4xl my-2 font-semibold">
            IC Hack '25
          </h2>

          <p class="text-xl">
            I was the Technical Lead of the hackathon hosted by DoCSoc at Imperial College London.
            The website was built with Nuxt, Postgres, Docker, GitHub Actions, and more.
            Wrote extensive documentation while managing 5 volunteers.
          </p>
        </div>
      </div>

      <div class="border border-black dark:border-white lg:row-start-1 lg:col-start-3 relative isolate">
        <div class="absolute inset-0 bg-cover bg-center opacity-20"
          style="background-image: url('/images/projects/elysia.png');">
        </div>

        <div class="px-6 py-4 flex flex-col gap-4">
          <h2 class="text-4xl my-2 font-semibold">
            Logestic
          </h2>

          <p class="text-xl">
            A highly advanced and customisable logging middleware for <a href="https://elysiajs.com/">Elysia.js</a>, a
            backend
            Typescript library.
          </p>
        </div>
      </div>

      <div class="border border-black dark:border-white lg:row-start-2 lg:col-start-1 relative isolate">
        <div class="absolute inset-0 bg-cover bg-center opacity-20"
          style="background-image: url('/images/projects/gem5.png');">
        </div>

        <div class="px-6 py-4 flex flex-col gap-4">
          <h2 class="text-4xl my-2 font-semibold">
            Speculative Memory Bypassing
          </h2>

          <p class="text-xl">
            My Final Year Dissertation where I showed performance insights of using SMB in CPU
            architectures using Gem5.
          </p>
        </div>
      </div>

      <div class="border border-black dark:border-white lg:row-start-2 lg:col-start-2 relative isolate">
        <div class="absolute inset-0 bg-cover bg-center opacity-20"
          style="background-image: url('/images/projects/haskell.webp');">
        </div>

        <div class="px-6 py-4 flex flex-col gap-4">
          <h2 class="text-4xl my-2 font-semibold">
            WACC Compiler
          </h2>

          <p class="text-xl">
            Wrote a compiler for a language in Haskell. Included parsing, semantic checking, x86-64 codegen, CFG
            optimisation.
          </p>
        </div>
      </div>

      <div class="border border-black dark:border-white lg:row-start-2 lg:col-start-3 relative isolate">
        <div class="absolute inset-0 bg-cover bg-center opacity-20"
          style="background-image: url('/images/projects/compose_multiplatform.jpg');">
        </div>

        <div class="px-6 py-4 flex flex-col gap-4">
          <h2 class="text-4xl my-2 font-semibold">
            Rooner
          </h2>

          <p class="text-xl">
            A minimal working Text editor with Compose Multiplatform.
            Supports syntax highlighting, jump to error, and remaining execution time.
          </p>
        </div>
      </div>

      <div class="lg:col-span-3 flex flex-col p-4 items-center justify-center gap-8">
        <h2 class="text-4xl">Technologies used in these Projects </h2>

        <div class="lg:hidden">
          <InspiraMarquee>
            <div class="flex gap-4">
              <a v-for="logo in logos" :key="logo.name" :href="logo.link" target="_blank" rel="noopener noreferrer"
                :aria-label="logo.label" class="transition-transform hover:scale-110">
                <Icon :name="logo.name" class="size-12" />
              </a>
            </div>
          </InspiraMarquee>
        </div>
        <div class="flex gap-4 max-lg:hidden">
          <a v-for="logo in logos" :key="logo.name" :href="logo.link" target="_blank" rel="noopener noreferrer"
            :aria-label="logo.label" class="transition-transform hover:scale-110">
            <Icon :name="logo.name" class="size-12" />
          </a>
        </div>
      </div>
    </div>
  </MySection>
</template>
