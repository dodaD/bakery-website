<script setup>
import { useCakeSlicesStore } from "@/stores/cakeSlicesStore.js";
import { useMobileStore } from "@/stores/isMobileStore.js";
import { useBoughtItemStore } from "@/stores/boughtItem.js";

const mobileStore = useMobileStore();
const cakeSlicesStore = useCakeSlicesStore();
const boughtItemStore = useBoughtItemStore();

//TODO ask if changing the value of boughtItemStore.boughtItem in template is okay
</script>

<template>
  <div class="trendy-cakes-title">Our Trendy Cakes</div>
  <div
    v-for="n in 3"
    :key="n"
    class="cake-container glass-background glass-border"
    :class="{
      'cake-container-mobile': mobileStore.isMobile,
      'reverse-column': n % 2 == 1 && mobileStore.isMobile,
    }"
  >
    <img
      v-if="n % 2 == 0"
      :src="cakeSlicesStore.cakeSlices[n].image"
      :alt="cakeSlicesStore.cakeSlices[n].title"
      class="cake-image cake-on-the-left"
      :class="{
        'cake-on-the-left-mobile': mobileStore.isMobile,
        'cake-image-mobile': mobileStore.isMobile,
      }"
    />

    <div class="cake-content">
      <div class="cake-title">{{ cakeSlicesStore.cakeSlices[n].title }}</div>
      <div class="cake-description">
        {{ cakeSlicesStore.cakeSlices[n].description }}
      </div>
      <div class="cake-price">${{ cakeSlicesStore.cakeSlices[n].price }}</div>
      <button
        class="rectangle-rounded-button"
        @click="
          boughtItemStore.boughtItem = cakeSlicesStore.cakeSlices[n].title
        "
      >
        Buy now
      </button>
    </div>

    <img
      v-if="n % 2 == 1"
      :src="cakeSlicesStore.cakeSlices[n].image"
      :alt="cakeSlicesStore.cakeSlices[n].title"
      class="cake-image cake-on-the-right"
      :class="{
        'cake-on-the-right-mobile': mobileStore.isMobile,
        'cake-image-mobile': mobileStore.isMobile,
      }"
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
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.cake-container-mobile {
  flex-direction: column;
  height: auto;
  padding: 10px 25px 40px;
}

.reverse-column {
  flex-direction: column-reverse;
}

.cake-image {
  width: 200px;
  transform: translateY(-25px);
  margin: 0 50px;
}

.cake-image-mobile {
  transform: rotate(240deg);
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

.cake-on-the-left-mobile,
.cake-on-the-right-mobile {
  margin: 0;
}

.trendy-cakes-title {
  width: 100%;
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  color: var(--font-colour);
  z-index: 1;
  margin: 40px 0;
}
</style>
