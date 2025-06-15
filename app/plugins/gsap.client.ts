import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import MorphSVGPlugin from 'gsap/MorphSVGPlugin';

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText, MorphSVGPlugin);
});
