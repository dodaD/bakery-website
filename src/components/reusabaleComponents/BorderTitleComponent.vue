<script setup></script>

<template>
  <div class="border-wrapper">
    <div class="title cornered-border">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.border-wrapper {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}

.title {
  padding: 10px 25px;
  font-size: 36px;
  font-weight: 700;
}
</style>
