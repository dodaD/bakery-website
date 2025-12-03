<script setup>
import "swiper/css";
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useTopPicksStore } from "@/topPicksStore.js";
import { useScreenSizeComposable } from "@/components/screenSizeComposable/isMobileStore.js";
import BorderTitleComponent from "./reusabaleComponents/BorderTitleComponent.vue";
import TopPicksSlideComponent from "./TopPicksSlideComponent.vue";

const swiperRef = ref(null);
const topPicksStore = useTopPicksStore();
const mobileStore = useScreenSizeComposable();

function goToNextSlide() {
  swiperRef.value?.slideNext();
}

function goToPrevSlide() {
  swiperRef.value?.slidePrev();
}

const swiperIndex = computed(() => {
  return swiperRef.value ? swiperRef.value.activeIndex : 1;
});
</script>

<template>
  <BorderTitleComponent>Our Top Picks</BorderTitleComponent>
  <Swiper
    :slides-per-view="1"
    :speed="400"
    :loop="true"
    @swiper="swiperRef = $event"
  >
    <SwiperSlide
      v-for="(item, index) in topPicksStore.topPicks"
      :key="index"
      class="slide-wrapper"
      :class="{
        'pseudo-glass-background': !mobileStore.isMobile.value,
        'glass-border': !mobileStore.isMobile.value,
        'slide-wrapper-mobile': mobileStore.isMobile.value,
      }"
    >
      <TopPicksSlideComponent :item="item" />

      <div class="navigation-area">
        <button @click="goToPrevSlide" class="prev-button circle-button">
          <font-awesome-icon icon="fa-solid fa-arrow-left" />
        </button>
        <div class="slide-counter">{{ swiperIndex + 1 }} / 4</div>
        <button @click="goToNextSlide" class="next-button circle-button">
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </button>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.slide-wrapper {
  margin-top: 60px;
  height: 350px;
  width: 100%;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  padding: 20px 30px 50px;
  box-sizing: border-box;
}

.slide-wrapper-mobile {
  height: auto;
  padding: 0;
  justify-content: center;
  margin-top: 170px;
}

.slide-wrapper:hover {
  box-shadow: inset 0 0 40px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}
.navigation-area {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.slide-counter {
  font-size: 14px;
  margin: 0 5px;
}

.buy-button {
  margin-right: auto;
}
</style>
