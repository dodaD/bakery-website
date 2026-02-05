<script setup>
import { useTemplateRef, ref } from "vue";
import { useCakeSlicesStore } from "@/cakeSlicesStore.js";
import { usePopupWindowStore } from "@/stores/popUpWindowStore";

const cakeSlicesStore = useCakeSlicesStore();
const popupInfo = usePopupWindowStore();

const showSearchInput = ref(false);
const searchValue = ref("");
const searchInput = useTemplateRef("search-input");
const foundCakes = ref([]);

function findCakes() {
  showSearchInput.value = true;
  searchInput.value.focus();

  if (searchValue.value === "") {
    return;
  }

  const result = cakeSlicesStore.cakeSlices.filter(({ title }) =>
    title.toLowerCase().includes(searchValue.value.toLowerCase())
  );

  foundCakes.value = result;
}

function scrollToCake(id) {
  const el = document.getElementById(`cake-${id}`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.add("is-hovered");

    setTimeout(() => {
      el.classList.remove("is-hovered");
    }, 3000);
    foundCakes.value = [];
  }
}

function scrollToCakeIfFound() {
  if (foundCakes.value[0] === undefined) {
    popupInfo.showPopupWindow(
      "Cake not found. Please try another search",
      null
    );
    return;
  }

  scrollToCake(foundCakes.value[0].id);
  showSearchInput.value = false;
  foundCakes.value = [];
}

function closeSearchInput() {
  showSearchInput.value = false;
}
</script>

<template>
  <div class="search-wrapper">
    <div class="input-wrapper">
      <input
        v-model="searchValue"
        class="search-input"
        :class="{ 'show-search-input': showSearchInput }"
        ref="search-input"
        @keyup.enter="scrollToCakeIfFound"
        @input="findCakes"
        @blur="closeSearchInput"
      />
      <button @click="findCakes">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="icon" />
      </button>
    </div>

    <div class="drop-down-menu" v-if="foundCakes[0] !== undefined">
      <div
        class="found-cake-wrapper"
        v-for="foundCake in foundCakes"
        @click="scrollToCake(foundCake.id)"
      >
        <img :src="foundCake.image" class="found-cake-image" />
        <div class="found-cake-title">{{ foundCake.title }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.search-input {
  transition: opacity 0.3s ease-in-out;
  background: transparent;
  border: none;
  border-bottom: 2px solid var(--font-colour);
  outline: none;
  font-size: 18px;
  font-family: "Inter", sans-serif;
  padding-left: 15px;
  opacity: 0;
}

.show-search-input {
  opacity: 1;
}

.input-wrapper {
  display: flex;
  position: relative;

  button {
    background: none;
    border: none;
    margin-left: 20px;
    cursor: pointer;
  }
}

.icon {
  height: 20px;
  width: 20px;
}

.search-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
}

.drop-down-menu {
  position: absolute;
  top: 45px;
  z-index: 2;
  width: 195px;
  max-height: 120px;
  overflow-y: scroll;
  border: 1px solid var(--font-colour);
  border-radius: 10px;
  background-color: var(--background);
  padding: 15px 10px;
  font-size: 15px;
}

.found-cake-wrapper {
  display: flex;
  transition: all 0.3s ease;
  align-items: center;
}

.found-cake-image {
  width: 40px;
  margin-right: 10px;
}

.found-cake-title:hover {
  shadow: 0 0 3px rgba(255, 255, 255, 0.6), 0 0 4px rgba(255, 255, 255, 0.4),
    inset 0 0 5px rgba(255, 255, 255, 0.2);

  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.6),
    0 0 5px rgba(255, 255, 255, 0.2);
}
</style>
