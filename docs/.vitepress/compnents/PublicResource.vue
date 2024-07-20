<script setup lang="ts">
withDefaults(defineProps<{
  author: string
  respUrl: string
}>(), {
  author: "Kiwi233333",
  respUrl: "jiwu-mall-chat-tauri"
})

</script>

<template>
  <div class="flex-row-c-c gap-4 flex-col flex-wrap">
    <div flex-row-c-c gap-4 flex-wrap>
      <a :href="`https://github.com/${author}/${respUrl}`" target="_blank"><img
          src="https://img.shields.io/badge/Github-项目地址-blueviolet.svg?style=plasticr">
      </a>
      <a :href="`https://github.com/${author}/${respUrl}/stargazers`" target="_blank">
        <img alt="License" :src="`https://img.shields.io/github/stars/${author}/${respUrl}.svg?style=social`">
      </a>
    </div>
    <div class="flex-row-c-c gap-4">
      <a :href="`https://github.com/${author}/${respUrl}/commits`" target="_blank">
        <img alt="Commit" :src="`https://img.shields.io/github/commit-activity/m/${author}/${respUrl}`">
      </a>
      <a :href="`https://github.com/${author}/${respUrl}/issues`" target="_blank">
        <img alt="Issues" :src="`https://img.shields.io/github/issues/${author}/${respUrl}`">
      </a>
      <a :href="`https://github.com/${author}/${respUrl}/blob/master/LICENSE`" target="_blank">
        <img alt="License: Apache-2.0" src="https://img.shields.io/badge/License-Apache--2.0-blue.svg">
      </a>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
