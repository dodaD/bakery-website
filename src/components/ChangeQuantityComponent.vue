<script setup>
import { computed } from "vue";
import { useShoppingCartStore } from "@/stores/shoppingCartStore.js";

const shoppingCart = useShoppingCartStore();

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const cartItem = computed(() =>
  shoppingCart.cartItems.find((item) => item.id === props.id)
);
</script>

<template>
  <div class="quantity-selector-wrapper" v-if="cartItem">
    <button
      class="quantity-button circle-button"
      @click="shoppingCart.decreaseQuantity(id)"
    >
      <font-awesome-icon icon="fa-solid fa-minus" />
    </button>
    <input type="number" v-model="cartItem.quantity" max="100" min="1" />
    <button
      class="quantity-button circle-button"
      @click="shoppingCart.increaseQuantity(id)"
    >
      <font-awesome-icon icon="fa-solid fa-plus" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

input {
  background: transparent;
  border: none;
  border-bottom: 2px solid var(--font-colour);
  outline: none;
  font-size: 18px;
  font-family: "Inter", sans-serif;
  padding-left: 15px;
  width: 25px;
  text-align: center;
  margin: 0 8px;
}

.quantity-selector-wrapper {
  display: flex;
  align-items: center;
}

.quantity-button {
  z-index: 3;
}
</style>
