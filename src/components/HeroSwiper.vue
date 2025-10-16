<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { useCakeSlicesStore } from "@/stores/cakeSlicesStore.js";
import "swiper/css";

const modules = [Navigation];

const { cakeSlices } = useCakeSlicesStore();
</script>

<template>
  <Swiper
    :modules="modules"
    :slides-per-view="1"
    :navigation="true"
    direction="horizontal"
    class="product-swiper"
  >
    <SwiperSlide
      v-for="n in 3"
      :key="n"
      class="swiper-slide-content glass-background glass-border"
    >
      <div>
        <div class="slide-title">Trendy Cake Slices</div>
        <div class="cake-description">{{ cakeSlices[n].name }}</div>
        <button class="rectangle-rounded-button buy-button">Buy now</button>
      </div>

      <img :src="cakeSlices[n].image" class="cake-image" />
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

.swiper-slide-content {
  display: flex;
  text-align: center;
  transition: all 0.3s ease;
  height: 350px;
  flex-direction: column-reverse;
  margin-top: 60px;
  border-radius: 46px;

  box-sizing: border-box;
}

.glass-background .swiper-slide-content:hover .buy-button {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.6),
    0 0 20px rgba(255, 255, 255, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.2);
}

.swiper-slide-content:hover {
  /* inset = inside the box,
      offset-x(if both x and y 0, the shadow is right behind the box),
      offset-y, blur-radius, spread-radius */
  box-shadow: inset 0 -10px 20px rgba(255, 255, 255, 0.4),
    0 0 5px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.slide-title {
  font-size: 20px;
  font-weight: 600;
  margin-top: 25px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.cake-description {
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.cake-image {
  width: 150px;
  height: 280px;
  object-fit: fill;
  transform: translateX(50%) rotate(242deg);
  user-select: none;
}

.glass-background {
  background: var(--glass-background);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.buy-button {
  margin-bottom: 85px;
  transition: all 0.3s ease;
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
  right: 10px;
}

.product-swiper :deep(.swiper-button-prev) {
  left: 10px;
}
</style>
