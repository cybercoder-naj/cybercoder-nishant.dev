<template>
  <MySection id="projects">
    <template #title>
      Projects
    </template>

    <div class="py-12">
      <InspiraCardSpotlight class="w-full" slotClass="p-8 w-full">
        <div class="flex w-full justify-between gap-12">
          <div class="flex flex-col justify-evenly gap-6">
            <h2 class="text-6xl py-2 px-4 font-semibold">
              IC Hack '25
            </h2>

            <p class="text-2xl">
              A hackathon organized by the DoCSoc at Imperial College London, where I was the Technical Lead.
            </p>

            <div class="flex gap-4">
              <InspiraRippleButton @click="">View the Project</InspiraRippleButton>
              <InspiraRippleButton>View the Repository</InspiraRippleButton>
            </div>
          </div>

          <img src="/images/projects/ichack.png" alt="IC Hack '25" class="w-96" />
        </div>
      </InspiraCardSpotlight>
    </div>
  </MySection>
</template>