<script setup>
import { useAlertMessageStore } from "@/stores/alertMessage";
import { useMobileStore } from "@/stores/isMobileStore.js";

const alertStore = useAlertMessageStore();
const mobileStore = useMobileStore();
</script>

<template>
  <div
    class="alert-message"
    :class="{
      'hide-message': !alertStore.showMessage,
      'alert-message-mobile': mobileStore.isMobile,
    }"
  >
    <div>{{ alertStore.message }}</div>

    <div class="alert-buttons-container" v-if="alertStore.showButtons">
      <button
        @click="alertStore.confirmAlert(true)"
        class="rectangle-rounded-button answer-button"
      >
        Yes
      </button>
      <button
        @click="alertStore.confirmAlert(false)"
        class="rectangle-rounded-button answer-button"
      >
        No
      </button>
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
