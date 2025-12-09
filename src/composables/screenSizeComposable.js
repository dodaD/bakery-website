import { ref } from "vue";

export function useScreenSizeComposable() {
  const isMobile = ref(window.screen.width < 500);

  return { isMobile };
}
