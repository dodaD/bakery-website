<script setup>
import { ref, computed, watch } from "vue";
import { useMobileStore } from "@/stores/isMobileStore.js";

const mobileStore = useMobileStore();
const emit = defineEmits(["closeCart", "buyNow"]);
const showSuccessMessage = ref(false);
const cartItems = ref([]);
const props = defineProps({
  showCart: {
    type: Boolean,
  },
});

watch(
  () => props.showCart,
  (newVal) => {
    if (newVal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }
);

function addItemToCart(item) {
  const existingCartItem = cartItems.value.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    cartItems.value.push(item);
    cartItems.value[cartItems.value.length - 1].quantity = 1;
  }

  showSuccessMessage.value = true;
  setTimeout(() => {
    showSuccessMessage.value = false;
  }, 1500);
}

function substractQuantity(index) {
  if (cartItems.value[index].quantity > 1) {
    cartItems.value[index].quantity--;
    return;
  }
  cartItems.value.splice(index, 1);
}

const totalPrice = computed(() => {
  let total = 0;
  for (let i = 0; i < cartItems.value.length; i++) {
    const item = cartItems.value[i];
    total += item.price * item.quantity;
  }
  return total.toFixed(2);
});

function buyCart() {
  emit("closeCart");
  cartItems.value = [];
  emit("buyNow");
}
defineExpose({ addItemToCart });
</script>

<template>
  <div class="background-tint" v-if="showCart" />

  <div
    class="shopping-cart-container"
    :class="{
      'show-cart': showCart,
      'shopping-cart-container-mobile': mobileStore.isMobile,
    }"
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
      v-for="(item, index) in cartItems"
      :key="item.id"
    >
      <img :src="item.image" :alt="item.title" class="cake-cart-image" />
      <div class="cart-items-wrapper">
        <div class="cake-cart-title">{{ item.name }}</div>
        <div class="cake-cart-description">{{ item.description }}</div>
        <div class="cake-cart-price">${{ item.price }}</div>

        <div class="quantity-selector-wrapper">
          <button
            class="quantity-button circle-button"
            @click="substractQuantity(index)"
          >
            <font-awesome-icon icon="fa-solid fa-minus" />
          </button>
          <div class="quantity-number">{{ item.quantity }}</div>
          <button
            class="quantity-button circle-button"
            @click="item.quantity++"
          >
            <font-awesome-icon icon="fa-solid fa-plus" />
          </button>
        </div>
      </div>
    </div>

    <div v-if="cartItems.length !== 0" class="total-price-wrapper">
      <div class="total-price-label">Total:</div>
      <div>${{ totalPrice }}</div>
    </div>

    <button
      v-if="cartItems.length !== 0"
      class="rectangle-rounded-button"
      @click="buyCart"
    >
      Proceed to Checkout
    </button>
  </div>

  <div class="alert-message" :class="{ 'hide-message': !showSuccessMessage }">
    Item added to cart!
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
</style>
