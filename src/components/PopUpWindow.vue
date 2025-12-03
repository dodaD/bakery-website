<script setup>
import { usePopUpWindowComposable } from "@/components/screenSizeComposable/popUpWindowComposable";
import { useScreenSizeComposable } from "@/components/screenSizeComposable/isMobileStore.js";

const popUpInfo = usePopUpWindowComposable();
const mobileStore = useScreenSizeComposable();

console.log(popUpInfo.showMessage.value);
</script>

<template>
  <div
    class="alert-message"
    :class="{
      'hide-message': !popUpInfo.showMessage.value,
      'alert-message-mobile': mobileStore.isMobile.value,
    }"
  >
    <div>{{ popUpInfo.message.value }}</div>

    <div class="alert-buttons-container" v-if="popUpInfo.showButtons.value">
      <button
        @click="popUpInfo.buttonFunction.value"
        class="rectangle-rounded-button answer-button"
      >
        Yes
      </button>
      <button class="rectangle-rounded-button answer-button">No</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.alert-message {
  height: 100px;
  width: 500px;
  padding: 5px 10px;
  box-sizing: border-box;
  border-radius: 20px;
  position: fixed;
  top: 10px;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s allow-discrete;
  border: 1px solid var(--glass-border);
  background-color: rgba(0, 0, 0, 0.37);
  z-index: 15;
}

.alert-message-mobile {
  width: 80%;
  height: 80px;
  font-size: 14px;
  padding: 10px 15px;
  text-align: center;
  background-color: var(--footer-accent);
}

.answer-button {
  margin: 0 5px;
}

.alert-buttons-container {
  display: flex;
  justify-content: center;
}
</style>
