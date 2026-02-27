<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useCakeSlicesStore } from "@/cakeSlicesStore";
import CakePageHero from "@/components/CakePageHero.vue";
import BuyNowMessage from "@/components/BuyNowMessage.vue";

const route = useRoute();
const cakeSlicesStore = useCakeSlicesStore();

const cake = cakeSlicesStore.cakeSlices.find(
  (cake) => cake.id == route?.params.id,
);
</script>

<template>
  <BuyNowMessage />
  <div class="content-wrapper">
    <CakePageHero :cake="cake" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.content-wrapper {
  max-width: 1500px;
  width: 100%;
  background-color: var(--background);
  padding: 25px 40px;
  box-sizing: border-box;
  margin: 0 auto;
}

.content-wrapper-mobile {
  overflow: hidden;
  padding: 25px 30px 0;
}
</style>
