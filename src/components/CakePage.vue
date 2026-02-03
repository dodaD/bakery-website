<script>
const props = defineProps({
  cake: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="cake-page-hero-wrapper">
      <img src="cake.image" class="cake-page-image" />

      <div class="cake-page-text-wrapper">
        <div class="cake-page-title">cake.title</div>
        <div>cake.page-description</div>

        <!-- BuyNow reusabaleComponents -->
        <div class="cake-page-buttons">
          <button>View Ingridients</button>
          <button>View Nutrition Facts</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";
</style>
