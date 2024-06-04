<!-- https://vitepress.dev/guide/extending-default-theme#using-view-transitions-api -->
<script setup lang="ts">
import { useData, useRoute } from "vitepress";
import DefaultTheme, { useSidebar } from "vitepress/theme";
import mediumZoom from "medium-zoom";
import { nextTick, provide, watch, onMounted, ref } from "vue";
import PwaInstallBtn from "./PwaInstallBtn.vue";
import ObserverTool from "./ObserverTool.vue";
import NavBarTitle from "./NavBarTitle.vue";
import Comments from "./Comments.vue";
import "medium-zoom/dist/style.css";
import AnFuTree from "./AnFuTree.vue";
const { isDark } = useData();
const isToggleLoading = ref(false);

//  图片缩放
const route = useRoute();
const initZoom = () => {
  mediumZoom(".VPContent .content-container img", {
    background: "rgba(0, 0, 0, 0.35)",
    container: document.body,
  });
};
onMounted(() => {
  initZoom();
});
watch(
  () => route.path,
  () => {
    if (route && route.path !== "/") nextTick(() => initZoom());
  }
);

// 全局按键
const enableTransitions = () =>
  "startViewTransition" in document && window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
 
function keyToggleTheme(e: KeyboardEvent) {
  if (e?.altKey && e?.key && e?.key === "t") {
    e.preventDefault();
    // 计算屏幕中心坐标
    const centerX = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / 2;
    const centerY = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) / 2;
    toggleTheme({
      clientX: +centerX,
      clientY: +centerY,
    } as MouseEvent);
  }
}
provide("toggle-appearance", toggleTheme);
const { Layout } = DefaultTheme;
onMounted(() => {
  window.addEventListener("keydown", keyToggleTheme);
  
}); 
/**
 * 动画切换主题
 * @param event 事件参数
 */
async function toggleTheme({ clientX: x, clientY: y }: MouseEvent) {
  if (isToggleLoading.value) {
    return;
  }
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    return;
  }
  isToggleLoading.value = true;
  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`,
  ];
  document.documentElement.classList.add("stop-transition");
  // @ts-ignore
  await document.startViewTransition(async () => {
    // 关闭所有渐变（优化性能）
    isDark.value = !isDark.value;
    await nextTick();
  }).ready;

  await document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 500,
      easing: "ease-in",
      pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
    }
  );
  // 结束动画
  document.documentElement.classList.remove("stop-transition");
  isToggleLoading.value = false;
}
</script>

<template>
  <Layout>
    <template #nav-bar-title-after>
      <NavBarTitle class="add-button" />
    </template>
    <template #home-hero-image>
      <div
        data-fade
        style="--lv: 2; width: 100%">
        <NavBarTitle style="margin: auto" />
      </div>
    </template>
    <template #nav-bar-content-after>
      <PwaInstallBtn />
    </template>
    <template #layout-bottom>
      <ObserverTool />
      <AnFuTree />
    </template>
    <template #doc-after>
      <Comments class="my-2" />
      <div class="flex-row-c-c py-4">
        <div id="busuanzi_container_site_pv" class="flex-row-c-c text-center op-40 hover:op-100 transition-opacity" ><i class="i-solar:eye-outline p-2 mr-2"/><span id="busuanzi_value_site_pv"></span></div>
      </div>
    </template>
  </Layout>
</template>

<style>
/* // 关闭所有动画渐变保证变化的流畅 */
html.stop-transition * {
  transition: none !important;
}
html.stop-transition-all * {
  transition: none !important;
  animation: none !important;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
@keyframes logo-anim {
  0% {
    stroke-dashoffset: 1px;
    stroke-dasharray: 0 3000%;
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  35% {
    stroke-dasharray: 3000% 0;
    fill: transparent;
  }

  /* Moving back */
  50% {
    stroke-dasharray: 3000% 0;
    fill: var(--vp-c-text-1);
  }

  55% {
    fill: transparent;
  }

  95%,
  100% {
    stroke-dasharray: 0 3000%;
  }
}

#logo-anim,
#logo-anim path {
  fill: transparent;
  transition: all 0.2s ease-in-out;
  stroke-dashoffset: 1px;
  stroke-dasharray: 3000% 0;
  animation: logo-anim 10s ease forwards infinite;
  transform-origin: center;
  stroke: var(--vp-c-text-1);
  animation-delay: 0s;
}

/* 图片遮挡 */
.medium-zoom-overlay {
  z-index: 999;
  --at-apply: "card-df-br";
}
.medium-zoom-image.medium-zoom-image--opened {
  z-index: 1000;
}
</style>
