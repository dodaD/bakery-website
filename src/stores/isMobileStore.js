import { defineStore } from "pinia";
import { ref } from "vue";

export const useMobileStore = defineStore("isMobile", () => {
  const isMobile = ref(window.screen.width < 500);

  return { isMobile };
});
