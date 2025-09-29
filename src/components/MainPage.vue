<script setup>
import NavigationComponent from './NavigationComponent.vue'
import HeroComponent from './HeroComponent.vue'
</script>

<template>
     <div class="content-wrapper">
          <NavigationComponent />

          <HeroComponent />

          <div class="best-sellers"></div>

          <div class="customer reviews"></div>

          <div class="footer"></div>
     </div>
</template>


<style lang="scss" scoped>
@import "@/styles/colours.scss";

.content-wrapper {
     max-width: 2000px;
     position: absolute;
     right: 50%;
     transform: translateX(50%);
     width: 100%;
     background-color: var(--background);
     padding: 25px 30px;
     box-sizing: border-box;
     background-image: radial-gradient(circle 600px at center,
               /* circle radius & position */
               var(--background-dark-accent) 0%,
               var(--background-accent) 70%,
               var(--background) 100%);

     min-height: 100%;
}
</style>