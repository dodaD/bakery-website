<script setup>
import { usePopupWindowStore } from "@/stores/popUpWindowStore";
import { useScreenSizeComposable } from "@/composables/screenSizeComposable.js";

const popupInfo = usePopupWindowStore();
const mobileStore = useScreenSizeComposable();
</script>

<template>
  <div class="popup-window-wrapper">
    <TransitionGroup name="list" tag="ul">
      <div
        class="alert-message"
        :class="{
          'hide-message': !popupInfo.showMessage,
          'alert-message-mobile': mobileStore.isMobile.value,
        }"
        v-for="popup in popupInfo.popupWindows"
        :key="popup"
      >
        <div>{{ popup.message }}</div>

        <div class="alert-buttons-container" v-if="popup.showButton">
          <button
            @click="popup.buttonFunction"
            class="rectangle-rounded-button answer-button"
          >
            {{ popup.buttonLabel }}
          </button>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.popup-window-wrapper {
  position: fixed;
  top: 10px;
  right: 50%;
  display: flex;
  flex-direction: column;
  transform: translateX(50%);
  z-index: 15;
}

.alert-message {
  height: 100px;
  width: 500px;
  padding: 5px 10px;
  margin: 5px 0;
  box-sizing: border-box;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s allow-discrete;
  border: 1px solid var(--glass-border);
  background-color: rgba(0, 0, 0, 0.37);
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

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
