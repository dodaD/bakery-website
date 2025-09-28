<script setup>
</script>

<template>
     <div class="hero-wrapper">
          <div class="hero-grid">
               <div class="title glass-background">Delicious Baked Goods</div>
               <div class="product-scroll-wrapper glass-background">Freshly made just for you</div>
               <div class="review glass-background">
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

.title {
     grid-column: 1;
     grid-row: 1;
     display: flex;
     align-items: center;
     justify-content: center;
}

.product-scroll-wrapper {
     grid-column: 2;
     grid-row: 1 / 3;
     display: flex;
     align-items: center;
     justify-content: center;
     text-align: center;
}

.glass-background {
     border-radius: 16px;

     background: rgba(255, 255, 255, 0.2);
     backdrop-filter: blur(12px);
     -webkit-backdrop-filter: blur(12px);

     border: 1px solid rgba(255, 255, 255, 0.3);
     color: white;
     text-align: center;
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