<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  cake: { Object, required: true },
});
</script>

<template>
  <div class="nutritions-wrapper">
    <div class="nutrition-heading">Nutrutions Facts</div>
    <div class="under-heading">Per 100g</div>

    <div class="nutritient-wrapper">
      <div class="bold-text">Calories</div>
      {{ cake.calories }}
    </div>

    <div class="nutritient-wrapper">
      <div class="bold-text">Fat</div>
      {{ cake.fat }}
    </div>

    <div class="nutritient-wrapper">
      <div class="bold-text">Cholesterol</div>
      {{ cake.cholesterol }}
    </div>

    <div class="nutritient-wrapper">
      <div class="bold-text">Sodium</div>
      {{ cake.sodium }}
    </div>

    <div class="nutritient-wrapper">
      <div class="bold-text">Carbohydrates</div>
      {{ cake.carbohydrates }}
    </div>

    <div class="nutritient-wrapper">
      <div class="bold-text">Protein</div>
      {{ cake.protein }}
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";
.nutritions-wrapper {
  border: 1px solid var(--font-colour);
  margin: 10px;
  padding: 30px 20px 45px;
  border-radius: 15px;
}

.nutrition-heading {
  font-size: 30px;
  font-weight: bold;
}

.under-heading {
  border-bottom: 2px solid var(--font-colour);
  margin: 5px 0;
}

.nutritient-wrapper {
  border-bottom: 1px solid var(--font-colour);
  display: flex;
  padding-left: 10px;
}

.bold-text {
  font-weight: bold;
  margin-right: 10px;
}
</style>
