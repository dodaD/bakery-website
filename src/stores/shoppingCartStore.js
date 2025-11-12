import { defineStore } from "pinia";
import { ref } from "vue";

export const useShoppingCartStore = defineStore("shoppingCart", () => {
  const cartItems = ref([]);

  function decreaseQuantity(itemId) {
    const cartId = cartItems.value.findIndex((item) => item.id === itemId);
    if (cartId === -1) {
      return;
    }

    if (cartItems.value[cartId].quantity > 1) {
      cartItems.value[cartId].quantity--;
      return;
    }
    cartItems.value.splice(cartId, 1);
  }

  function increaseQuantity(itemId) {
    console.log("Increasing quantity for item ID:", itemId);
    const cartId = cartItems.value.findIndex((item) => item.id === itemId);
    if (cartId === -1) {
      return;
    }

    cartItems.value[cartId].quantity++;
  }

  return { cartItems, decreaseQuantity, increaseQuantity };
});
