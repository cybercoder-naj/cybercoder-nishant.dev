<script setup lang="ts">
import { Motion, type VariantType } from "motion-v";
import type { HTMLAttributes } from "vue";
import { cn } from "@inspira-ui/plugins";

interface CursorAnimationVariants {
  initial: VariantType;
  animate: VariantType;
}

interface Props {
  text: string | string[];
  as?: string;
  speed?: number;
  initialDelay?: number;
  waitTime?: number;
  deleteSpeed?: number;
  loop?: boolean;
  showCursor?: boolean;
  hideCursorOnType?: boolean;
  cursorChar?: string;
  cursorAnimationVariants?: CursorAnimationVariants;
  cursorClass?: HTMLAttributes["class"];
  class?: HTMLAttributes["class"];
}

defineOptions({ inheritAttrs: false });

const {
  text,
  as = "div",
  speed = 50,
  initialDelay = 0,
  waitTime = 2000,
  deleteSpeed = 30,
  loop = true,
  showCursor = true,
  hideCursorOnType = false,
  cursorChar = "|",
  cursorClass = "ml-1",
  cursorAnimationVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.01,
        repeat: Infinity,
        repeatDelay: 0.4,
        repeatType: "reverse",
      },
    },
  },
  class: className = "",
} = defineProps<Props>();

const texts = computed(() => (Array.isArray(text) ? text : [text]));
const displayText = ref("");
const currentIndex = ref(0);
const currentTextIndex = ref(0);
const isDeleting = ref(false);
let timeoutId: ReturnType<typeof setTimeout> | undefined;

const currentText = computed(() => texts.value[currentTextIndex.value] ?? "");
const hideCursor = computed(
  () =>
    hideCursorOnType && (currentIndex.value < currentText.value.length || isDeleting.value),
);

function clearTypingTimeout() {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = undefined;
  }
}

function scheduleTyping(delay: number) {
  clearTypingTimeout();
  timeoutId = setTimeout(typeNextCharacter, Math.max(0, delay));
}

function typeNextCharacter() {
  if (isDeleting.value) {
    if (!displayText.value) {
      isDeleting.value = false;

      if (currentTextIndex.value === texts.value.length - 1 && !loop) return;

      currentTextIndex.value = (currentTextIndex.value + 1) % texts.value.length;
      currentIndex.value = 0;
      scheduleTyping(waitTime);
      return;
    }

    displayText.value = displayText.value.slice(0, -1);
    currentIndex.value = displayText.value.length;
    scheduleTyping(deleteSpeed);
    return;
  }

  if (currentIndex.value < currentText.value.length) {
    displayText.value += currentText.value[currentIndex.value];
    currentIndex.value += 1;
    scheduleTyping(speed);
    return;
  }

  if (texts.value.length > 1) {
    isDeleting.value = true;
    scheduleTyping(waitTime);
  }
}

function resetTyping() {
  clearTypingTimeout();
  displayText.value = "";
  currentIndex.value = 0;
  currentTextIndex.value = 0;
  isDeleting.value = false;
  scheduleTyping(initialDelay);
}

onMounted(resetTyping);
onBeforeUnmount(clearTypingTimeout);

watch(() => text, resetTyping, { deep: true });
</script>

<template>
  <component :is="as" v-bind="$attrs" :class="cn('inline tracking-tight whitespace-pre-wrap', className)">
    <span>{{ displayText }}</span>

    <Motion v-if="showCursor" as="span" :variants="cursorAnimationVariants" initial="initial" animate="animate"
      :class="cn(cursorClass, hideCursor && 'hidden')">
      {{ cursorChar }}
    </Motion>
  </component>
</template>
