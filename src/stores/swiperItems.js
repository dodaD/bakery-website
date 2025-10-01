import { ref } from 'vue'

export const useSwiperItemsStore = () => {
     const swiperItems = ref([
          {
               id: 1,
               title: "Heavenly Chocolate Delight",
               description: "Indulge in our rich, velvety chocolate cake with layers of dark chocolate ganache and a hint of espresso. Perfect for celebrations!",
               funnyPart: "Warning: May cause uncontrollable happiness! 🍫✨",
               image: "/Cake Slices/Chocolate Cake Slice.png"
          },
          {
               id: 2,
               title: "Strawberry Dream Cake",
               description: "Fresh strawberries dance with fluffy vanilla sponge and cream cheese frosting in this delightful summer treat. Pure bliss!",
               funnyPart: "Berry good choice! Your taste buds will thank you! 🍓😋",
               image: "/Cake Slices/Strawberry Cake slice.png"
          },
          {
               id: 3,
               title: "Classic Carrot Temptation",
               description: "Moist carrot cake packed with warm spices, walnuts, and topped with our signature cream cheese frosting. A timeless favorite!",
               funnyPart: "The only carrots you'll actually crave! 🥕💕",
               image: "/Cake Slices/Carrot Cake Slice.png"
          },
          {
               id: 4,
               title: "Coffee Lover's Paradise",
               description: "Rich coffee-infused layers with mocha buttercream and a dusting of cocoa. The perfect pick-me-up for coffee enthusiasts!",
               funnyPart: "Better than your morning coffee! ☕️🎂",
               image: "/Cake Slices/Coffee Cake Slice.png"
          }
     ])

     return {
          swiperItems
     }
}
