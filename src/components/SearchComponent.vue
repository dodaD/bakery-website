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

function findCake() {
  showSearchInput.value = true;
  searchInput.value.focus();

  if (searchValue.value === "") {
    return;
  }

  const result = cakeSlicesStore.cakeSlices.filter(({ title }) =>
    title.toLowerCase().includes(searchValue.value.toLowerCase())
  );

  if (result[0] == undefined) {
  }

  console.log(result);
  foundCakes.value = result;
}

function checkIfCakeFound() {
  if (foundCakes[0] == undefined) {
    popupInfo.showPopupWindow(
      "Cake not found. Please try another search",
      null
    );
    return;
  }
}

function scrollToCake(id) {
  const el = document.getElementById(`cake-${id}`);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
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
        @keyup.enter="checkIfCakeFound"
        @input="findCake"
      />
      <button @click="findCake">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="icon" />
      </button>
    </div>

    <div class="drop-down-menu">
      <div
        class="found-cake-wrapper"
        v-if="foundCakes != []"
        v-for="foundCake in foundCakes"
        @click="scrollToCake(foundCake.id)"
      >
        {{ foundCake.title }}
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
  top: 40px;
  z-index: 2;
  height: 120px;
  overflow-y: scroll;
}
</style>
