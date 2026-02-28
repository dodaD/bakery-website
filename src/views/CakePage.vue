<script setup>
import { useRoute } from "vue-router";
import { watch, ref } from "vue";
import { useCakeSlicesStore } from "@/cakeSlicesStore";
import CakePageHero from "@/components/CakePageComponents/CakePageHero.vue";
import BuyNowMessage from "@/components/BuyNowMessage.vue";
import CakeSuggetion from "@/components/CakePageComponents/CakeSuggetion.vue";

const route = useRoute();
const cakeSlicesStore = useCakeSlicesStore();

const cake = ref(
  cakeSlicesStore.cakeSlices.find((cake) => cake.id == route?.params.id),
);

function loadCake(id) {
  console.log("Loading cake:", id);
}

watch(
  route,
  (newRoute) => {
    cake.value = cakeSlicesStore.cakeSlices.find(
      (cake) => cake.id == route?.params.id,
    );
  },
  { immediate: true, deep: true },
);
</script>

<template>
  <BuyNowMessage />
  <div class="content-wrapper">
    <CakePageHero :cake="cake" />

    <CakeSuggetion />
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
