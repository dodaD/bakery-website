<script setup>
import { onMounted } from "vue";
import { useOrientationState } from "@/components/composables/isMobileStore.js";

const mobileStore = useOrientationState();

onMounted(() => {
  window.addEventListener("resize", () => {
    mobileStore.isMobile.value = window.screen.width < 500;
  });
});
</script>

<template>
  <router-view />
</template>

<style lang="scss">
@import "@/styles/colours.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

body,
html {
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  background-color: var(--background);
}

.no-scroll {
  overflow: hidden;
}
</style>
