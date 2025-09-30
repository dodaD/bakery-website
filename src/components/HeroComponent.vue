<script setup>
import ProductScrollComponent from './ProductScrollComponent.vue'
import ReviewComponent from './ReviewComponent.vue'
import TrendyCakesComponent from './TrendyCakesComponent.vue'
</script>

<template>
     <div class="hero-wrapper">
          <div class="hero-grid">
               <div class="title-wrapper">
                    <div class="title">Breath Natural</div>
                    <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                         tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <button class="explore-button">Explore</button>
               </div>

               <div class="product-scroll-wrapper">
                    <ProductScrollComponent />
               </div>
               <div class="review-container">
                    <ReviewComponent />
               </div>
          </div>
          <img src="/CakePicture.jpg" class="photo">

          <div class="hero-title">Our Trendy Cakes</div>
          <TrendyCakesComponent />
     </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.hero-wrapper {
     margin-top: 95px;
     position: relative;
     display: flex;
     min-height: 800px;
     flex-direction: column;
     background-image: radial-gradient(circle 600px at center,
               /* circle radius & position */
               var(--background-dark-accent) 0%,
               var(--background-accent) 70%,
               var(--background) 100%);
}

.hero-grid {
     display: grid;
     grid-template-columns: 2fr 1fr;
     grid-template-rows: 2fr 1fr;
     width: 100%;
     height: 600px;
     z-index: 1;
}

.title-wrapper {
     grid-column: 1;
     grid-row: 1;
     display: flex;
     padding-right: 100px;
     flex-direction: column;
     max-width: 670px;
}

.title {
     font-weight: 600;
     font-size: 90px;
}

.description {
     margin-bottom: 20px;
}


.product-scroll-wrapper {
     grid-column: 2;
     grid-row: 1 / 3;
     display: flex;
     align-items: flex-start;
     justify-content: center;
     margin-left: auto;
     margin-top: 50px;
}

.review-container {
     grid-column: 1;
     grid-row: 2;
}

.photo {
     width: auto;
     height: 800px;
     opacity: 0.85;
     position: absolute;
     top: 0;
     right: 50%;
     transform: translateX(50%);
}

.hero-title {
     width: 100%;
     text-align: center;
     font-size: 50px;
     font-weight: 600;
     color: var(--font-colour);
     z-index: 1;
     margin: 40px 0;
}
</style>