import { ref } from "vue";

const showMessage = ref(false);
const boughtItem = ref(null);
const message = ref("");
const showButtons = ref(false);
const buttonFunction = ref(null);

export function usePopUpWindowComposable() {
  function showPopUpWindow(messageText, callback) {
    showMessage.value = true;
    message.value = messageText;
    buttonFunction.value = callback;
    showButtons.value = buttonFunction.value !== null;

    setTimeout(() => {
      showMessage.value = false;
      message.value = "";
      showButtons.value = false;
      buttonFunction.value = null;
    }, 2500);
  }

  function setMessage(text) {
    message.value = text;
    showMessage.value = true;
  }

  return {
    showMessage,
    message,
    showButtons,
    buttonFunction,
    boughtItem,
    showPopUpWindow,
    setMessage,
  };
}
