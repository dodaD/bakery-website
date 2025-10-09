<script setup>
import NavigationComponent from './NavigationComponent.vue'
import HeroComponent from './HeroComponent.vue'
import BestSellersComponent from './BestSellersComponent.vue';
import ReviewComponent from './ReviewComponent.vue';
import TopPicksScrollComponent from './TopPicksScrollComponent.vue';
import FooterComponent from './FooterComponent.vue';
import { useCommentsStore } from '@/stores/commentsStore.js'

const { comments } = useCommentsStore()
</script>

<template>
     <div class="content-wrapper">
          <NavigationComponent />

          <HeroComponent />

          <BestSellersComponent />

          <div class="customer-reviews-title">
               <div class="cornered-border">Customer Reviews</div>
          </div>
          <div class="customer-reviews-container">
               <ReviewComponent v-for="n in 3" :key="comments[n].id" :name="comments[n].author" :text="comments[n].text" :rating="comments[n].rating" class="review"
                     />
          </div>

          <div class="our-pick-title">
               <div class="cornered-border">Our Top Picks</div>
               <TopPicksScrollComponent />
          </div>

          <div class="footer-container">
               <FooterComponent />
          </div>
     </div>

</template>


<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.content-wrapper {
     max-width: 1500px;
     right: 50%;
     width: 100%;
     background-color: var(--background);
     padding: 25px 40px;
     box-sizing: border-box;
     position: absolute;
     top: 0;
     transform: translateX(50%);
}

.customer-reviews-container {
     display: flex;
     gap: 20px;
     justify-content: space-between;
     margin: 40px 0;
}

.customer-reviews-container :deep(.review) {
     width: auto;
     transform: none;
}

.cornered-border {
     position: relative;
     display: inline-block;
     padding: 10px 25px;
     font-size: 36px;
     font-weight: 700;
     margin: 40px auto 20px;
}

.customer-reviews-title,
.our-pick-title {
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
}

.footer-container {
     width: 100%;
     height: 300px;
     margin-top: 65px;
     position: relative;
}
</style>