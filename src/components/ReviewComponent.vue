<template>
     <div class="review-wrapper">
          <div class="review glass-background">
               <div class="review-content">
                    <div class="review-icon"></div>
                    <div class="review-info">
                         <div class="review-name">Jane Doe</div>
                         <div class="review-text">The cakes here are absolutely delicious! The chocolate cake
                              is rich and moist, and the orange cake has the perfect balance of sweetness and citrus
                              flavor. Highly recommend to anyone with a sweet tooth!</div>
                    </div>
               </div>
               <div class="stars-rating">
                    <font-awesome-icon icon="fa-solid fa-star" class="star filled" />
                    <font-awesome-icon icon="fa-solid fa-star" class="star filled" />
                    <font-awesome-icon icon="fa-solid fa-star" class="star filled" />
                    <font-awesome-icon icon="fa-solid fa-star" class="star filled" />
                    <font-awesome-icon icon="fa-solid fa-star-half-stroke" class="star half" />
               </div>
          </div>
     </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";

.review-wrapper {
     display: flex;
     align-items: flex-start;
     justify-content: flex-start;
     width: 100%;
     height: 100%;
}

.review {
     width: 400px;
     height: 155px;
     display: flex;
     flex-direction: column;
     padding: 20px;
     transform: translateY(-30%);
}

.review-content {
     display: flex;
     align-items: flex-start;
     gap: 15px;
     margin-bottom: 20px;
     flex: 1;
}

.review-icon {
     width: 50px;
     height: 50px;
     border-radius: 50%;
     background: var(--font-colour);
     flex-shrink: 0;
}

.review-info {
     flex: 1;
}

.review-name {
     font-weight: 600;
     margin-bottom: 8px;
     font-size: 16px;
}

.review-text {
     font-size: 14px;
     line-height: 1.4;
     opacity: 0.9;
}

.stars-rating {
     width: 100%;
     text-align: center;
     display: flex;
     justify-content: center;
     gap: 3px;
     align-items: center;
}

.star {
     font-size: 15px;
}

.star.filled {
     color: var(--star-colour);
}

.star.half {
     color: var(--star-colour);
     -webkit-text-stroke: 0px transparent;
     filter: drop-shadow(0 0 0 transparent);
}

.glass-background {
     border-radius: 16px;
     background: var(--glass-background);
     backdrop-filter: blur(12px);
     -webkit-backdrop-filter: blur(12px);
     border: 1px solid var(--glass-border);
}
</style>
