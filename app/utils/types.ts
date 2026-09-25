import type { InjectionKey, Ref } from "vue";

export type DockOrientation = "vertical" | "horizontal";
export type DockPlacement = "top" | "middle" | "bottom";

export const MOUSE_X_INJECTION_KEY = Symbol("mouse-x") as InjectionKey<Ref<number>>;
export const MOUSE_Y_INJECTION_KEY = Symbol("mouse-y") as InjectionKey<Ref<number>>;
export const MAGNIFICATION_INJECTION_KEY = Symbol("magnification") as InjectionKey<number>;
export const DISTANCE_INJECTION_KEY = Symbol("distance") as InjectionKey<number>;
export const ORIENTATION_INJECTION_KEY = Symbol("orientation") as InjectionKey<DockOrientation>;
export const SCROLL_CONTAINER_KEY = Symbol("scroll-container") as InjectionKey<Ref<HTMLElement | null>>;

export type Experience = {
  image: string;
  title: string;
  duration: string;
  description: string;
}