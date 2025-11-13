import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useBoughtItemStore = defineStore("boughtItem", () => {
  const boughtItem = ref(null);

  return { boughtItem };
});
