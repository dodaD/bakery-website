<script>
import { useCakeSlicesStore } from "@/cakeSlicesStore";
import { useRoute } from "vue-router";

const route = useRoute();
const cakeSlicesStore = useCakeSlicesStore();

const cake = cakeSlicesStore.cakeSlices.find(
  (cake) => cake.id === route?.params.id
);
</script>

<template>
  <div>
    <div class="cake-page-hero-wrapper">
      <img :src="cake.image" class="cake-page-image" />

      <div class="cake-page-text-wrapper">
        <div></div>
        <div class="cake-page-title">{{ cake.title }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";
</style>
