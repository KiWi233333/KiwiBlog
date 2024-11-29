<script setup lang="ts">
import { computed, VNode } from 'vue';

const {
  data = [],
  animationSpeed = 40,
  offsetX = "0px"
} = defineProps<{
  data: SlideItem[]
  animationSpeed?: number
  offsetX?: string
}>()
const animationSpeedText = computed(() => `${animationSpeed}s`)
const allDataWidthText = computed(() => (data.reduce((acc, cur) => acc + cur.width, 0) || 0) + "px")

export interface SlideItem {
  width: number
  template: string | VNode
}

</script>

<template>
  <div class="slider">
    <div class="slide-track">
      <div class="slide" v-for="(item, i) in data" :key="`slide-first-${i}`" v-html="item.template" :style="{
        width: `${item.width}px`,
      }">
      </div>
      <div class="slide" v-for="(item, i) in data" :key="`slide-second-${i}`" v-html="item.template" :style="{
        width: `${item.width}px`,
      }">
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
$animationSpeed: v-bind(animationSpeedText);
$allDataWidth: v-bind(allDataWidthText);
$allDataWidthReverse: calc($allDataWidth * -1);
$offsetX: v-bind(offsetX);

// Animation
@keyframes scroll {
  0% {
    transform: translateX($offsetX);
  }

  100% {
    transform: translateX($allDataWidthReverse)
  }
}


// Styling
.slider {
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: fit-content;

  &::before,
  &::after {
    content: "";
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    transform: translateX($offsetX);
    animation: scroll $animationSpeed linear infinite;
    display: flex;
    width: calc($allDataWidth * 2);

    &:hover {
      animation-play-state: paused;
    }
  }
}
</style>
