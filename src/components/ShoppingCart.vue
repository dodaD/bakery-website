<script setup>
import { ref, computed, watch } from "vue";
import { useMobileStore } from "@/stores/isMobileStore.js";
import { useShoppingCartStore } from "@/stores/shoppingCartStore.js";
import { useBoughtItemStore } from "@/stores/boughtItem.js";
const boughtItemStore = useBoughtItemStore();

const mobileStore = useMobileStore();
const shoppingCart = useShoppingCartStore();
const showCart = ref(false);

watch(
  () => showCart.value,
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
  showCart.value = false;
  shoppingCart.cartItems = [];
  boughtItemStore.boughtItem = "";
}
</script>

<template>
  <div class="background-tint" v-if="showCart" />

  <button
    @click="showCart = true"
    v-if="!showCart"
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
      'show-cart': showCart,
      'shopping-cart-container-mobile': mobileStore.isMobile,
    }"
  >
    <button class="close-cart-button" @click="showCart = false">
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
      <img :src="item.image" :alt="item.title" class="cake-cart-image" />
      <div class="cart-items-wrapper">
        <div class="cake-cart-title">{{ item.title }}</div>
        <div class="cake-cart-description">{{ item.description }}</div>
        <div class="cake-cart-price">${{ item.price }}</div>

        <div class="quantity-selector-wrapper">
          <button
            class="quantity-button circle-button"
            @click="shoppingCart.decreaseQuantity(item.id)"
          >
            <font-awesome-icon icon="fa-solid fa-minus" />
          </button>
          <div class="quantity-number">{{ item.quantity }}</div>
          <button
            class="quantity-button circle-button"
            @click="shoppingCart.increaseQuantity(item.id)"
          >
            <font-awesome-icon icon="fa-solid fa-plus" />
          </button>
        </div>
      </div>
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
  object-fit: fill;
  height: auto;
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
