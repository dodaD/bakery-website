<script setup>
import NutritionSelector from "./NutritionSelector.vue";
import { usePopupWindowStore } from "../../stores/popUpWindowStore.js";
import { ref, defineProps } from "vue";

const popupInfo = usePopupWindowStore();
const props = defineProps({
  cake: { Object, required: true },
});

const isDescriptionShowing = ref(true);
const isNutritionShowing = ref(false);
const isIngredientsShowing = ref(false);

function switchToSection(section) {
  if (section === "description") {
    isDescriptionShowing.value = true;
    isIngredientsShowing.value = isNutritionShowing.value = false;
    return;
  }
  if (section === "nutrutions") {
    isNutritionShowing.value = true;
    isIngredientsShowing.value = isDescriptionShowing.value = false;
    return;
  }
  isIngredientsShowing.value = true;
  isNutritionShowing.value = isDescriptionShowing.value = false;
}
</script>

<template>
  <div class="cake-page-hero-wrapper">
    <img :src="cake.image" class="cake-page-image" />

    <div class="cake-page-info-wrapper">
      <h4 class="cake-page-title">{{ cake.title }}</h4>

      <div class="cake-hero-buttons">
        <button
          class="cake-hero-button"
          @click="switchToSection('description')"
          :class="{ 'bottom-border': isDescriptionShowing }"
        >
          Description
        </button>
        <button
          class="cake-hero-button"
          @click="switchToSection('nutrutions')"
          :class="{ 'bottom-border': isNutritionShowing }"
        >
          Nutrutions
        </button>
        <button
          class="cake-hero-button"
          @click="switchToSection('ingridients')"
          :class="{ 'bottom-border': isIngredientsShowing }"
        >
          Ingridients
        </button>
      </div>

      <div class="cake-info">
        <div v-if="isDescriptionShowing" class="cake-page-description">
          {{ cake.full_description }}
        </div>

        <div v-if="isNutritionShowing" class="cake-nutritions">
          <NutritionSelector :cake="cake" />
        </div>

        <div v-if="isIngredientsShowing" class="cake-ingredients">
          <div v-for="ingredient in cake.ingredients" class="ingredient">
            <font-awesome-icon icon="fa-regular fa-circle-dot" />
            {{ ingredient }}
          </div>
        </div>
        <button
          class="rectangle-rounded-button cake-page-button"
          @click="popupInfo.openBuyNowMessage(cake.title)"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.cake-page-hero-wrapper {
  display: flex;
  flex-direction: row;
  height: 700px;
  margin-bottom: 50px;
}

.cake-page-image {
  height: 500px;
  width: auto;
  margin-right: 50px;
}

.cake-page-title {
  font-size: 25px;
  font-style: bold;
}

.cake-hero-buttons {
  margin-left: auto;
  width: fit-content;
}

.cake-hero-button {
  background-color: transparent;
  border: none;
  font-size: 17px;
  margin: 0;
  padding-bottom: 5px;
  margin-bottom: 10px;
}

.cake-hero-buttons button:first-of-type {
  padding-left: 0;
}

.cake-page-info-wrapper {
  padding: 0 15px;
  flex: 1;
}

.bottom-border {
  border-bottom: 2px solid var(--font-colour);
}

.cake-info {
  width: 100%;
  background-color: var(--footer-accent);
  padding: 25px 40px;
  min-height: 250px;
  box-sizing: border-box;
  border-radius: 50px;
  line-height: 30px;
}

.cake-ingredients {
  column-count: 2;
  column-gap: 0;
}

.cake-page-button {
  margin-top: 40px;
}

.cake-page-button {
  margin: 10px 0;
}
</style>
