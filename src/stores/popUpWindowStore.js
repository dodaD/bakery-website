import { defineStore } from "pinia";
import { ref } from "vue";

export const usePopupWindowStore = defineStore("popupStore", () => {
  const showMessage = ref(false);
  const boughtItem = ref("");
  const showBuyNowMessage = ref(false);
  const popupWindows = ref([]);

  function showPopupWindow(messageText, callback, label) {
    showMessage.value = true;
    popupWindows.value.push({
      message: messageText,
      buttonFunction: callback,
      buttonLabel: label,
      showButton: callback !== null,
    });

    setTimeout(() => {
      popupWindows.value.splice(0, 1);
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
    boughtItem,
    showBuyNowMessage,
    showPopupWindow,
    openBuyNowMessage,
    closeBuyNowMessage,
    popupWindows,
  };
});
