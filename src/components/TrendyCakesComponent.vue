<script setup>
const cakes = [
     {
          id: 1,
          title: 'Chocolate Cake Slice',
          description: 'Rich and decadent chocolate cake with smooth chocolate ganache and a hint of espresso to enhance the chocolate flavor. Perfect for chocolate lovers!',
          price: '15.99',
          image: '/Cake Slices/Chocolate Cake Slice.png'
     },
     {
          id: 2,
          title: 'Orange Cake Slice',
          description: 'Zesty orange cake with citrus glaze and fresh orange zest. A perfect balance of sweet and tangy flavors.',
          price: '12.99',
          image: '/Cake Slices/Orange Cake Slice.png'
     },
     {
          id: 3,
          title: 'Tiramisu Cake Slice',
          description: 'Classic Italian tiramisu with layers of coffee-soaked ladyfingers and mascarpone cream. A delightful pick-me-up dessert!',
          price: '14.99',
          image: '/Cake Slices/Tiramisu Cake Slice.png'
     }
]
</script>

<template>
     <div v-for="(cake, index) in cakes" :key="cake.id" class="cake-container glass-background">
          <img v-if="index % 2 === 0" :src="cake.image" :alt="cake.title" class="cake-image" />

          <div class="cake-content">
               <div class="cake-title">{{ cake.title }}</div>
               <div class="cake-description">{{ cake.description }}</div>
               <div class="cake-price">${{ cake.price }}</div>
               <button class="explore-button">Buy now</button>
          </div>

          <img v-if="index % 2 === 1" :src="cake.image" :alt="cake.title" class="cake-image distance-on-right" />
     </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.cake-container {
     display: flex;
     width: 100%;
     height: 250px;
     flex-direction: row;
     margin: 20px 0;
     padding: 15px 30px;
     box-sizing: border-box;
     align-items: center;
     border-radius: 50px;
     border: 1px solid rgba(255, 255, 255, 0.3);
     backdrop-filter: blur(12px);
     -webkit-backdrop-filter: blur(12px);
}

.cake-image {
     width: 200px;
     transform: translateY(-12%);
     margin: 0 50px;
}

.cake-title {
     font-size: 27px;
     font-weight: 700;
     margin-bottom: 10px;
}

.cake-price {
     margin: 10px 0;
     font-size: 27px;
     font-weight: 700;
}

.distance-on-right {
     margin-left: auto;
}
</style>