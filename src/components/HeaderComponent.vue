<script setup>
import SearchComponent from "./SearchComponent.vue";
import ShoppingCart from "./reusabaleComponents/ShoppingCart.vue";
import { useScreenSizeComposable } from "@/components/screenSizeComposable/isMobileStore.js";

const mobileStore = useScreenSizeComposable();

function scrollToSection(id) {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <div class="header" :class="{ 'header-mobile': mobileStore.isMobile.value }">
    <div class="logo">
      <div>Bakery</div>
    </div>
    <div class="navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/shop">Shop</router-link>
      <a @click="scrollToSection('footer')">Contact</a>
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

.router-link-active {
  padding-bottom: 3px;
  border-bottom: 1px solid var(--font-colour);
  box-shadow: inset 0 -4px 6px -5px var(--font-colour);
}

.header {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  font-size: 20px;
}

.header-mobile {
  justify-content: flex-end;

  .logo {
    margin-bottom: 10px;
    display: none;
  }

  .navigation {
    width: 100%;
    margin-bottom: 15px;
  }

  .navigation a {
    margin: auto;
  }
}

.logo {
  flex: 1;
}

.navigation {
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  flex: 1;
  justify-content: center;
}

.navigation a:first-of-type {
  margin-left: 0;
}

.navigation a:last-of-type {
  margin-right: 0;
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
