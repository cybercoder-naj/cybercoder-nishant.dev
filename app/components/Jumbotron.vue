<template>
  <div class="relative flex items-center justify-center overflow-hidden px-40">
    <h2 class="z-10 whitespace-pre-wrap text-4xl tracking-tighter sm:text-6xl">
      I am
      <div
        class="bg-gradient inline-block bg-gradient-to-tr from-neon-pink to-electric-blue bg-clip-text text-transparent">
        <InspiraTextHyper class="font-fira" text="The Cybercoder" />
      </div>
    </h2>

    <div class="absolute bottom-20 flex flex-col items-center gap-4">
      <a href="#about" class="animate-bounce">
        <Icon
          name="material-symbols:keyboard-double-arrow-down-rounded"
          class="size-12" />
      </a>
    </div>

    <InspiraGrid
      :class="[
        '[mask-image:radial-gradient(320px_circle_at_center,white,transparent)]',
        'skew-y-12'
      ]" />
  </div>
</template>
