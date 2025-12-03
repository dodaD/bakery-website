<script setup>
import { useCakeSlicesStore } from "@/cakeSlicesStore.js";
import { useScreenSizeComposable } from "@/components/screenSizeComposable/isMobileStore.js";
import CakeCardComponent from "./CakeCardComponent.vue";
import BorderTitleComponent from "./reusabaleComponents/BorderTitleComponent.vue";

const cakeSlicesStore = useCakeSlicesStore();
const mobileStore = useScreenSizeComposable();
</script>

<template>
  <BorderTitleComponent>Best Sellers</BorderTitleComponent>

  <div
    class="grid-container"
    :class="{ 'grid-mobile': mobileStore.isMobile.value }"
  >
    <div
      v-for="cake in cakeSlicesStore.cakeSlices"
      :key="cake.id"
      :id="`cake-${cake.id}`"
    >
      <CakeCardComponent :cake="cake" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.best-sellers-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
}

.best-sellers-title {
  font-size: 36px;
  font-weight: 700;
  margin: 40px 0 20px;
  padding: 10px 25px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 95px;
  column-gap: 10px;
  margin-top: 130px;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 70px;
  justify-items: center;
}

.grid-mobile {
  grid-template-columns: repeat(1, 1fr);
  row-gap: 60px;
}
</style>
