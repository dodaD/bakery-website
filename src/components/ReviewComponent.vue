<script setup>
import { useMobileStore } from "@/stores/isMobileStore.js";

const mobileStore = useMobileStore();

defineProps({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    validator: (value) => value >= 0 && value <= 5,
  },
});
</script>

<template>
  <div class="review glass-background review-border cut-out-border">
    <div class="review-header">
      <div class="review-icon"></div>

      <div class="review-name-container">
        <div class="review-name">{{ name }}</div>
        <div class="stars-rating">
          <font-awesome-icon
            v-for="star in Math.floor(rating)"
            :icon="'fa-solid fa-star'"
            class="star"
          />

          <font-awesome-icon
            v-if="rating % 1 !== 0"
            :icon="'fa-solid fa-star-half-stroke'"
            class="half-star"
          />
        </div>
      </div>
    </div>

    <div class="review-text">{{ text }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.cut-out-border {
  -webkit-mask-image: url("/commentSolid.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
}

.cut-out-border::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    12deg,
    var(--glass-border),
    rgba(var(--glass-border-in-normal-way), 0.1),
    var(--glass-border)
  );
  -webkit-mask-image: url("/commentSolid.svg"), url("/commentBorder.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  -webkit-mask-composite: xor;
  mask-composite: intersect;
}

.review {
  width: 375px;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
  box-sizing: border-box;
}

.review-name-container {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
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
  flex-direction: row;
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
  width: 100%;
  margin-bottom: 25px;
}

.stars-rating {
  display: flex;
  justify-content: flex-end;
  gap: 3px;
  align-items: center;
}

.star {
  font-size: 15px;
  color: var(--star-colour);
}

.half-star {
  color: var(--star-colour);
  -webkit-text-stroke: 0px transparent;
  filter: drop-shadow(0 0 0 transparent);
}

.review-border {
  border-radius: 16px;
}
</style>
