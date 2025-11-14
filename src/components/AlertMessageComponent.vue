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

.answer-button {
  margin: 0 5px;
}

.alert-buttons-container {
  display: flex;
  justify-content: center;
}
</style>
