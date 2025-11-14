<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="border-wrapper">
    <div class="title cornered-border">
      {{ title }}
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
