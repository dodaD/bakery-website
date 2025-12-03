<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import { useCakeSlicesStore } from "@/cakeSlicesStore.js";

import HeroSlideComponent from "./HeroSlideComponent.vue";
import "swiper/css";

const modules = [Navigation, Autoplay];

const cakeSlicesStore = useCakeSlicesStore();
</script>

<template>
  <Swiper
    :modules="modules"
    :slides-per-view="1"
    :navigation="true"
    direction="horizontal"
    class="product-swiper"
    :autoplay="{
      delay: 4500,
      disableOnInteraction: false,
    }"
  >
    <SwiperSlide v-for="n in 3" :key="n" class="swiper-slide-wrapper">
      <HeroSlideComponent :cake="cakeSlicesStore.cakeSlices[n]" />
    </SwiperSlide>
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

/* Custom Swiper Navigation Arrows */
.product-swiper :deep(.swiper-button-next),
.product-swiper :deep(.swiper-button-prev) {
  color: var(--font-colour);
  width: 20px;
  height: 20px;
  margin-top: -10px;
  font-size: 12px;
  font-weight: bold;
  transform: translateY(50%);
}

.product-swiper :deep(.swiper-button-next):after,
.product-swiper :deep(.swiper-button-prev):after {
  font-size: 12px;
  font-weight: bold;
}

/* Hide arrows when disabled */
.product-swiper :deep(.swiper-button-disabled) {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

/* Position arrows */
.product-swiper :deep(.swiper-button-next) {
  position: absolute;
  right: 10px;
  top: 50%;
  z-index: 1;
}

.product-swiper :deep(.swiper-button-prev) {
  position: absolute;
  left: 10px;
  top: 50%;
  z-index: 1;
  transform: translateY(50%) rotateY(180deg);
}
</style>
