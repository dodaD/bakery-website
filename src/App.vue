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
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

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
  font-family: "Inter", sans-serif;

}
</style>
