<script setup>
import { useCakeSlicesStore } from "@/stores/cakeSlicesStore.js";

const { cakeSlices } = useCakeSlicesStore();
</script>

<template>
  <div class="best-sellers-container">
    <div class="best-sellers-title cornered-border">Best Sellers</div>
  </div>

  <div class="grid-container">
    <div v-for="cake in cakeSlices" :key="cake.id" class="cake-card">
      <img :src="cake.image" :alt="cake.name" class="cake-image" />

      <div class="cake-info pseudo-glass-background">
        <div class="cake-name">{{ cake.name }}</div>
        <div class="cake-description">{{ cake.description }}</div>

        <div class="pay-button-container">
          <div class="cake-price">${{ cake.price }}</div>
          <button class="rectangle-rounded-button bag-button">
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
  grid-template-rows: repeat(2, 2fr);
  gap: 95px;
  margin-top: 130px;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 70px;
}

.cake-card {
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.cake-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cake-image {
  width: 250px;
  object-fit: contain;
  border-radius: 10px;
  transform: translateY(-100px) rotate(182deg) translateX(-50%);
  position: absolute;
  right: 50%;
  top: 0;
  z-index: 1;
}

.cake-info {
  padding: 20px;
  box-sizing: border-box;
  border-radius: 15px;
  height: 400px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
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
</style>
