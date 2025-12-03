<script setup>
import NavigationComponent from "../components/HeaderComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import BestSellersComponent from "../components/BestSellersComponent.vue";
import ReviewSectionComponent from "@/components/ReviewSectionComponent.vue";
import TopPicksSwiper from "../components/TopPicksSwiper.vue";
import FooterComponent from "../components/FooterComponent.vue";
import BuyNowMessage from "../components/BuyNowMessage.vue";
import AlertMessageComponent from "../components/PopUpWindow.vue";
import TrendyCakesComponent from "../components/TrendyCakesComponent.vue";
import { useScreenSizeComposable } from "@/components/screenSizeComposable/isMobileStore.js";

const mobileStore = useScreenSizeComposable();
</script>

<template>
  <AlertMessageComponent />
  <BuyNowMessage />

  <div
    class="content-wrapper"
    :class="{ 'content-wrapper-mobile': mobileStore.isMobile.value }"
  >
    <NavigationComponent />

    <HeroComponent />
    <TrendyCakesComponent />

    <div id="bestSellers">
      <BestSellersComponent />
    </div>

    <ReviewSectionComponent />

    <TopPicksSwiper />

    <div class="footer-container" id="footer">
      <FooterComponent />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.content-wrapper {
  max-width: 1500px;
  width: 100%;
  background-color: var(--background);
  padding: 25px 40px;
  box-sizing: border-box;
  margin: 0 auto;
}

.content-wrapper-mobile {
  overflow: hidden;
  padding: 25px 30px 0;
}

.close-cart-button {
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
