<!--.vitepress/theme/MyLayout.vue-->
<!-- https://vitepress.dev/guide/extending-default-theme#using-view-transitions-api -->
<script setup>
import DefaultTheme from 'vitepress/theme' 
import NavBarTitle from './NavBarTitle.vue';

const { Layout } = DefaultTheme

</script>

<template>
  <Layout> 
    <template #nav-bar-title-after> 
      <NavBarTitle/>
    </template>
    <template #home-hero-image> 
      <NavBarTitle/>
    </template>
  </Layout>
</template>

<style >
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