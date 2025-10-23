<script setup>
import { useCakeSlicesStore } from "@/stores/cakeSlicesStore.js";
import { useMobileStore } from "@/stores/isMobileStore.js";
const emit = defineEmits(["addToCart"]);

const { cakeSlices } = useCakeSlicesStore();
const mobileStore = useMobileStore();
</script>

<template>
  <div class="best-sellers-container">
    <div class="best-sellers-title cornered-border">Best Sellers</div>
  </div>

  <div
    class="grid-container"
    :class="{ 'grid-mobile': mobileStore.getIsMobile }"
  >
    <div
      v-for="cake in cakeSlices"
      :key="cake.id"
      class="cake-card"
      :id="`cake-${cake.id}`"
    >
      <img :src="cake.image" :alt="cake.name" class="cake-image" />

      <div class="cake-info pseudo-glass-background cut-out-border">
        <div class="cake-name">{{ cake.name }}</div>
        <div class="cake-description">{{ cake.description }}</div>

        <div class="pay-button-container">
          <div class="cake-price">${{ cake.price }}</div>
          <button
            class="rectangle-rounded-button bag-button"
            @click="$emit('addToCart', cake)"
          >
            <font-awesome-icon icon="fa-solid fa-bag-shopping" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.cut-out-border {
  -webkit-mask-image: url("/productSolid.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  mask-repeat: no-repeat;
}

.cut-out-border::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    12deg,
    var(--glass-border),
    rgba(var(--glass-border-in-normal-way), 0.1),
    var(--glass-border)
  );
  -webkit-mask-image: url("/productSolid.svg"), url("/productBorder.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  -webkit-mask-composite: xor;
  mask-composite: intersect;
}

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
}

.cake-card {
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  width: 350px;
}

.cake-card:hover {
  transform: translateY(-25px);
}

.cake-image {
  width: 250px;
  object-fit: contain;
  border-radius: 10px;
  transform: translateY(-200px) rotate(219deg) translateX(-60%);
  position: absolute;
  right: 50%;
  top: 0;
  z-index: 1;
}

.cake-info {
  padding: 60px;
  box-sizing: border-box;
  border-radius: 15px;
  height: 400px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
}

.cake-info:hover {
  box-shadow: inset 0 0 50px rgba(255, 255, 255, 0.4),
    0 0 5px rgba(255, 255, 255, 0.2);
}

.cake-name {
  font-size: 22px;
  margin: 10px 0;
  font-weight: 600;
}

.cake-description {
  margin-bottom: 10px;
}

.pay-button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.bag-button {
  z-index: 2;
}
</style>
