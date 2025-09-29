<script setup>
import ProductScrollComponent from './ProductScrollComponent.vue'
import ReviewComponent from './ReviewComponent.vue'
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
     </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";

.hero-wrapper {
     margin-top: 95px;
     position: relative;
     display: flex;
     min-height: 800px;
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
}

.title {
     font-weight: 600;
     font-size: 90px;
}

.description {
     margin-bottom: 20px;
}

.explore-button {
     background-color: unset;
     border: 1px solid var(--font-colour);
     border-radius: 8px;
     cursor: pointer;
     font-size: 15px;
     font-weight: 350;
     font-family: 'Inter';
     width: fit-content;
     padding: 5px 25px;
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
</style>