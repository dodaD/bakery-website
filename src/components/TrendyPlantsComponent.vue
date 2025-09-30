<template>
     <div class="trendy-plates-container">
          <div class="plate-item">
               <div class="plate-image left">
                    <img src="/Cake Slices/Orange Cake Slice.png" alt="Orange Cake" />
               </div>
               <div class="plate-content right glass-background">
                    <div class="plate-info">
                         <h3 class="plate-title">Orange Cake</h3>
                         <p class="plate-price">$12.99</p>
                         <p class="plate-description">Zesty orange cake with citrus glaze and fresh orange zest. A
                              perfect balance of sweet and tangy flavors.</p>
                    </div>
                    <button class="explore-button">Explore Now</button>
               </div>
          </div>

          <div class="plate-item reverse">
               <div class="plate-content left glass-background">
                    <div class="plate-info">
                         <h3 class="plate-title">Pecan Cake</h3>
                         <p class="plate-price">$14.99</p>
                         <p class="plate-description">Rich nutty pecan cake with caramelized pecans and butter frosting.
                              Indulgent and perfectly sweet.</p>
                    </div>
                    <button class="explore-button">Explore Now</button>
               </div>
               <div class="plate-image right">
                    <img src="/Cake Slices/Pecan cake slice.png" alt="Pecan Cake" />
               </div>
          </div>
     </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.trendy-plates-container {
     width: 100%;
     display: flex;
     flex-direction: column;
     gap: 30px;
     padding: 20px 0;
}

.plate-item {
     display: flex;
     align-items: center;
     gap: 20px;
     min-height: 200px;
}

.plate-item.reverse {
     flex-direction: row-reverse;
}

.plate-image {
     flex: 0 0 300px;
     height: 200px;
     display: flex;
     align-items: center;
     justify-content: center;
     overflow: visible;
}

.plate-image img {
     width: 200px;
     height: 220px;
     object-fit: contain;
     transform: rotate(15deg);
     filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.plate-image.left img {
     transform: rotate(-15deg) translateX(-30px);
}

.plate-image.right img {
     transform: rotate(15deg) translateX(30px);
}

.plate-content {
     flex: 1;
     padding: 25px;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     min-height: 180px;
}

.plate-info {
     flex: 1;
}

.plate-title {
     font-size: 28px;
     font-weight: 700;
     margin-bottom: 8px;
     color: var(--font-colour);
}

.plate-price {
     font-size: 22px;
     font-weight: 600;
     margin-bottom: 15px;
     color: var(--star-colour);
}

.plate-description {
     font-size: 16px;
     font-weight: 400;
     line-height: 1.5;
     color: var(--font-colour);
     opacity: 0.9;
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
     padding: 8px 30px;
     color: var(--font-colour);
     transition: all 0.3s ease;
}

.explore-button:hover {
     background-color: var(--font-colour);
     color: var(--glass-background);
     transform: translateY(-2px);
     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.glass-background {
     border-radius: 16px;
     background: var(--glass-background);
     backdrop-filter: blur(12px);
     -webkit-backdrop-filter: blur(12px);
     border: 1px solid var(--glass-border);
}
</style>