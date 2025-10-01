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

// Get items from store
const { swiperItems } = useSwiperItemsStore()

const currentItem = computed(() => {
     return swiperItems.value[currentSlideIndex.value] || swiperItems.value[0]
})

const onSlideChange = (swiper) => {
     currentSlideIndex.value = swiper.realIndex
}
</script>

<template>
     <div class="swiper-wrapper glass-background">
          <Swiper :modules="modules" :slides-per-view="1" :navigation="true" direction="horizontal"
               class="swiper-container" @slideChange="onSlideChange">
               <SwiperSlide v-for="item in swiperItems" :key="item.title" class="swiper-slide-content">
                    <div class="pick-title">{{ item.title }}</div>
                    <div class="pick-description">{{ item.description }}</div>
                    <div class="pick-funny-part">{{ item.funnyPart }}</div>
                    <button class="explore-button buy-button">Buy now</button>
               </SwiperSlide>
          </Swiper>
          <img :src="currentItem.image" class="pick-image" />
     </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.swiper-wrapper {
     position: relative;
     height: 350px;
     margin-top: 80px;
     border-radius: 50px;
}

.pick-image {
     width: 250px;
     margin-top: 20px;
     object-fit: fill;
     position: absolute;
     left: 20px;
     top: 0;
     transform: translateY(-10%);
}

.swiper-container {
     border-radius: 50px;
}

.swiper-slide-content {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: space-evenly;
     height: 100%;
     padding: 20px 50px 20px 310px;
     box-sizing: border-box;
}
</style>
