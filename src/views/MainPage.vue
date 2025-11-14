<script setup>
import NavigationComponent from "../components/NavigationComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import BestSellersComponent from "../components/BestSellersComponent.vue";
import ReviewSectionComponent from "@/components/ReviewSectionComponent.vue";
import TopPicksComponent from "../components/TopPicksComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import BuyNowMessage from "../components/BuyNowMessage.vue";
import AlertMessageComponent from "../components/AlertMessageComponent.vue";
import TrendyCakesComponent from "../components/TrendyCakesComponent.vue";
import { useMobileStore } from "@/stores/isMobileStore.js";
import { useReviewsStore } from "@/stores/reviewsStore.js";

const mobileStore = useMobileStore();
const reviewsStore = useReviewsStore();
</script>

<template>
  <AlertMessageComponent />
  <BuyNowMessage />

  <div
    class="content-wrapper"
    :class="{ 'content-wrapper-mobile': mobileStore.isMobile }"
  >
    <NavigationComponent />

    <HeroComponent />
    <TrendyCakesComponent />

    <div id="bestSellers">
      <BestSellersComponent />
    </div>

    <ReviewSectionComponent />

    <TopPicksComponent />

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
