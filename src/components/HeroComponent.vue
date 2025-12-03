<script setup>
import HeroSwiper from "./HeroSwiper.vue";
import ReviewComponent from "./ReviewComponent.vue";
import { useReviewsStore } from "@/reviewsStore.js";
import { useScreenSizeComposable } from "@/components/screenSizeComposable/isMobileStore.js";

const reviewsStore = useReviewsStore();
const mobileStore = useScreenSizeComposable();

function scrollToSection(id) {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <div
    class="hero-wrapper"
    :class="{ 'hero-wrapper-mobile': mobileStore.isMobile.value }"
  >
    <div class="hero-grid">
      <div class="title-wrapper">
        <div class="title">Buy Local</div>
        <div class="description">
          Discover our artisanal bakery, where every cake is crafted with
          passion, using premium ingredients for unforgettable flavors.
        </div>
        <button
          class="rectangle-rounded-button"
          @click="scrollToSection('bestSellers')"
        >
          Explore
        </button>
      </div>

      <div class="product-scroll-wrapper" v-if="!mobileStore.isMobile.value">
        <HeroSwiper />
      </div>

      <div class="review-container">
        <ReviewComponent :review="reviewsStore.reviews[0]" />
      </div>
    </div>
    <img src="/CakePicture.jpg" class="photo" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.hero-wrapper {
  margin-top: 95px;
  position: relative;
  display: flex;
  min-height: 800px;
  flex-direction: column;
  background-image: radial-gradient(
    circle 300px at center,
    /* circle radius & position */ var(--background-dark-accent) 0%,
    var(--background-accent) 70%,
    var(--background) 100%
  );
}

.hero-wrapper-mobile {
  background-image: unset;

  .hero-grid {
    display: flex;
    flex-direction: column;
    height: unset;
    margin-bottom: 50px;
  }

  .title-wrapper {
    padding: 0;
  }

  .description {
    box-shadow: var(--footer-accent) -10px 15px 0px;
    backdrop-filter: blur(6px);
    padding: 15px;
    border-radius: 10px;
    margin: 25px 0;
  }

  .review-container {
    transform: translateY(0%);
    margin-top: 40px;
  }
}

.hero-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 1fr;
  width: 100%;
  height: 600px;
  z-index: 1;
}

.hero-grid-mobile {
}

.title-wrapper {
  grid-column: 1;
  grid-row: 1;
  display: flex;
  padding-right: 100px;
  flex-direction: column;
  max-width: 670px;
}

.title {
  font-weight: 600;
  font-size: 90px;
}

.description {
  margin-bottom: 20px;
}

.product-scroll-wrapper {
  grid-column: 2;
  grid-row: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-left: auto;
}

.review-container {
  grid-column: 1;
  grid-row: 2;
  transform: translateY(-30%);
}

.photo {
  width: auto;
  height: 800px;
  opacity: 0.85;
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 50%;
  transform: translateX(50%);
}

.hero-title {
  width: 100%;
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  color: var(--font-colour);
  z-index: 1;
  margin: 40px 0;
}
</style>
