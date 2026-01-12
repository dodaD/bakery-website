<script setup>
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { useCakeSlicesStore } from "@/cakeSlicesStore.js";

import HeroSlideComponent from "./HeroSlideComponent.vue";
import "swiper/css";

const modules = [Autoplay];

const cakeSlicesStore = useCakeSlicesStore();

const swiperRef = ref(null);
function goToNextSlide() {
  swiperRef.value?.slideNext();
}
function goToPrevSlide() {
  swiperRef.value?.slidePrev();
}
</script>

<template>
  <Swiper
    :modules="modules"
    :slides-per-view="1"
    class="product-swiper"
    @swiper="swiperRef = $event"
    :loop="true"
    :autoplay="{
      delay: 4500,
      disableOnInteraction: false,
    }"
  >
    <SwiperSlide v-for="n in 3" :key="n" class="swiper-slide-wrapper">
      <HeroSlideComponent :cake="cakeSlicesStore.cakeSlices[n]" />
    </SwiperSlide>

    <button @click="goToPrevSlide" class="angle-bracket-button prev-button">
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </button>
    <button @click="goToNextSlide" class="angle-bracket-button next-button">
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </button>
  </Swiper>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.product-swiper :deep(.swiper-wrapper) {
  width: 310px;
  border-radius: 46px;
}

.swiper-slide-wrapper {
  display: flex;
  text-align: center;
  transition: all 0.3s ease;
  height: 350px;
  flex-direction: column-reverse;
  margin-top: 60px;
  border-radius: 46px;

  box-sizing: border-box;
}

.angle-bracket-button {
  color: var(--font-colour);
  transform: translateY(50%);
  cursor: pointer;
  position: absolute;
  top: 50%;
  z-index: 2;
  font-size: 14px;
  background: none;
  border: none;
  font-size: 25px;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

.angle-bracket-button::before {
  content: "";
  position: absolute;
  width: 35px;
  height: 35px;
  inset: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;

  box-shadow: 0 0 5px rgba(255, 255, 255, 0.6),
    0 0 10px rgba(255, 255, 255, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.2);

  transition: opacity 0.2s ease;
}

.angle-bracket-button:hover::before {
  opacity: 1;
}
</style>
