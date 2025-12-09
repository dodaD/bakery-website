import { defineStore } from "pinia";
import { ref } from "vue";

export const usePopupWindowStore = defineStore("popupStore", () => {
  const showMessage = ref(false);
  const boughtItem = ref("");
  const showBuyNowMessage = ref(false);
  const message = ref("");
  const showButtons = ref(false);
  const buttonFunction = ref(null);
  const buttonText = ref("");

  function showPopupWindow(messageText, callback, label) {
    showMessage.value = true;
    message.value = messageText;
    buttonFunction.value = callback;
    buttonText.value = label;
    showButtons.value = buttonFunction.value !== null;

    setTimeout(() => {
      showMessage.value = false;
      message.value = "";
      showButtons.value = false;
      buttonFunction.value = null;
      buttonText.value = "";
    }, 2500);
  }

  function openBuyNowMessage(item) {
    boughtItem.value = item;
    showBuyNowMessage.value = true;
  }

  function closeBuyNowMessage() {
    showBuyNowMessage.value = false;
    boughtItem.value = "";
  }

  return {
    showMessage,
    message,
    showButtons,
    buttonFunction,
    buttonText,
    boughtItem,
    showBuyNowMessage,
    showPopupWindow,
    openBuyNowMessage,
    closeBuyNowMessage,
  };
});
