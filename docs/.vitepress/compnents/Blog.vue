<script setup lang="ts">
import FilesCard, { CardItem } from './FilesCard.vue';
import { ref } from 'vue';
// @unocss-include
const projectList = ref<CardItem[]>([
  {
    title: "开始",
    icon: "🎊",
    details: "开始阅读本博客 🎉",
    link: "/其他/1.开始"
  },
  {
    title: "前端",
    icon: "🧪",
    details: "Web、Ts、Vue、Nuxt、React、Uniapp...",
    link: "/前端/Css/1.签名动画svg"
  },
  {
    title: "后端",
    icon: "💊",
    details: "Java、MySQL、Redis、Spring全家桶、Node开发...",
    link: "/后端/Java/Java基础/Java基础-面向对象"
  },
  {
    title: "其他",
    icon: "📁",
    details: "正在完善中...",
    link: "/其他/1.开始"
  },
  {
    title: "架构",
    icon: "🧶",
    details: "系统框架设计、系统模式等",
    link: "/架构/什么是Sass系统"
  },
  {
    title: "正在建设",
    icon: "🛠",
    details: "正在建设...",
  }
])


</script>

<template>
  <div data-fades>
    <h1 my-2em tracking-0.2em>Blog | 博客 </h1>
    <div data-fades class="flex flex-col gap-4">
      <FilesCard :data="p" v-for="(p, i) in projectList" :key="i">
        <template #icon>
          <strong text-2rem>{{ p.icon }}</strong>
        </template>
      </FilesCard>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>