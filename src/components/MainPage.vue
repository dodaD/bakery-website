<script setup>
import NavigationComponent from './NavigationComponent.vue'
import HeroComponent from './HeroComponent.vue'
import BestSellersComponent from './BestSellersComponent.vue';
import ReviewComponent from './ReviewComponent.vue';
import TopPicksScrollComponent from './TopPicksScrollComponent.vue';
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
               <ReviewComponent name="John Smith"
                    text="I absolutely loved the carrot cake! It was so moist and flavorful. The cream cheese frosting was the perfect touch."
                    rating="5" />
               <ReviewComponent name="Emily Johnson"
                    text="The chocolate cake is to die for! Rich, decadent, and not too sweet. Highly recommend!"
                    rating="4.8" />
               <ReviewComponent name="Michael Brown"
                    text="I wasn't a fan of the coffee cake. It was a bit too dry for my liking." rating="3.8" />
          </div>

          <div class="our-pick-title">
               <div class="cornered-border">Our Top Picks</div>
               <TopPicksScrollComponent />
          </div>

          <div class="footer"></div>
     </div>
</template>


<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.content-wrapper {
     max-width: 1500px;
     position: absolute;
     right: 50%;
     transform: translateX(50%);
     width: 100%;
     background-color: var(--background);
     padding: 25px 40px;
     box-sizing: border-box;


     min-height: 100%;
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
</style>