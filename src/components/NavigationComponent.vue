<script setup>
import SearchComponent from "./SearchComponent.vue";
import ShoppingCart from "./ShoppingCart.vue";
import { useMobileStore } from "@/stores/isMobileStore.js";
import { scrollUtils } from "@/globalObjects/scrollToSection.js";

const mobileStore = useMobileStore();
</script>

<template>
  <div
    class="navigation"
    :class="{ 'navigation-mobile': mobileStore.isMobile }"
  >
    <div class="logo" :class="{ 'logo-mobile': mobileStore.isMobile }">
      <div>Bakery</div>
    </div>
    <div class="menu" :class="{ 'menu-mobile': mobileStore.isMobile }">
      <router-link to="/">Home</router-link>
      <router-link to="/">About</router-link>
      <router-link to="/">Shop</router-link>
      <a @click="scrollUtils.scrollToSection('footer')">Contact</a>
    </div>
    <div class="search-wrapper">
      <SearchComponent />
      <ShoppingCart />
    </div>
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

.logo {
  flex: 1;
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
  flex: 1;
  justify-content: center;
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

.search-wrapper {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.icon {
  height: 20px;
  width: 20px;
}

.shopping-cart-icon {
  z-index: 100;
}
</style>
