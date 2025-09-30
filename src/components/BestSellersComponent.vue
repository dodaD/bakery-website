<script setup>
const cakeSlices = [
     {
          id: 1,
          name: 'Carrot Cake',
          image: '/Cake Slices/Carrot Cake Slice.png',
          description: 'Moist carrot cake with cream cheese frosting'
     },
     {
          id: 2,
          name: 'Chocolate Cake',
          image: '/Cake Slices/Chocolate Cake Slice.png',
          description: 'Rich chocolate cake with chocolate ganache'
     },
     {
          id: 3,
          name: 'Coffee Cake',
          image: '/Cake Slices/Coffee Cake Slice.png',
          description: 'Aromatic coffee-flavored sponge cake'
     },
     {
          id: 4,
          name: 'Orange Cake',
          image: '/Cake Slices/Orange Cake Slice.png',
          description: 'Fresh orange cake with citrus glaze'
     },
     {
          id: 5,
          name: 'Pecan Cake',
          image: '/Cake Slices/Pecan cake slice.png',
          description: 'Nutty pecan cake with caramel drizzle'
     },
     {
          id: 6,
          name: 'Strawberry Cake',
          image: '/Cake Slices/Strawberry Cake slice.png',
          description: 'Light strawberry cake with fresh berries'
     }
];
</script>

<template>
     <div class="best-sellers-container">
          <div class="best-sellers-title">Best Sellers</div>
     </div>

     <div class="grid-container">
          <div v-for="cake in cakeSlices" :key="cake.id" class="cake-card">
               <div class="cake-image-container">
                    <img :src="cake.image" :alt="cake.name" class="cake-image" />
               </div>
               <div class="cake-info">
                    <h3 class="cake-name">{{ cake.name }}</h3>
                    <p class="cake-description">{{ cake.description }}</p>
               </div>
          </div>
     </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.best-sellers-container {
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     margin: 20px 0;
}

.best-sellers-title {
     font-size: 36px;
     font-weight: 700;
     margin: 40px 0 20px;
     position: relative;
     padding: 10px 25px;
     z-index: 2;
}

.best-sellers-title::before,
.best-sellers-title::after {
     content: '';
     position: absolute;
     width: 20px;
     height: 30px;
     border: 4px solid transparent;
     background: linear-gradient(var(--background), var(--background)) padding-box,
          linear-gradient(45deg,
               rgb(255, 128, 171),
               rgb(194, 24, 91),
               rgb(255, 128, 171)) border-box;
}

.best-sellers-title::before {
     top: 0;
     left: 0;
     border-right: none;
     border-bottom: none;
     border-top-left-radius: 8px;
}

.best-sellers-title::after {
     bottom: 0;
     right: 0;
     border-left: none;
     border-top: none;
     border-bottom-right-radius: 8px;
}

.grid-container {
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(2, 2fr);
     gap: 95px;
     margin-top: 130px;
     max-width: 100%;
     width: 100%;
     box-sizing: border-box;
}

.cake-card {
     background: var(--glass-background);
     border: 1px solid var(--glass-border);
     backdrop-filter: blur(10px);
     -webkit-backdrop-filter: blur(10px);
     border-radius: 15px;
     padding: 20px;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cake-card:hover {
     transform: translateY(-5px);
     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cake-image-container {
     flex: 1;
     display: flex;
     align-items: center;
     justify-content: center;
     margin-bottom: 15px;
}

.cake-image {
     width: 250px;
     object-fit: contain;
     border-radius: 10px;
     transform: translateY(-120px) rotate(182deg);
}

.cake-info {
     text-align: center;
}

.cake-name {
     font-size: 24px;
     font-weight: 700;
     color: var(--font-colour);
     margin: 0 0 10px 0;
}

.cake-description {
     font-size: 16px;
     color: var(--font-colour);
     opacity: 0.8;
     margin: 0;
     line-height: 1.4;
}
</style>