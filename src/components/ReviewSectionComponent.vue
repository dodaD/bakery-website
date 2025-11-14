<script setup>
import BorderTitleComponent from "./BorderTitleComponent.vue";
import ReviewComponent from "../components/ReviewComponent.vue";
import { useReviewsStore } from "@/stores/reviewsStore.js";
import { useMobileStore } from "@/stores/isMobileStore.js";

const reviewsStore = useReviewsStore();
const mobileStore = useMobileStore();
</script>

<template>
  <BorderTitleComponent title="Customer Reviews" />
  <div
    class="customer-reviews-container"
    :class="{ 'customer-reviews-container-mobile': mobileStore.isMobile }"
  >
    <ReviewComponent
      v-for="n in 3"
      :key="reviewsStore.reviews[n].id"
      :review="reviewsStore.reviews[n]"
      class="pseudo--backgroundr"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

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
</style>
