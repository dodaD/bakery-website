<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import { useSwiperItemsStore } from '@/stores/swiperItems.js'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination]
const currentSlideIndex = ref(0)
const swiperRef = ref(null)

// Get items from store
const { swiperItems } = useSwiperItemsStore()

const currentItem = computed(() => {
     return swiperItems.value[currentSlideIndex.value] || swiperItems.value[0]
})

const onSlideChange = (swiper) => {
     currentSlideIndex.value = swiper.realIndex
}

// Navigation methods
const goToNextSlide = () => {
     if (swiperRef.value) {
          swiperRef.value.$el.swiper.slideNext()
     }
}

const goToPrevSlide = () => {
     if (swiperRef.value) {
          swiperRef.value.$el.swiper.slidePrev()
     }
}

// Computed property for slide counter
const slideCounter = computed(() => {
     return `${currentSlideIndex.value + 1}/${swiperItems.value.length}`
})
</script>

<template>
          <Swiper :modules="modules" :slides-per-view="1" :navigation="false" direction="horizontal" :speed="300"
               :allowTouchMove="false" class="swiper-wrapper" @slideChange="onSlideChange" ref="swiperRef">
               <SwiperSlide v-for="item in swiperItems" :key="item.title" class="swiper-slide-content-wrapper">
                    <div class="swiper-slide-content  glass-background swiper-container">
                         <div class="pick-title">{{ item.title }}</div>
                         <div class="pick-description">{{ item.description }}</div>
                         <div class="pick-funny-part">{{ item.funnyPart }}</div>


                         <div class="bottom-section">
                              <button class="explore-button buy-button">Buy now</button>
                              <div class="navigation-area">
                                   <button @click="goToPrevSlide" class="custom-nav-button prev-button">‹</button>
                                   <div class="slide-counter">{{ slideCounter }}</div>
                                   <button @click="goToNextSlide" class="custom-nav-button next-button">›</button>
                              </div>
                         </div>

                         <img :src="currentItem.image" class="pick-image" />
                    </div>
               </SwiperSlide>
          </Swiper>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.pick-image {
     width: 320px;
     margin-top: 20px;
     object-fit: fill;
     position: absolute;
     left: 50px;
     top: 0;
     transform: translateY(-20%);
     z-index: 1;
}

.swiper-wrapper {
     border-radius: 50px;
     margin-top: 80px;
     width: 100%;
}

.pick-title {
     font-size: 28px;
     font-weight: 700;
}

.swiper-slide-content {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: space-evenly;
     padding: 20px 50px 20px 450px;
     height: 350px;
     border-radius: 50px;
}

.swiper-slide-content-wrapper {
     margin-top: 50px;
}

.bottom-section {
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 100%;
}

.navigation-area {
     display: flex;
     align-items: center;
     gap: 15px;
}

.custom-nav-button {
     background: transparent;
     border: 1px solid var(--font-colour);
     color: var(--font-colour);
     width: 20px;
     height: 20px;
     border-radius: 50%;
     display: flex;
     align-items: center;
     justify-content: center;
     font-size: 12px;
     font-weight: bold;
     cursor: pointer;
     transition: all 0.2s ease;

     &:hover {
          background: var(--font-colour);
          color: var(--background-colour);
          transform: scale(1.1);
     }

     &:active {
          transform: scale(0.95);
     }
}

.slide-counter {
     font-size: 14px;
     font-weight: 500;
     color: var(--font-colour);
     min-width: 30px;
     text-align: center;
}
</style>
