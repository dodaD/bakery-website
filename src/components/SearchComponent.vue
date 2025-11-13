<script setup>
import { useTemplateRef, ref } from "vue";
import { useCakeSlicesStore } from "@/stores/cakeSlicesStore.js";
import { useMobileStore } from "@/stores/isMobileStore.js";

const cakeSlicesStore = useCakeSlicesStore();
const mobileStore = useMobileStore();

const showSearchInput = ref(false);
const searchValue = ref("");
const searchFailedMessage = ref(false);
const searchInput = useTemplateRef("search-input");

function findCake() {
  showSearchInput.value = !showSearchInput.value;
  searchInput.value.focus();

  if (searchValue.value !== "") {
    const result = cakeSlicesStore.cakeSlices.filter(({ title }) =>
      title.toLowerCase().includes(searchValue.value.toLowerCase())
    );

    searchValue.value = "";
    if (result[0] != undefined) {
      scrollToCake(result[0].id);
      return;
    }

    searchFailedMessage.value = true;
    setTimeout(() => {
      searchFailedMessage.value = false;
    }, 1500);
  }
}

function scrollToCakebutton(id) {
  const el = document.getElementById(`cake-${id}`);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
}
</script>

<template>
  <div class="input-wrapper">
    <input
      v-model="searchValue"
      class="search-input"
      :class="{ 'show-search-input': showSearchInput }"
      ref="search-input"
      @keyup.enter="findCake"
    />
    <button @click="findCake">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="icon" />
    </button>
  </div>

  <div
    :class="{
      'hide-message': !searchFailedMessage,
      'alert-message-mobile': mobileStore.isMobile,
    }"
    class="alert-message"
  >
    Cake not found. Please try again.
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
</style>
