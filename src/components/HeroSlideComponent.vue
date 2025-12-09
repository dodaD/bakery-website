<script setup>
import { usePopupWindowStore } from "@/stores/popUpWindowStore.js";
const popupInfo = usePopupWindowStore();

const props = defineProps({
  cake: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="glass-background cut-out-border swiper-slide">
    <div class="slide-title">Trendy Cake Slices</div>
    <div class="cake-description">
      {{ props.cake.title }}
    </div>
    <button
      class="rectangle-rounded-button buy-button"
      @click="popupInfo.openBuyNowMessage(props.cake.title)"
    >
      Buy now
    </button>
  </div>

  <img :src="props.cake.image" class="cake-image" />
</template>

<style lang="scss" scoped>
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.cut-out-border {
  mask-image: url("src/assets/heroSolid.svg");
  mask-size: cover;
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
  mask-image: url("src/assets/heroSolid.svg"), url("src/assets/heroBorder.svg");
  mask-repeat: no-repeat;
  mask-size: cover;
  mask-composite: intersect;
}

.swiper-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.swiper-slide:hover .buy-button {
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.6),
    0 0 10px rgba(255, 255, 255, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.2);
}

.buy-button {
  z-index: 2;
}

.swiper-slide:hover {
  /* inset = inside the box,
      offset-x(if both x and y 0, the shadow is right behind the box),
      offset-y, blur-radius, spread-radius */
  box-shadow: inset 0 -35px 20px rgba(255, 255, 255, 0.4),
    0 0 5px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.slide-title {
  font-size: 20px;
  font-weight: 600;
  margin-top: 25px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.cake-description {
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.cake-image {
  height: 280px;
  object-fit: fill;
  transform: translateY(-25%) translateX(50%) rotate(242deg);
  user-select: none;
  position: absolute;
  top: 0;
  z-index: 2;
  right: 50%;
}

.buy-button {
  margin-bottom: 85px;
  transition: all 0.3s ease;
}
</style>
