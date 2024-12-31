<script setup lang="ts">
import { ref, onMounted, watch, onBeforeUnmount, nextTick } from 'vue';

const {
  animationSpeed = 40,
  offsetX = '0px',
  animationName = 'scroll-inifinite-swiper'
} = defineProps<{
  animationSpeed?: number;
  offsetX?: string;
  animationName?: string;
}>();

const allDataWidth = ref(0);
const slideTrack = ref<HTMLElement | null>(null);
function initAnimation() {
  if (!slideTrack.value) {
    return
  }
  // 计算子元素的总宽度
  nextTick(() => {
    if (!slideTrack.value) {
      return
    }
    let childWidth = 0;
    for (const child of slideTrack?.value?.children || []) {
      childWidth += child.clientWidth;
    }
    allDataWidth.value = childWidth;
    // 设置动画样式
    if (slideTrack.value) {
      slideTrack.value.style.animation = `${animationName} ${animationSpeed}s linear infinite`;
      slideTrack.value.style.width = `${allDataWidth.value * 2}px`; // 设置总宽度为两倍子元素宽度
    }
    // 获取原始子元素并克隆一次
    const originalChildren = Array.from(slideTrack.value.children);
    slideTrack.value.innerHTML = ''; // 清空当前内容避免重复
    slideTrack.value.append(...originalChildren, ...originalChildren.map(child => child.cloneNode(true)));
  });
}

// 在组件挂载时初始化动画
onMounted(() => {
  initAnimation();
});

// 在组件卸载时清理
onBeforeUnmount(() => {
  if (slideTrack.value) {
    slideTrack.value.style.animation = 'none';
  }
});

</script>

<template>
  <div class="infinite-swiper-slider">
    <div class="infinite-swiper-slide-track" ref="slideTrack">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@keyframes scroll-inifinite-swiper {
  0% {
    transform: translateX(v-bind(offsetX));
  }

  100% {
    transform: translateX(-50%);
  }
}

.infinite-swiper-slider {
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: fit-content;

  .infinite-swiper-slide-track {
    display: flex;
    flex-shrink: 0;
    will-change: transform;
    animation: scroll-inifinite-swiper 40s linear infinite;

    &:hover {
      animation-play-state: paused;
    }
  }
}
</style>
