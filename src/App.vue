<script setup>
import MainPage from './components/MainPage.vue';
</script>

<template>
  <div class="main-wrapper">
    <MainPage />
  </div>

</template>

<style lang="scss">
@import "@/styles/colours.scss";

.main-wrapper {
  width: 100%;
  height: 100vh;

  //background-color: var(--background);
}

body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
