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
     <Swiper :modules="modules" :slides-per-view="1" :navigation="true" direction="horizontal"
          class="product-swiper" @slideChange="onSlideChange">
          <SwiperSlide v-for="item in swiperItems" :key="item.title" class="swiper-slide-content glass-background">
               <div>
                    <div class="slide-title">Trendy Cake Slices</div>
                    <div class="cake-description">{{ item.title }}</div>
                    <button class="explore-button buy-button">Buy now</button>
               </div>

               <img :src="currentItem.image" class="cake-image" />
          </SwiperSlide>
     </Swiper>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.product-swiper :deep(.swiper-wrapper) {
     width: 310px;
     border-radius: 46px;
}

.swiper-slide-content {
    display: flex;
    text-align: center;
    transition: all 0.3s ease;
    height: 370px;
    flex-direction: column-reverse;
     margin-top: 80px;
     border-radius: 46px;

    border: 1px solid var(--glass-border);
     box-sizing: border-box;
}

.swiper-slide-content:hover .buy-button {
     box-shadow: 0 0 10px rgba(255, 255, 255, 0.6),
          0 0 20px rgba(255, 255, 255, 0.4),
          inset 0 0 10px rgba(255, 255, 255, 0.2);
}

.swiper-slide-content:hover {
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
    transform: translateY(-15px) translateX(50%) rotate(242deg);
    user-select: none;
}

.glass-background {
     background: var(--glass-background);
     backdrop-filter: blur(12px);
     -webkit-backdrop-filter: blur(12px);
}

.buy-button {
     margin-bottom: 85px;
     transition: all 0.3s ease;
}

/* Custom Swiper Navigation Arrows */
.product-swiper :deep(.swiper-button-next),
.product-swiper :deep(.swiper-button-prev) {
     color: var(--font-colour);
     width: 20px;
     height: 20px;
     margin-top: -10px;
     font-size: 12px;
     font-weight: bold;
}

.product-swiper :deep(.swiper-button-next):after,
.product-swiper :deep(.swiper-button-prev):after {
     font-size: 12px;
     font-weight: bold;
}

/* Hide arrows when disabled */
.product-swiper :deep(.swiper-button-disabled) {
     opacity: 0;
     visibility: hidden;
     transition: opacity 0.3s ease, visibility 0.3s ease;
}

/* Position arrows */
.product-swiper :deep(.swiper-button-next) {
     right: 10px;
}

.product-swiper :deep(.swiper-button-prev) {
     left: 10px;
}
</style>