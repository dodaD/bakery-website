<script setup>
import { ref } from "vue";

const cartItems = ref([]);
const props = defineProps({
  showCart: {
    type: Boolean,
  },
});

function addItemToCart(item) {
  cartItems.value.push(item);
  cartItems.value[cartItems.value.length - 1].quantity = 1;
  console.log(cartItems.value[0]);
}

defineExpose({ addItemToCart });
</script>

<template>
  <div
    class="shopping-cart-container glass-border"
    :class="{ 'show-cart': showCart }"
  >
    <button class="close-cart-button" @click="$emit('closeCart')">
      <font-awesome-icon icon="fa-solid fa-circle-xmark" />
    </button>
    <div class="cart-title">Your shopping Cart</div>
    <div v-if="cartItems.length === 0" class="empty-cart-message">
      There is nothing yet...
    </div>

    <div
      class="cart-item"
      v-if="cartItems.length !== 0"
      v-for="item in cartItems"
      :key="item.id"
    >
      <img :src="item.image" :alt="item.title" class="cake-cart-image" />
      <div class="cart-items-wrapper">
        <div class="cake-cart-title">{{ item.name }}</div>
        <div class="cake-cart-description">{{ item.description }}</div>
        <div class="cake-cart-price">${{ item.price }}</div>

        <div class="quantity-selector">
          <button class="quantity-button">-</button>
          <div class="quantity-number">{{ item.quantity }}</div>
          <button class="quantity-button">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.shopping-cart-container {
  position: fixed;
  top: 0;
  width: 380px;
  background-color: var(--footer-accent);
  right: -100%;
  z-index: 100;
  height: 100%;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  padding: 50px 40px;
  box-sizing: border-box;
  transition: right 0.3s ease-in-out;
}

.show-cart {
  right: 0;
  transition: right 0.3s ease-in-out;
}

.close-cart-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
}

.cart-title {
  font-weight: 700;
  font-size: 25px;
  margin: 0 auto 30px;
  width: fit-content;
}
</style>
