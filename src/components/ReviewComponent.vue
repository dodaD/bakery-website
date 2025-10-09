<script setup>
defineProps({
     name: {
          type: String,
          required: true
     },
     text: {
          type: String,
          required: true
     },
     rating: {
          type: Number,
          required: true,
          validator: (value) => value >= 0 && value <= 5
     }
});

// Generate array of 5 stars with their states
const getStars = (rating) => {
     const stars = [];
     for (let i = 1; i <= 5; i++) {
          if (i <= Math.floor(rating)) {
               stars.push('filled');
          } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
               stars.push('half');
          } else {
               stars.push('empty');
          }
     }
     return stars;
};
</script>

<template>
     <div class="review-wrapper">
          <div class="review glass-background review-border">
               <div class="review-content">
                    <div class="review-icon"></div>
                    <div class="review-header">
                         <div class="review-name">{{ name }}</div>
                         <div class="stars-rating">
                              <font-awesome-icon v-for="(starType, index) in getStars(rating)" :key="index"
                                   :icon="starType === 'half' ? 'fa-solid fa-star-half-stroke' : 'fa-solid fa-star'"
                                   :class="['star', starType]" />
                         </div>
                    </div>
               </div>
               <div class="review-text-container">
                    <div class="review-text">{{ text }}</div>
               </div>
          </div>
     </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.review-wrapper {
     display: flex;
     align-items: flex-start;
     justify-content: flex-start;
     width: 100%;
     height: 100%;
}

.review {
     width: 300px;
     height: 155px;
     display: flex;
     flex-direction: column;
     padding: 20px;
}

.review-content {
     display: flex;
     align-items: flex-start;
     gap: 15px;
     margin-bottom: 15px;
}

.review-icon {
     width: 50px;
     height: 50px;
     border-radius: 50%;
     background: var(--font-colour);
     flex-shrink: 0;
}

.review-header {
     flex: 1;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     text-align: left;
}

.review-name {
     font-weight: 600;
     margin-bottom: 8px;
     font-size: 16px;
}

.review-text-container {
     width: 100%;
}

.review-text {
     font-size: 14px;
     line-height: 1.4;
     opacity: 0.9;
     width: 100%;
}

.stars-rating {
     display: flex;
     justify-content: flex-end;
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

.star.empty {
     color: rgba(255, 255, 255, 0.3);
}

.review-border {
     border-radius: 16px;
     border: 1px solid var(--glass-border);
}
</style>
