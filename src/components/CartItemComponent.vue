<script setup>
import { useShoppingCartStore } from "@/stores/shoppingCartStore.js";

const shoppingCart = useShoppingCartStore();

defineProps({
  cartItem: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <img :src="cartItem.image" :alt="cartItem.title" class="cake-cart-image" />
  <div class="cart-items-wrapper">
    <div class="cake-cart-title">{{ cartItem.title }}</div>
    <div class="cake-cart-description">{{ cartItem.description }}</div>
    <div class="cake-cart-price">${{ cartItem.price }}</div>

    <div class="quantity-selector-wrapper">
      <div class="icon trashcan" @click="shoppingCart.removeItem(cartItem.id)">
        <font-awesome-icon icon="fa-solid fa-trash" />
      </div>

      <button
        class="quantity-button circle-button"
        @click="shoppingCart.decreaseQuantity(cartItem.id)"
      >
        <font-awesome-icon icon="fa-solid fa-minus" />
      </button>
      <div class="quantity-number">{{ cartItem.quantity }}</div>
      <button
        class="quantity-button circle-button"
        @click="shoppingCart.increaseQuantity(cartItem.id)"
      >
        <font-awesome-icon icon="fa-solid fa-plus" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.cart-items-wrapper {
  margin-left: 30px;
}

.cake-cart-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}

.cake-cart-image {
  width: 100px;
  object-fit: contain;
  height: auto;
}

.cake-cart-price {
  margin-top: 15px;
}

.trashcan {
  margin-right: 15px;
  cursor: pointer;
  font-size: 20px;
}

.cart-item {
  display: flex;
  margin-bottom: 30px;
}

.quantity-selector-wrapper {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 10px;
}

.quantity-number {
  margin: 0 10px;
}
</style>
