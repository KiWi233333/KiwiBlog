<!-- https://vitepress.dev/guide/extending-default-theme#using-view-transitions-api -->
<script setup lang="ts">
import DefaultTheme, { useSidebar } from "vitepress/theme";
import PwaInstallBtn from "./PwaInstallBtn.vue";
import ObserverTool from "./ObserverTool.vue";
import NavBarTitle from "./NavBarTitle.vue";
import Comments from "./Comments.vue";
import "medium-zoom/dist/style.css";
import AnFuTree from "./AnFuTree.vue";
import { useToggleTheme } from "../../utils/useToggleTheme";
import { useImageView } from "../../utils/useImageView";
const { Layout } = DefaultTheme;
// 切换动画
useToggleTheme()

//  图片缩放
useImageView() 

</script>

<template>
  <Layout>
    <template #nav-bar-title-after>
      <NavBarTitle class="add-button" />
    </template>
    <template #home-hero-image>
      <div data-fade style="--lv: 2; width: 100%">
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
        <div id="busuanzi_container_site_pv" class="flex-row-c-c text-center op-40 hover:op-100 transition-opacity"><i
            class="i-solar:eye-outline p-2 mr-2" /><span id="busuanzi_value_site_pv"></span></div>
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
