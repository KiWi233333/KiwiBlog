<script setup lang="ts">
import DefaultCard from "../DefaultCard.vue";
import { computed, onMounted, ref } from "vue";
import { projectList } from "../../store/files";

const version = ref("v0.0.0");
const doingList = [
  {
    title: "Web Developer",
    icon: "i-solar:code-2-bold-duotone",
    details: "A Developer with a passion for creating innovative and user-friendly web applications.",
  },
  {
    title: ()=> version.value,
    icon: "i-solar:atom-linear",
    details: "The blog is being updated to a new version, with a more modern and responsive design.",
  },
];
onMounted(() => {
  fetch("https://api.github.com/repos/KiWi233333/KiwiBlog/releases/latest").then(res => {
    res
      .json()
      .then(data => {
        version.value = data.tag_name || "v0.0.0";
      })
      .catch(err => {});
  });
})
</script>

<template>
  <div
    data-fades
    data-fade
    style="--delay: 60ms"
    class="p-6 sm:p-8 right">
    <!-- 关于我 -->
    <h1 clear-both>
      About Me
      <NavBarTitle class="hidden sm:inline float-right" />
    </h1>
    <p>💻 正在学习的独立开发者</p>
    <p>🧠 有创意点子就会尝试</p>
    <p>🏫 分享日常<a href="/blog">博客</a></p>
    <!-- 最近在做什么 -->
    <h2>What have I been doing</h2>
    <div
      data-fades
      class="project-list">
      <DefaultCard
        :data="p"
        v-for="(p, i) in doingList"
        :key="i"
        class="card-df">
        <template #icon>
          <span
            class="p-4 mr-2"
            :class="p.icon"
            v-if="p.icon"></span>
        </template>
      </DefaultCard>
    </div>
    <!-- 项目 -->
    <h2>Projects</h2>
    <div
      data-fades
      class="project-list">
      <DefaultCard
        :data="p"
        v-for="(p, i) in projectList"
        :key="i"
        style="color: inherit"
        class="card-df" />
    </div>
    <a
      href="/blog"
      class="card-df block p-2 px-4 hover:shadow ml-a border-default w-fit rounded-2 mt-6"
      >Just Go！</a
    >
  </div>
</template>
<style scoped lang="scss">
.project-list {
  --at-apply: "grid sm:grid-cols-2 gap-4 grid-cols-1";
}
</style>
