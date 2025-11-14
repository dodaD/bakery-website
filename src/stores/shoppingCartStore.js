import { defineStore } from "pinia";
import { ref } from "vue";

export const useShoppingCartStore = defineStore("shoppingCart", () => {
  const cartItems = ref([]);
  const showCart = ref(false);

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
    const cartId = cartItems.value.findIndex((item) => item.id === itemId);
    if (cartId === -1) {
      return;
    }

    cartItems.value[cartId].quantity++;
  }

  function removeItem(itemId) {
    cartItems.value = cartItems.value.filter((item) => item.id !== itemId);
  }

  return {
    cartItems,
    decreaseQuantity,
    increaseQuantity,
    removeItem,
    showCart,
  };
});
