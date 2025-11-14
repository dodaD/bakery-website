import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useShoppingCartStore } from "@/stores/shoppingCartStore";

export const useAlertMessageStore = defineStore("alertMessage", () => {
  const showMessage = ref(false);

  const message = ref("");
  const showButtons = ref(false);
  const buttonsFunction = ref(null);

  watch(showMessage, (newValue) => {
    if (newValue) {
      setTimeout(() => {
        showMessage.value = false;
      }, 2500);
    }
  });

  function confirmAlert(isConfirmed) {
    if (buttonsFunction.value == "addedToCart") {
      const shoppingCartStore = useShoppingCartStore();
      shoppingCartStore.showCart = isConfirmed;

      showMessage.value = false;
    }
  }

  return { showMessage, message, showButtons, buttonsFunction, confirmAlert };
});
