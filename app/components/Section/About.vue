<script setup lang="ts">
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

const container = useTemplateRef<HTMLElement>('container');

const aboutText1 = useTemplateRef<HTMLParagraphElement>('about-text-1');
const aboutText2 = useTemplateRef<HTMLParagraphElement>('about-text-2');
const aboutText3 = useTemplateRef<HTMLParagraphElement>('about-text-3');

const aboutImg1 = useTemplateRef<HTMLParagraphElement>('about-img-1');
const aboutImg2 = useTemplateRef<HTMLParagraphElement>('about-img-2');
const aboutImg3 = useTemplateRef<HTMLParagraphElement>('about-img-3');

const aboutTexts = [aboutText1, aboutText2, aboutText3] as const;

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.value,
      start: 'top top',
      end: '+=1000',
      scrub: true,
      pin: true
    }
  });

  const splits = aboutTexts.map(text =>
    SplitText.create(text.value, {
      type: 'words',
      wordsClass: 'split-word'
    })
  );

  gsap.set([aboutImg2.value, aboutImg3.value], {
    opacity: 0
  });
  gsap.set(
    splits.reduce((acc, split) => [...acc, ...split.words], [] as Element[]),
    {
      opacity: 0.2
    }
  );

  tl.to(splits[0]!.words, {
    opacity: 1,
    duration: 0.5,
    stagger: 0.05
  })
    .to(aboutImg1.value, { opacity: 0, duration: 0.5 })
    .to(aboutImg2.value, { opacity: 1, duration: 0.5 }, '<')
    .to(
      splits[1]!.words,
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.05
      },
      '<'
    )
    .to(aboutImg2.value, { opacity: 0, duration: 0.5 })
    .to(aboutImg3.value, { opacity: 1, duration: 0.5 }, '<')
    .to(
      splits[2]!.words,
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.05
      },
      '<'
    );
});
</script>

<template>
  <section class="relative w-full">
    <div ref="container" class="h-[1000px]">
      <div class="flex h-full gap-20 pt-24 max-md:flex-col-reverse">
        <div class="relative max-md:h-[480px] max-md:flex-1 md:w-1/2">
          <img
            ref="about-img-1"
            src="/about-img-1.jpg"
            class="absolute inset-0 aspect-square w-full object-cover max-md:max-h-[480px]"
            alt="I grew up in Kolkata, and I wrote my first lines of code when I was 11." />
          <img
            ref="about-img-2"
            src="/about-img-2.jpg"
            class="absolute inset-0 aspect-square w-full object-cover max-md:max-h-[480px]"
            alt="Something just clicked — and I never really stopped." />
          <img
            ref="about-img-3"
            src="/about-img-3.jpg"
            class="absolute inset-0 aspect-square w-full object-cover max-md:max-h-[480px]"
            alt="Today, I’m pursuing a degree in the UK, still just as curious." />
        </div>
        <div class="heading-5 flex flex-col gap-4">
          <p ref="about-text-1">
            I grew up in Kolkata, and I wrote my first lines of code when I was
            11.
          </p>
          <p ref="about-text-2">
            Something just clicked — and I never really stopped.
          </p>
          <p ref="about-text-3">
            Today, I’m pursuing a degree in the UK, still just as curious.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  </section>
</template>
