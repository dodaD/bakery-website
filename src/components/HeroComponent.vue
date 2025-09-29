<script setup>
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

               <div class="product-scroll-wrapper ">Freshly made just for you</div>
               <div class="review">
                    <p>⭐⭐⭐⭐⭐</p>
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
     min-height: 600px;
}

.hero-grid {
     display: grid;
     grid-template-columns: 2fr 1fr;
     grid-template-rows: 2fr 1fr;
     width: 100%;
     height: fit-content;
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
}

.glass-background {
     border-radius: 16px;

     background: var(--glass-background);
     backdrop-filter: blur(12px);
     -webkit-backdrop-filter: blur(12px);

     border: 1px solid var(--glass-border);
}

.review {
     grid-column: 1;
     grid-row: 2;
     display: flex;
     align-items: center;
     justify-content: center;
}

.photo {
     width: 70%;
     height: auto;
     margin: 0 15%;
     opacity: 0.85;
     position: absolute;
     top: 0;
}
</style>