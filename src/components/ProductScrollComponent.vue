<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination]
const currentSlideIndex = ref(0)

const swiperItems = [
     {
          title: 'Chocolate Cake',
          description: 'Rich and decadent chocolate cake with smooth chocolate ganache',
          image: '/Cake Slices/Chocolate Cake Slice.png'
     },
     {
          title: 'Orange Cake',
          description: 'Zesty orange cake with citrus glaze and fresh orange zest',
          image: '/Cake Slices/Orange Cake Slice.png'
     },
     {
          title: 'Tiramisu Cake',
          description: 'Classic Italian tiramisu cake with coffee and mascarpone',
          image: '/Cake Slices/Tiramisu Cake Slice.png'
     }

]

const currentItem = computed(() => {
     return swiperItems[currentSlideIndex.value] || swiperItems[0]
})

const onSlideChange = (swiper) => {
     currentSlideIndex.value = swiper.realIndex
}
</script>

<template>
     <div class="swiper-wrapper">
          <Swiper :modules="modules" :slides-per-view="1" :navigation="true" direction="horizontal"
               class="swiper-container" @slideChange="onSlideChange">
               <SwiperSlide v-for="item in swiperItems" :key="item.title" class="swiper-slide-content glass-background">
                    <div class="cake-title">Trendy Cake Slices</div>
                    <div class="cake-description">{{ item.title }}</div>
               </SwiperSlide>
          </Swiper>
          <img :src="currentItem.image" class="cake-image" />
     </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";

.swiper-wrapper {
     height: 360px;
     width: 290px;
     position: relative;
}

.swiper-slide-content {
     display: flex;
     align-items: center;
     justify-content: center;
     text-align: center;
     flex-direction: column;
     height: 100%;
}


.cake-slide {
     display: flex;
     flex-direction: column;
     align-items: center;
     height: 100%;
     width: 100%;
     position: relative;
     justify-content: center;
}

.cake-image {
     width: 150px;
     height: 250px;
     object-fit: fill;
     position: absolute;
     top: 0;
     right: 50%;
     z-index: 10;
     transform: translateY(-100px) translateX(50%) rotate(242deg);
     user-select: none;
}

.glass-background {
     border-radius: 16px;
     background: var(--glass-background);
     backdrop-filter: blur(12px);
     -webkit-backdrop-filter: blur(12px);
}
</style>