<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";

interface Props {
  experiences: Experience[];
  class?: HTMLAttributes["class"];
}
const {
  experiences,
  class: className = ""
} = defineProps<Props>();

const expandedIndex = ref<number | null>(null);
function setExpanded(index: number | null) {
  expandedIndex.value = index;
}
</script>

<template>
  <div :class="cn(`flex h-96 w-full gap-2`, className)">
    <div v-for="(exp, i) in experiences" :key="i"
      class="relative flex h-full flex-1 cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out"
      :class="expandedIndex === i ? 'flex-3' : ''" @mouseenter="setExpanded(i)" @mouseleave="setExpanded(null)">
      <img class="h-full object-cover w-full" :src="exp.image" :alt="exp.title" />
      <transition>
        <div v-if="expandedIndex === i"
          class="absolute inset-0 bg-linear-to-t from-black to-transparent flex flex-col items-start justify-end p-12 wrap-break-word">
          <h3 class="text-white text-2xl font-bold">{{ exp.title }} </h3>
          <h4 class="text-white text-lg">{{ exp.duration }}</h4>
          <p class="text-white text-lg mt-2">{{ exp.description }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active {
  transition: opacity 0.3s ease 0.35s;
}

.v-leave-active {
  transition: opacity 0.15s ease 0s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>