<script setup>
import { ref, computed, watch } from "vue";
import { useMobileStore } from "@/stores/isMobileStore.js";
import { useShoppingCartStore } from "@/stores/shoppingCartStore.js";
import { useBoughtItemStore } from "@/stores/boughtItem.js";
import CartItemComponent from "./CartItemComponent.vue";
const boughtItemStore = useBoughtItemStore();

const mobileStore = useMobileStore();
const shoppingCart = useShoppingCartStore();

watch(
  () => shoppingCart.showCart,
  (newVal) => {
    if (newVal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }
);

const totalPrice = computed(() => {
  let total = 0;
  for (let i = 0; i < shoppingCart.cartItems.length; i++) {
    const item = shoppingCart.cartItems[i];
    total += item.price * item.quantity;
  }
  return total.toFixed(2);
});

function buyCart() {
  shoppingCart.showCart = false;
  shoppingCart.cartItems = [];
  boughtItemStore.boughtItem = "";
}
</script>

<template>
  <div class="background-tint" v-if="shoppingCart.showCart" />

  <button
    @click="shoppingCart.showCart = true"
    v-if="!shoppingCart.showCart"
    class="shopping-cart-button"
  >
    <font-awesome-icon
      :icon="['fas', 'bag-shopping']"
      class="shopping-cart-icon"
    />
  </button>

  <div
    class="shopping-cart-container"
    :class="{
      'show-cart': shoppingCart.showCart,
      'shopping-cart-container-mobile': mobileStore.isMobile,
    }"
  >
    <button class="close-cart-button" @click="shoppingCart.showCart = false">
      <font-awesome-icon icon="fa-solid fa-circle-xmark" />
    </button>
    <div class="cart-title">Your shopping Cart</div>
    <div v-if="shoppingCart.cartItems.length === 0" class="empty-cart-message">
      There is nothing yet...
    </div>

    <div
      class="cart-item"
      v-if="shoppingCart.cartItems.length !== 0"
      v-for="item in shoppingCart.cartItems"
      :key="item.id"
    >
      <CartItemComponent :cartItem="item" />
    </div>

    <div v-if="shoppingCart.cartItems.length !== 0" class="total-price-wrapper">
      <div class="total-price-label">Total:</div>
      <div>${{ totalPrice }}</div>
    </div>

    <button
      v-if="shoppingCart.cartItems.length !== 0"
      class="rectangle-rounded-button"
      @click="buyCart"
    >
      Proceed to Checkout
    </button>
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
  overflow-y: scroll;
  border-left: 2px solid var(--glass-border);
}

.shopping-cart-container-mobile {
  width: 100%;
  right: -300%;
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

.cart-item {
  display: flex;
}

.total-price-label {
  font-weight: 700;
  font-size: 18px;
  margin-right: 10px;
}

.total-price-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.shopping-cart-icon {
  height: 20px;
  width: 20px;
}

.shopping-cart-button {
  background: none;
  border: none;
  margin-left: 20px;
  cursor: pointer;
}
</style>
