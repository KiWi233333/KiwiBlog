<script setup lang="ts">
import { ref, onMounted, watch, onBeforeUnmount, nextTick } from 'vue';

const props = defineProps<{
  animationSpeed?: number;
  offsetX?: string;
}>();

const animationSpeed = ref(props.animationSpeed || 40);
const offsetX = ref(props.offsetX || '0px');
const allDataWidth = ref(0);
const slideTrack = ref<HTMLElement | null>(null);
let resizeObserver: ResizeObserver | null = null;

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
      slideTrack.value.style.animation = `scroll-inifinite-swiper ${animationSpeed.value}s linear infinite`;
      slideTrack.value.style.width = `${allDataWidth.value * 2}px`; // 设置总宽度为两倍子元素宽度
    }
    // 获取原始子元素并克隆一次
    const originalChildren = Array.from(slideTrack.value.children);
    slideTrack.value.innerHTML = ''; // 清空当前内容避免重复
    slideTrack.value.append(...originalChildren, ...originalChildren.map(child => child.cloneNode(true)));
  });
}
function adjustAnimation() {
  if (slideTrack.value) {
    nextTick(() => {
      let childWidth = 0;
      for (const child of slideTrack?.value?.children || []) {
        childWidth += child.clientWidth;
      }
      allDataWidth.value = childWidth;
      // 设置动画样式
      if (slideTrack.value) {
        slideTrack.value.style.animation = `scroll-inifinite-swiper ${animationSpeed.value}s linear infinite`;
        slideTrack.value.style.width = `${allDataWidth.value * 2}px`; // 设置总宽度为两倍子元素宽度
      }
    });
  }
}

// 在组件挂载时初始化动画
onMounted(() => {
  initAnimation();

  // 监听窗口大小变化重新调整动画
  // resizeObserver = new ResizeObserver(adjustAnimation);
  // if (slideTrack.value) {
  // resizeObserver.observe(slideTrack.value);
  // }
});

// 在组件卸载时清理
onBeforeUnmount(() => {
  if (slideTrack.value) {
    slideTrack.value.style.animation = 'none';
  }
  // resizeObserver?.disconnect();
});

</script>

<template>
  <div class="slider">
    <div class="slide-track" ref="slideTrack">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider {
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: fit-content;

  .slide-track {
    display: flex;
    flex-shrink: 0;
    will-change: transform;

    &:hover {
      animation-play-state: paused;
    }
  }
}
</style>
