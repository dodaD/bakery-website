<script setup>
import { ref } from "vue";
import { useCakeSlicesStore } from "@/stores/cakeSlicesStore.js";
import { useMobileStore } from "@/stores/isMobileStore.js";

const emit = defineEmits(["showCake", "scrollToContacts", "openCart"]);
const mobileStore = useMobileStore();
const { cakeSlices } = useCakeSlicesStore();

const showSearchInput = ref(false);
const searchValue = ref("");
const searchFailedMessage = ref(false);

function findCake() {
  showSearchInput.value = !showSearchInput.value;

  if (searchValue.value !== "") {
    const result = cakeSlices.filter(({ name }) =>
      name.toLowerCase().includes(searchValue.value.toLowerCase())
    );

    if (result[0] != undefined) {
      emit("showCake", result[0].id);
      return;
    }

    searchValue.value = "";
    searchFailedMessage.value = true;
    setTimeout(() => {
      searchFailedMessage.value = false;
    }, 1500);
  }
}
</script>

<template>
  <div
    class="navigation"
    :class="{ 'navigation-mobile': mobileStore.getIsMobile }"
  >
    <div class="logo" :class="{ 'logo-mobile': mobileStore.getIsMobile }">
      <div>Bakery</div>
    </div>
    <div class="menu" :class="{ 'menu-mobile': mobileStore.getIsMobile }">
      <router-link to="/">Home</router-link>
      <router-link to="/">About</router-link>
      <router-link to="/">Shop</router-link>
      <a @click="$emit('scrollToContacts')">Contact</a>
    </div>

    <div class="buttons-wrapper">
      <input
        v-model="searchValue"
        class="search-input"
        :class="{ 'show-search-input': showSearchInput }"
      />
      <button @click="findCake">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="icon" />
      </button>
      <button @click="$emit('openCart')">
        <font-awesome-icon
          :icon="['fas', 'bag-shopping']"
          class="shopping-cart-icon icon"
        />
      </button>
    </div>
  </div>

  <div :class="{ 'hide-message': !searchFailedMessage }" class="alert-message">
    Cake not found. Please try again.
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.navigation {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  font-size: 20px;
}

.navigation-mobile {
  justify-content: flex-end;
}

.logo-mobile {
  margin-bottom: 10px;
  display: none;
}

.menu {
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  margin: auto;
}

.menu a:first-of-type {
  margin-left: 0;
}

.menu a:last-of-type {
  margin-right: 0;
}

.menu-mobile {
  width: 100%;
  margin-bottom: 15px;
}

.menu-mobile a {
  margin: auto;
}

.menu-mobile a:last-of-type {
  margin-left: 0;
}

.buttons-wrapper {
  display: flex;
  position: relative;

  button {
    background: none;
    border: none;
    margin-left: 20px;
    cursor: pointer;
  }
}

.icon {
  height: 20px;
  width: 20px;
}

.search-input {
  transition: opacity 0.3s ease-in-out;
  background: transparent;
  border: none;
  border-bottom: 2px solid var(--font-colour);
  outline: none;
  font-size: 18px;
  font-family: "Inter", sans-serif;
  padding-left: 15px;
  opacity: 0;
  position: absolute;
  left: 0;
  transform: translateX(-100%);
}

.show-search-input {
  opacity: 1;
}

.shopping-cart-icon {
  z-index: 100;
}
</style>
