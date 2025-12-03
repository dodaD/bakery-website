<script setup>
import { computed, ref, watch } from "vue";
import { useShoppingCartStore } from "@/stores/shoppingCartStore.js";
import { usePopUpWindowComposable } from "@/components/screenSizeComposable/popUpWindowComposable";

const shoppingCart = useShoppingCartStore();
const popUpInfo = usePopUpWindowComposable();
const errorInput = ref(false);

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const cartItem = computed(() =>
  shoppingCart.cartItems.find((item) => item.id === props.id)
);

function updateQuantity() {
  if (cartItem.value.quantity === 0 || cartItem.value.quantity === "") {
    shoppingCart.removeItem(props.id);
    return;
  }

  if (cartItem.value.quantity > 100) {
    popUpInfo.showPopUpWindow("Quantity must be less than a 100", null);

    errorInput.value = true;
    return;
  }
  errorInput.value = false;
}
</script>

<template>
  <div class="quantity-selector-wrapper">
    <button
      class="quantity-button circle-button"
      @click="shoppingCart.decreaseQuantity(id)"
    >
      <font-awesome-icon icon="fa-solid fa-minus" />
    </button>
    <input
      type="number"
      @change="updateQuantity"
      v-model="cartItem.quantity"
      max="100"
      min="0"
      :class="{ 'error-input': errorInput }"
    />
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
  width: 50px;
  margin: 0 10px;
  z-index: 3;
  text-align: center;
  padding: 0;
}

input:invalid {
  border-bottom: 2px solid red;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.quantity-selector-wrapper {
  display: flex;
  align-items: center;
}

.quantity-button {
  z-index: 3;
}
</style>
