<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useCakeSlicesStore } from "@/cakeSlicesStore.js";
import { Navigation } from "swiper/modules";
import { useRouter } from "vue-router";

const cakeSlicesStore = useCakeSlicesStore();
const modules = [Navigation];
const router = useRouter();

function randomSlice(shuffledCakeArray) {
  let foundRandomSlice = false;

  while (!foundRandomSlice) {
    let randomIndex = Math.floor(
      Math.random() * cakeSlicesStore.cakeSlices.length,
    );
    let randomSlice = cakeSlicesStore.cakeSlices[randomIndex];

    if (!shuffledCakeArray.find((element) => element.id === randomSlice.id)) {
      foundRandomSlice = true;
      return randomSlice;
    }
  }
}

function shuffleCakes() {
  let shuffledArray = [];
  for (let i = 0; i < 5; i++) {
    shuffledArray.push(randomSlice(shuffledArray));
  }
  return shuffledArray;
}

const shuffledCakes = shuffleCakes();

const swiperRef = ref(null);
function goToNextSlide() {
  swiperRef.value?.slideNext();
}
function goToPrevSlide() {
  swiperRef.value?.slidePrev();
}
</script>

<template>
  <div class="cake-page-swipper">
    <Swiper
      :modules="modules"
      :slides-per-view="3"
      :slides-per-group="1"
      :space-between="20"
      @swiper="swiperRef = $event"
      :loop="true"
    >
      <button
        @click="goToPrevSlide"
        class="suggestion-swiper-button prev-button"
      >
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
      </button>

      <SwiperSlide
        v-for="slice in shuffledCakes"
        class="cake-suggestion-card"
        @click="router.push({ name: 'CakePage', params: { id: slice.id } })"
      >
        <img :src="slice.image" class="suggestion-card-image" />
        {{ slice.title }}
      </SwiperSlide>

      <button
        @click="goToNextSlide"
        class="suggestion-swiper-button next-button"
      >
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
      </button>
    </Swiper>
  </div>
</template>

<style>
.cake-page-swipper {
  position: relative;
  padding: 0 10px;
}

.cake-suggestion-card {
  height: 430px;
  margin: 0 25px;
  background-color: var(--glass-background);
  border: 1px solid var(--glass-border);
  border-radius: 50px;
}

.suggestion-swiper-button {
  background-color: var(--background);
  border: 1px solid white;
  border-radius: 100%;
  height: 50px;
  width: 50px;
  font-size: 25px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 20px;
}

.prev-button {
  left: 0;
  z-index: 2;
}

.next-button {
  right: 0;
  z-index: 2;
}

.cake-suggestion-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.suggestion-card-image {
  width: 200px;
  margin-bottom: 30px;
}
</style>
