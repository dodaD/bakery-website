<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination]
const swiperItems = [
     {
          title: 'Chocolate Cake',
          description: 'Rich and decadent chocolate cake with smooth chocolate ganache',
          image: '/Cake Slices/Chocolate Cake Slice.png'
     },
     {
          title: 'Carrot Cake',
          description: 'Moist carrot cake with cream cheese frosting and walnuts',
          image: '/Cake Slices/Carrot Cake Slice.png'
     },
     {
          title: 'Strawberry Cake',
          description: 'Fresh strawberry cake with light vanilla cream',
          image: '/Cake Slices/Strawberry Cake slice.png'
     }
]

</script>

<template>
     <Swiper :modules="modules" :slides-per-view="1" :loop="true" :navigation="true" direction="horizontal"
          class="swiper-container glass-background">
          <SwiperSlide v-for="item in swiperItems" :key="item.title" class="swiper-slide-content">
               <img :src="item.image" :alt="item.title" class="cake-image" />
               <div class="cake-info">
                    <h3 class="cake-title">{{ item.title }}</h3>
                    <p class="cake-description">{{ item.description }}</p>
               </div>
          </SwiperSlide>
     </Swiper>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";

.swiper-container {
     height: 380px;
     width: 290px;
}

.swiper-slide-content {
     display: flex;
     align-items: center;
     justify-content: center;
     text-align: center;
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
     width: auto;
     height: 250px;
     object-fit: contain;
     position: absolute;
     top: 0;

     transform: translateY(-40%)
}

.glass-background {
     border-radius: 16px;
     background: var(--glass-background);
     backdrop-filter: blur(12px);
     -webkit-backdrop-filter: blur(12px);
}
</style>