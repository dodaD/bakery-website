<script setup>
import { useCakeSlicesStore } from "@/stores/cakeSlicesStore.js";

const { cakeSlices } = useCakeSlicesStore();
</script>

<template>
  <div v-for="n in 3" :key="n" class="cake-container glass-background">
    <img
      v-if="n % 2 == 0"
      :src="cakeSlices[n].image"
      :alt="cakeSlices[n].title"
      class="cake-image cake-on-the-left"
    />

    <div class="cake-content">
      <div class="cake-title">{{ cakeSlices[n].name }}</div>
      <div class="cake-description">{{ cakeSlices[n].description }}</div>
      <div class="cake-price">${{ cakeSlices[n].price }}</div>
      <button class="explore-button">Buy now</button>
    </div>

    <img
      v-if="n % 2 == 1"
      :src="cakeSlices[n].image"
      :alt="cakeSlices[n].title"
      class="cake-image cake-on-the-right"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.cake-container {
  display: flex;
  width: 100%;
  height: 250px;
  flex-direction: row;
  margin: 40px 0;
  padding: 15px 50px;
  box-sizing: border-box;
  align-items: center;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.cake-image {
  width: 200px;
  transform: translateY(-25px);
  margin: 0 50px;
}

.cake-title {
  font-size: 27px;
  font-weight: 700;
  margin-bottom: 10px;
}

.cake-price {
  margin: 10px 0;
  font-size: 27px;
  font-weight: 700;
}

.cake-on-the-right {
  margin-left: auto;
}

.cake-on-the-left {
  margin-left: 0;
}
</style>
