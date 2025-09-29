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
               class="swiper-container glass-background" @slideChange="onSlideChange">
               <SwiperSlide v-for="item in swiperItems" :key="item.title" class="swiper-slide-content">
                    <div class="slide-title">Trendy Cake Slices</div>
                    <div class="cake-description">{{ item.title }}</div>
                    <button class="buy-button">Buy now</button>
               </SwiperSlide>
          </Swiper>
          <img :src="currentItem.image" class="cake-image" />
     </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";

.swiper-wrapper {
     height: 370px;
     width: 310px;
     position: relative;
}

.swiper-container {
     border-radius: 46px;
     border: 1px solid var(--glass-border);
     padding-left: 60px;
}

.swiper-slide-content {
     display: flex;
     align-items: flex-start;
     justify-content: flex-end;
     text-align: center;
     flex-direction: column;
     height: 100%;
     transition: all 0.3s ease;
}

.swiper-slide-content:hover .buy-button {
     box-shadow: 0 0 10px rgba(255, 255, 255, 0.6),
          0 0 20px rgba(255, 255, 255, 0.4),
          inset 0 0 10px rgba(255, 255, 255, 0.2);
}

.swiper-container:hover {
     box-shadow: 0 0 15px rgba(255, 255, 255, 0.3),
          0 0 30px rgba(255, 255, 255, 0.2);
     transition: all 0.3s ease;
}

.slide-title {
     font-size: 20px;
     font-weight: 600;
     margin-top: 25px;
     margin-bottom: 10px;
     transition: all 0.3s ease;
}

.cake-description {
     margin-bottom: 10px;
     transition: all 0.3s ease;
}

.cake-image {
     width: 150px;
     height: 280px;
     object-fit: fill;
     position: absolute;
     top: 0;
     right: 50%;
     z-index: 10;
     transform: translateY(-65px) translateX(50%) rotate(242deg);
     user-select: none;
}

.glass-background {
     background: var(--glass-background);
     backdrop-filter: blur(12px);
     -webkit-backdrop-filter: blur(12px);
}

.buy-button {
     background-color: unset;
     border: 1px solid var(--font-colour);
     border-radius: 8px;
     cursor: pointer;
     font-size: 15px;
     font-weight: 350;
     font-family: 'Inter';
     width: fit-content;
     padding: 5px 25px;
     margin-bottom: 85px;
     transition: all 0.3s ease;
}

/* Custom Swiper Navigation Arrows */
.swiper-container :deep(.swiper-button-next),
.swiper-container :deep(.swiper-button-prev) {
     color: var(--font-colour);
     width: 20px;
     height: 20px;
     margin-top: -10px;
     font-size: 12px;
     font-weight: bold;
}

.swiper-container :deep(.swiper-button-next):after,
.swiper-container :deep(.swiper-button-prev):after {
     font-size: 12px;
     font-weight: bold;
}

/* Hide arrows when disabled */
.swiper-container :deep(.swiper-button-disabled) {
     opacity: 0;
     visibility: hidden;
     transition: opacity 0.3s ease, visibility 0.3s ease;
}

/* Position arrows */
.swiper-container :deep(.swiper-button-next) {
     right: 10px;
}

.swiper-container :deep(.swiper-button-prev) {
     left: 10px;
}
</style>