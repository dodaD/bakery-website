import { defineStore } from "pinia";

export const useMobileStore = defineStore("isMobile", {
  state: () => ({
    isMobile: window.screen.width < 500,
  }),
  getters: {
    getIsMobile: (state) => state.isMobile,
  },
  actions: {
    setIsMobile(value) {
      this.isMobile = value;
    },
  },
});
