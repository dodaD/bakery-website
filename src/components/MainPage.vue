<script setup>
import NavigationComponent from "./NavigationComponent.vue";
import HeroComponent from "./HeroComponent.vue";
import BestSellersComponent from "./BestSellersComponent.vue";
import ReviewComponent from "./ReviewComponent.vue";
import TopPicksScrollComponent from "./TopPicksSwiper.vue";
import FooterComponent from "./FooterComponent.vue";
import { useCommentsStore } from "@/stores/commentsStore.js";
import { ref } from "vue";

const { comments } = useCommentsStore();
const bestSellers = ref(null);
const scrollToBestSellers = () => {
  bestSellers.value?.scrollIntoView({ behavior: "smooth" });
};

const footer = ref(null);
const scrollToContacts = () => {
  footer.value?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div class="content-wrapper">
    <NavigationComponent @scrollToContacts="scrollToContacts" />

    <HeroComponent @exploreClicked="scrollToBestSellers" />

    <div ref="bestSellers">
      <BestSellersComponent />
    </div>

    <div class="border-wrapper">
      <div class="reviews-title cornered-border">Customer Reviews</div>
    </div>
    <div class="customer-reviews-container">
      <ReviewComponent
        v-for="n in 3"
        :key="comments[n].id"
        :name="comments[n].author"
        :text="comments[n].text"
        :rating="comments[n].rating"
        class="review"
      />
    </div>

    <div class="border-wrapper">
      <div class="our-pick-title cornered-border">Our Top Picks</div>
    </div>
    <TopPicksScrollComponent />

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

.customer-reviews-container {
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
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
</style>
