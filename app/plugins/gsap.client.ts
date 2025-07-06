import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import MorphSVGPlugin from 'gsap/MorphSVGPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(SplitText, MorphSVGPlugin, ScrollTrigger);
});
