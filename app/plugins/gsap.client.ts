import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import MorphSVGPlugin from 'gsap/MorphSVGPlugin';

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(SplitText, MorphSVGPlugin);
});
