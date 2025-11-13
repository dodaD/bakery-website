<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { useTopPicksStore } from "@/stores/topPicksStore.js";
import { useMobileStore } from "@/stores/isMobileStore.js";
import { useBoughtItemStore } from "@/stores/boughtItem.js";
import "swiper/css";
import "swiper/css/navigation";

const modules = [Navigation];
const swiperRef = ref(null);

const topPicksStore = useTopPicksStore();
const mobileStore = useMobileStore();
const boughtItemStore = useBoughtItemStore();

function goToNextSlide() {
  swiperRef.value?.$el.swiper.slideNext();
}

function goToPrevSlide() {
  swiperRef.value?.$el.swiper.slidePrev();
}
</script>

<template>
  <Swiper
    :modules="modules"
    :slides-per-view="1"
    :speed="400"
    ref="swiperRef"
    :loop="true"
  >
    <SwiperSlide
      v-for="(item, index) in topPicksStore.topPicks"
      :key="index"
      class="slide-wrapper"
      :class="{
        'slide-wrapper-mobile': mobileStore.isMobile,
        'pseudo-glass-background': !mobileStore.isMobile,
        'glass-border': !mobileStore.isMobile,
      }"
    >
      <img
        :src="item.image"
        class="slide-image"
        :class="{ 'slide-image-mobile': mobileStore.isMobile }"
      />

      <div
        class="slide-content"
        :class="{
          'slide-content-mobile': mobileStore.isMobile,
          'pseudo-glass-background': mobileStore.isMobile,
          'glass-border': mobileStore.isMobile,
        }"
      >
        <div class="slide-title">{{ item.title }}</div>
        <div class="slide-description">{{ item.description }}</div>
        <div class="slide-funny-part">{{ item.funnyPart }}</div>

        <div class="navigation-area">
          <button
            class="rectangle-rounded-button buy-button"
            @click="boughtItemStore.boughtItem = item.title"
          >
            Buy now
          </button>
          <button @click="goToPrevSlide" class="prev-button circle-button">
            <font-awesome-icon icon="fa-solid fa-arrow-left" />
          </button>
          <div class="slide-counter">{{ index + 1 }} / 4</div>
          <button @click="goToNextSlide" class="next-button circle-button">
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </button>
        </div>
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
  padding: 20px 30px;
  box-sizing: border-box;
}

.slide-wrapper-mobile {
  height: auto;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  margin-top: 170px;
}

.slide-content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
}

.slide-content-mobile {
  position: relative;
  border-radius: 50px;
  padding: 90px 30px 25px;
  box-sizing: border-box;
  min-height: 380px;
}

.slide-image {
  height: 400px;
  object-fit: fill;
  transform: translateY(-90px);
  margin-right: 80px;
}

.slide-image-mobile {
  height: auto;
  width: 65%;
  transform: translateX(50%) translateY(-50%) rotate(240deg);
  margin: auto;
  margin-bottom: 10px;
  z-index: 3;
  position: absolute;
  top: 0;
  right: 50%;
}

.slide-title {
  font-size: 28px;
  font-weight: 700;
}

.slide-description {
  margin-top: 20px;
}

.slide-funny-part {
  margin-bottom: 20px;
}

.slide-wrapper:hover {
  box-shadow: inset 0 0 40px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.navigation-area {
  display: flex;
  align-items: center;
}

.slide-counter {
  font-size: 14px;
  margin: 0 5px;
}

.buy-button {
  margin-right: auto;
}
</style>
