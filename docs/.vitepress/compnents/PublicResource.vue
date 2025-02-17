<script setup lang="ts">
withDefaults(defineProps<{
  author?: string
  repoUrl?: string
}>(), {
  author: "Kiwi233333",
  repoUrl: "jiwu-mall-chat-tauri"
})

</script>

<template>
  <div class="flex-row-c-c gap-4 flex-col flex-wrap">
    <div flex-row-c-c gap-4 flex-wrap>
      <a :href="`https://github.com/${author}/${repoUrl}`" target="_blank">
        <img class="disabled-img-view" src="https://img.shields.io/badge/Github-项目地址-blueviolet.svg?style=plasticr">
      </a>
      <a :href="`https://github.com/${author}/${repoUrl}/stargazers`" target="_blank">
        <img class="disabled-img-view" alt="Stars"
          :src="`https://img.shields.io/github/stars/${author}/${repoUrl}.svg?style=social`">
      </a>
    </div>
    <div class="flex-row-c-c gap-4">
      <a :href="`https://github.com/${author}/${repoUrl}/commits`" target="_blank">
        <img class="disabled-img-view" alt="Commit"
          :src="`https://img.shields.io/github/commit-activity/m/${author}/${repoUrl}`">
      </a>
      <a :href="`https://github.com/${author}/${repoUrl}/issues`" target="_blank">
        <img class="disabled-img-view" alt="Issues" :src="`https://img.shields.io/github/issues/${author}/${repoUrl}`">
      </a>
      <a :href="`https://github.com/${author}/${repoUrl}/blob/master/LICENSE`" target="_blank">
        <img class="disabled-img-view" alt="License"
          :src="`https://img.shields.io/github/license/${author}/${repoUrl}`">
      </a>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
