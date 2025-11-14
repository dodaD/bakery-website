<script setup>
import { ref } from "vue";
import { useCakeSlicesStore } from "@/stores/cakeSlicesStore.js";
import { useMobileStore } from "@/stores/isMobileStore.js";
import { useShoppingCartStore } from "@/stores/shoppingCartStore.js";
import CakeCardComponent from "./CakeCardComponent.vue";
import AlertMessageComponent from "./AlertMessageComponent.vue";

const cakeSlicesStore = useCakeSlicesStore();
const mobileStore = useMobileStore();
const shoppingCart = useShoppingCartStore();

const showAddedToCartMessage = ref(false);
</script>

<template>
  <div class="best-sellers-container">
    <div class="best-sellers-title cornered-border">Best Sellers</div>
  </div>

  <div class="grid-container" :class="{ 'grid-mobile': mobileStore.isMobile }">
    <div
      v-for="cake in cakeSlicesStore.cakeSlices"
      :key="cake.id"
      class="cake-card"
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
  row-gap: 35px;
}

.cake-card {
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  width: 100%;
  max-width: 350px;
}

.cake-card:hover {
  transform: translateY(-25px);
}
</style>
