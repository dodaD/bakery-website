<script setup>
import { ref } from "vue";
import { useCakeSlicesStore } from "@/stores/cakeSlicesStore.js";

const { cakeSlices } = useCakeSlicesStore();
const emit = defineEmits(["showCake", "scrollToContacts"]);

const showSearchInput = ref(false);
const searchValue = ref("");
const searchFailedMessage = ref(false);

function findCake() {
  showSearchInput.value = !showSearchInput.value;

  if (searchValue.value !== "") {
    const result = cakeSlices.filter(({ name }) =>
      name.toLowerCase().includes(searchValue.value.toLowerCase())
    );

    if (result[0] != undefined) {
      emit("showCake", result[0].id);
      return;
    }

    searchValue.value = "";
    searchFailedMessage.value = true;
    setTimeout(() => {
      searchFailedMessage.value = false;
    }, 1500);
  }
}
</script>

<template>
  <div class="navigation">
    <div class="logo">
      <div>Bakery</div>
    </div>
    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/shop">Shop</router-link>
      <a @click="$emit('scrollToContacts')">Contact</a>
    </div>

    <div class="buttons-wrapper">
      <input
        v-model="searchValue"
        class="search-input"
        :class="{ 'show-search-input': showSearchInput }"
      />
      <button @click="findCake">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="icon" />
      </button>
      <button>
        <font-awesome-icon :icon="['fas', 'bag-shopping']" class="icon" />
      </button>
    </div>
  </div>

  <div
    :class="{ 'hide-message': !searchFailedMessage }"
    class="alert-message glass-background"
  >
    Cake not found. Please try again.
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.navigation {
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 20px;
}

.menu {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.menu a:first-of-type {
  margin-left: 0;
}

.menu a:last-of-type {
  margin-right: 0;
}

.buttons-wrapper {
  display: flex;

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

.logo {
  margin-right: 20%;
}

.search-input {
  transition: opacity 0.3s ease-in-out;
  background: transparent;
  border: none;
  border-bottom: 2px solid var(--font-colour);
  outline: none;
  font-size: 18px;
  font-family: "Inter", sans-serif;
  padding-left: 15px;
  transform: translateY(2px);
  opacity: 0;
}

.show-search-input {
  opacity: 1;
}
</style>
