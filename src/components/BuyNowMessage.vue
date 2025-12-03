<script setup>
import { useScreenSizeComposable } from "@/components/screenSizeComposable/isMobileStore.js";
import { usePopUpWindowComposable } from "@/components/screenSizeComposable/popUpWindowComposable.js";

const mobileStore = useScreenSizeComposable();
const popUpInfo = usePopUpWindowComposable();
</script>

<template>
  <div
    class="background-tint"
    v-if="popUpInfo.boughtItem.value !== null"
    @click="popUpInfo.boughtItem.value = null"
  />
  <div
    class="buy-message glass-border"
    v-if="popUpInfo.boughtItem.value !== null"
    :class="{ 'buy-message-mobile': mobileStore.isMobile.value }"
  >
    This function is not available yet! The payment system is still in
    development. Thank you for your your constant support and understanding!
    <div class="bought-item" v-if="popUpInfo.boughtItem.value != ''">
      The {{ popUpInfo.boughtItem.value }} will be waiting for you once it's
      ready.
    </div>
  </div>
  <button
    class="close-buy-button"
    @click="popUpInfo.boughtItem.value = null"
    v-if="popUpInfo.boughtItem.value !== null"
  >
    <font-awesome-icon icon="fa-solid fa-circle-xmark" />
  </button>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.buy-message {
  width: 600px;
  height: 400px;
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: var(--background);
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: "Inter";
  padding: 0 40px;
  border-radius: 50px;
  text-align: center;
  line-height: 30px;
}

.buy-message-mobile {
  width: 90%;
  box-sizing: border-box;
  text-align: left;
}

.bought-item {
  margin: 30px 0;
  font-weight: 300;
  font-style: italic;
  font-size: 24px;
}

.close-buy-button {
  position: fixed;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 25px;
  z-index: 20;
}
</style>
