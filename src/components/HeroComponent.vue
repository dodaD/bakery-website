<script setup>
import HeroSwiper from "./HeroSwiper.vue";
import ReviewComponent from "./ReviewComponent.vue";
import { useCommentsStore } from "@/stores/commentsStore.js";
import { useMobileStore } from "@/stores/isMobileStore.js";
import { scrollUtils } from "@/scrollToSection.js";

const commentsStore = useCommentsStore();
const mobileStore = useMobileStore();
</script>

<template>
  <div
    class="hero-wrapper"
    :class="{ 'hero-wrapper-mobile': mobileStore.isMobile }"
  >
    <div
      class="hero-grid"
      :class="{ 'hero-grid-mobile': mobileStore.isMobile }"
    >
      <div
        class="title-wrapper"
        :class="{ 'title-wrapper-mobile': mobileStore.isMobile }"
      >
        <div class="title">Buy Local</div>
        <div
          class="description"
          :class="{ 'description-mobile': mobileStore.isMobile }"
        >
          Discover our artisanal bakery, where every cake is crafted with
          passion, using premium ingredients for unforgettable flavors.
        </div>
        <button
          class="rectangle-rounded-button"
          @click="scrollUtils.scrollToSection('bestSellers')"
        >
          Explore
        </button>
      </div>

      <div class="product-scroll-wrapper" v-if="!mobileStore.isMobile">
        <HeroSwiper />
      </div>

      <div
        class="review-container"
        :class="{ 'review-container-mobile': mobileStore.isMobile }"
      >
        <ReviewComponent
          :name="commentsStore.comments[0].author"
          :text="commentsStore.comments[0].text"
          :rating="commentsStore.comments[0].rating"
        />
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
    circle 600px at center,
    /* circle radius & position */ var(--background-dark-accent) 0%,
    var(--background-accent) 70%,
    var(--background) 100%
  );
}

.hero-wrapper-mobile {
  background-image: unset;
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
  display: flex;
  flex-direction: column;
  height: unset;
  margin-bottom: 50px;
}

.title-wrapper {
  grid-column: 1;
  grid-row: 1;
  display: flex;
  padding-right: 100px;
  flex-direction: column;
  max-width: 670px;
}

.title-wrapper-mobile {
  padding: 0;
}

.title {
  font-weight: 600;
  font-size: 90px;
}

.description {
  margin-bottom: 20px;
}

.description-mobile {
  box-shadow: var(--footer-accent) -10px 15px 0px;
  backdrop-filter: blur(6px);
  padding: 15px;
  border-radius: 10px;
  margin: 25px 0;
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

.review-container-mobile {
  transform: translateY(0%);
  margin-top: 40px;
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
