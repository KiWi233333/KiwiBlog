<!-- https://vitepress.dev/guide/extending-default-theme#using-view-transitions-api -->
<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'
import PwaInstallBtn from './PwaInstallBtn.vue';
import ObserverTool from './ObserverTool.vue';
import NavBarTitle from './NavBarTitle.vue';
import BackTop from './BackTop.vue';
const { isDark } = useData()

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]
  document.documentElement.classList.add("stop-transition");
  // @ts-ignore
  await document.startViewTransition(async () => {
    // 关闭所有渐变（优化性能）
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  await document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  )
  document.documentElement.classList.remove("stop-transition");
})
const { Layout } = DefaultTheme 
</script>

<template>
  <Layout>
    <template #nav-bar-title-after>
      <NavBarTitle class="add-button" />
    </template>
    <template #home-hero-image>
      <div data-fade style='--lv: 2;width: 100%;'>
        <NavBarTitle style="margin: auto;" />
      </div>
    </template>
    <template #nav-bar-content-after>
      <PwaInstallBtn />
    </template>
    <template #layout-bottom>
      <ObserverTool />
      <BackTop />
    </template>
  </Layout>
</template>

<style>

/* // 关闭所有动画渐变保证变化的流畅 */
html.stop-transition * {
  transition: none !important;
}
html.stop-transition-all *{
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
  
  </style>