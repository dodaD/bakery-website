import { ref } from "vue";

export function useOrientationState() {
  const isMobile = ref(window.screen.width < 500);

  return { isMobile };
}
