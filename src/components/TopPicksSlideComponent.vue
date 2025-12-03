<script setup>
import { useScreenSizeComposable } from "@/components/screenSizeComposable/isMobileStore.js";
import { usePopUpWindowComposable } from "@/components/screenSizeComposable/popUpWindowComposable.js";

const mobileStore = useScreenSizeComposable();
const popUpInfo = usePopUpWindowComposable();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="slide-content-wrapper"
    :class="{ 'slide-content-wrapper-mobile': mobileStore.isMobile.value }"
  >
    <img :src="item.image" class="slide-image" />

    <div class="slide-content">
      <div class="slide-title">{{ props.item.title }}</div>
      <div class="slide-description">{{ props.item.description }}</div>
      <div class="slide-funny-part">{{ props.item.funnyPart }}</div>

      <button
        class="rectangle-rounded-button buy-button"
        @click="popUpInfo.boughtItem.value = item.title"
      >
        Buy now
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/colours.scss";
@import "@/styles/common-styles.scss";

.slide-content-wrapper {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.slide-content-wrapper-mobile {
  .slide-content {
    position: relative;
    border-radius: 50px;
    padding: 90px 30px 25px;
    box-sizing: border-box;
    min-height: 380px;
  }

  .slide-image {
    height: auto;
    width: 65%;
    transform: translateX(50%) translateY(-50%) rotate(240deg);
    margin: auto;
    margin-bottom: 10px;
    z-index: 3;
    position: absolute;
    top: 0;
    right: 50%;
  }
}
.slide-content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
}

.slide-image {
  height: 400px;
  object-fit: fill;
  transform: translateY(-90px);
  margin-right: 80px;
}

.slide-title {
  font-size: 28px;
  font-weight: 700;
}

.slide-description {
  margin-top: 20px;
}

.slide-funny-part {
  margin-bottom: 20px;
}
</style>
