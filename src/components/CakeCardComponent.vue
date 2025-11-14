<script setup>
import { useShoppingCartStore } from "@/stores/shoppingCartStore.js";
import { useMobileStore } from "@/stores/isMobileStore.js";
import { useAlertMessageStore } from "@/stores/alertMessage";
import ChangeQuantityComponent from "./ChangeQuantityComponent.vue";
const mobileStore = useMobileStore();
const shoppingCart = useShoppingCartStore();
const alertStore = useAlertMessageStore();

defineProps({
  cake: {
    type: Object,
    required: true,
  },
});

function addItemToCart(item) {
  if (!checkIfItemInCart(item.id)) {
    shoppingCart.cartItems.push(item);
    shoppingCart.cartItems[shoppingCart.cartItems.length - 1].quantity = 1;
  }

  alertStore.message = "Item added to cart! Do you want to open cart?";
  alertStore.showButtons = true;
  alertStore.buttonsFunction = "addedToCart";
  alertStore.showMessage = true;
}

function checkIfItemInCart(itemId) {
  return shoppingCart.cartItems.some((item) => item.id === itemId);
}
</script>

<template>
  <div class="cake-card" :class="{ 'cake-card-mobile': mobileStore.isMobile }">
    <img
      :src="cake.image"
      class="cake-image"
      :class="{ 'cake-image-mobile': mobileStore.isMobile }"
    />
    <div
      class="cake-info pseudo-glass-background cut-out-border"
      :class="{ 'cake-info-mobile': mobileStore.isMobile }"
    >
      <div class="cake-name">{{ cake.title }}</div>
      <div class="cake-description">{{ cake.description }}</div>

      <div class="pay-button-container">
        <div class="cake-price">${{ cake.price }}</div>
        <button
          class="rectangle-rounded-button bag-button"
          @click="addItemToCart(cake)"
          v-if="!checkIfItemInCart(cake.id)"
        >
          <font-awesome-icon icon="fa-solid fa-bag-shopping" />
        </button>
        <ChangeQuantityComponent :id="cake.id" />
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
  -webkit-mask-size: contain;
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
  -webkit-mask-size: contain;
  -webkit-mask-composite: xor;
  mask-composite: intersect;
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

.cake-image-mobile {
  width: 220px;
  transform: translateY(-80%) rotate(240deg) translateX(-100%);
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

.cake-info-mobile {
  padding: 70px 60px;
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

.cake-card-mobile:hover {
  transform: translateY(0);
}
</style>
