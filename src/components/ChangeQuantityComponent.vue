<script setup>
import { computed, ref, watch } from "vue";
import { useShoppingCartStore } from "@/stores/shoppingCartStore.js";
import { useAlertMessageStore } from "@/stores/alertMessage";

const shoppingCart = useShoppingCartStore();
const alertStore = useAlertMessageStore();
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

const localQuantity = ref(cartItem.value ? cartItem.value.quantity : 1);

watch(
  () => cartItem.value?.quantity,
  (newQuantity) => {
    if (newQuantity !== undefined) {
      localQuantity.value = newQuantity;
    }
  }
);

function updateQuantity() {
  if (localQuantity.value < 1 || localQuantity.value > 100) {
    alertStore.message = "Quantity must be between 1 and 100";
    alertStore.showMessage = true;
    errorInput.value = true;
    return;
  }
  cartItem.value.quantity = localQuantity.value;
  errorInput.value = false;
}
</script>

<template>
  <div class="quantity-selector-wrapper" v-if="cartItem">
    <button
      class="quantity-button circle-button"
      @click="shoppingCart.decreaseQuantity(id)"
    >
      <font-awesome-icon icon="fa-solid fa-minus" />
    </button>
    <input
      type="number"
      @change="updateQuantity"
      v-model="localQuantity"
      max="100"
      min="1"
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
  padding-left: 15px;
  width: 35px;
  margin: 0 8px;
  z-index: 3;
}

.error-input {
  border-bottom: 2px solid red;
}

.quantity-selector-wrapper {
  display: flex;
  align-items: center;
}

.quantity-button {
  z-index: 3;
}
</style>
