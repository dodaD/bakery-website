<script setup>
import NavigationComponent from "../components/NavigationComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import BestSellersComponent from "../components/BestSellersComponent.vue";
import ReviewComponent from "../components/ReviewComponent.vue";
import TopPicksSwiper from "../components/TopPicksSwiper.vue";
import FooterComponent from "../components/FooterComponent.vue";
import BuyNowMessage from "../components/BuyNowMessage.vue";
import AlertMessageComponent from "../components/AlertMessageComponent.vue";
import TrendyCakesComponent from "../components/TrendyCakesComponent.vue";
import { useMobileStore } from "@/stores/isMobileStore.js";
import { useCommentsStore } from "@/stores/commentsStore.js";

const mobileStore = useMobileStore();
const commentsStore = useCommentsStore();
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

    <div class="border-wrapper">
      <div class="reviews-title cornered-border">Customer Reviews</div>
    </div>
    <div
      class="customer-reviews-container"
      :class="{ 'customer-reviews-container-mobile': mobileStore.isMobile }"
    >
      <ReviewComponent
        v-for="n in 3"
        :key="commentsStore.comments[n].id"
        :name="commentsStore.comments[n].author"
        :text="commentsStore.comments[n].text"
        :rating="commentsStore.comments[n].rating"
        class="pseudo--backgroundr"
      />
    </div>

    <div class="border-wrapper">
      <div class="our-pick-title cornered-border">Our Top Picks</div>
    </div>
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

.customer-reviews-container {
  display: flex;
  justify-content: space-between;
  margin: 40px 0 80px;
  gap: 30px;
}

.customer-reviews-container-mobile {
  flex-direction: column;
  align-items: center;
}

.reviews-title,
.our-pick-title {
  padding: 10px 25px;
  font-size: 36px;
  font-weight: 700;
}

.border-wrapper {
  display: flex;
  justify-content: center;
  margin: 40px 0;
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
