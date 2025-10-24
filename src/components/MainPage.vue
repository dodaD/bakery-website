<script setup>
import { ref } from "vue";
import NavigationComponent from "./NavigationComponent.vue";
import HeroComponent from "./HeroComponent.vue";
import BestSellersComponent from "./BestSellersComponent.vue";
import ReviewComponent from "./ReviewComponent.vue";
import TopPicksSwiper from "./TopPicksSwiper.vue";
import FooterComponent from "./FooterComponent.vue";
import ShoppingCart from "./ShoppingCart.vue";
import { useMobileStore } from "@/stores/isMobileStore.js";
import { useCommentsStore } from "@/stores/commentsStore.js";

const mobileStore = useMobileStore();

const { comments } = useCommentsStore();
const bestSellers = ref(null);
function scrollToBestSellers() {
  bestSellers.value?.scrollIntoView({ behavior: "smooth" });
}

const footer = ref(null);
function scrollToContacts() {
  footer.value?.scrollIntoView({ behavior: "smooth" });
}

function scrollToCake(id) {
  const el = document.getElementById(`cake-${id}`);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
}

const shoppingCart = ref(null);
const showCart = ref(false);

function addToCart(item) {
  shoppingCart.value?.addItemToCart(item);
}

const isBuyMessageShowing = ref(false);
const boughtItem = ref(null);

function showBuyMessage(item) {
  if (item != null) {
    boughtItem.value = item?.title || item?.name;
  }
  isBuyMessageShowing.value = true;
}

function closeBuyMessage() {
  isBuyMessageShowing.value = false;
  boughtItem.value = null;
}
</script>

<template>
  <div class="background-tint" v-if="isBuyMessageShowing" />
  <div class="buy-message glass-border" v-if="isBuyMessageShowing">
    This function is not available yet! The payment system is still in
    development. Thank you for your your constant support and understanding!
    <div class="bought-item" v-if="boughtItem != null">
      The {{ boughtItem }} will be waiting for you once it's ready.
    </div>
  </div>
  <button
    class="close-cart-button"
    @click="closeBuyMessage"
    v-if="isBuyMessageShowing"
  >
    <font-awesome-icon icon="fa-solid fa-circle-xmark" />
  </button>

  <div
    class="content-wrapper"
    :class="{ 'content-wrapper-mobile': mobileStore.isMobile }"
  >
    <NavigationComponent
      @scrollToContacts="scrollToContacts"
      @showCake="scrollToCake"
      @openCart="showCart = true"
    />
    <ShoppingCart
      :showCart="showCart"
      @closeCart="showCart = false"
      @buyNow="showBuyMessage"
      ref="shoppingCart"
    />

    <HeroComponent
      @exploreClicked="scrollToBestSellers"
      @buyNow="showBuyMessage"
    />

    <div ref="bestSellers">
      <BestSellersComponent @addToCart="addToCart" />
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
        :key="comments[n].id"
        :name="comments[n].author"
        :text="comments[n].text"
        :rating="comments[n].rating"
        class="pseudo--backgroundr"
      />
    </div>

    <div class="border-wrapper">
      <div class="our-pick-title cornered-border">Our Top Picks</div>
    </div>
    <TopPicksSwiper @buyNow="showBuyMessage" />

    <div class="footer-container" ref="footer">
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

.buy-message {
  width: 600px;
  height: 400px;
  position: absolute;
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

.bought-item {
  margin: 30px 0;
  font-weight: 300;
  font-style: italic;
  font-size: 24px;
}

.close-cart-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 25px;
  z-index: 20;
}
</style>
