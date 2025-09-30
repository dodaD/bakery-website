<script setup>
import NavigationComponent from './NavigationComponent.vue'
import HeroComponent from './HeroComponent.vue'
import BestSellersComponent from './BestSellersComponent.vue';
</script>

<template>
     <div class="content-wrapper">
          <NavigationComponent />

          <HeroComponent />

          <BestSellersComponent />

          <div class="customer reviews"></div>

          <div class="footer"></div>
     </div>
</template>


<style lang="scss" scoped>
@import "@/styles/colours.scss";

.content-wrapper {
     max-width: 1500px;
     position: absolute;
     right: 50%;
     transform: translateX(50%);
     width: 100%;
     background-color: var(--background);
     padding: 25px 40px;
     box-sizing: border-box;


     min-height: 100%;
}
</style>