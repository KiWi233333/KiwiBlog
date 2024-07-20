<script setup lang="ts">
import { ref } from 'vue';


const versionInfo = ref({})
function getVersionInfo(version = 'latest') {
  fetch(`https://api.jiwu.kiwi2333.top/res/app/latest`)
    .then(response => response.json())
    .then(data => {
      if (data) {
        versionInfo.value = data
      } else {
        versionInfo.value = {}
      }
    })
}
getVersionInfo()


</script>
<template>
  <!-- 写一个表格 -->
  <table>
    <caption class="text-left mb-4">最新版本：{{ versionInfo.version }}</caption>
    <thead>
      <tr>
        <th>平台</th>
        <th>下载地址</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Windows x86_64</td>
        <td><a :href="versionInfo?.platforms?.['windows-x86_64']?.url">{{
          versionInfo?.platforms?.['windows-x86_64']?.url?.split('/')?.pop() || '暂无' }}</a></td>
      </tr>
      <tr>
        <td>Mac M系列</td>
        <td><a :href="versionInfo?.platforms?.['darwin-aarch64']?.url">{{
          versionInfo?.platforms?.['darwin-aarch64']?.url?.split('/')?.pop() || '暂无' }}</a></td>
      </tr>
      <tr>
        <td>Mac Intel系列</td>
        <td><a :href="versionInfo?.platforms?.['darwin-x86_64']?.url">{{
          versionInfo?.platforms?.['darwin-x86_64']?.url?.split('/')?.pop() || '暂无' }}</a></td>
      </tr>
      <tr>
        <td>Linux x86_64</td>
        <td><a :href="versionInfo?.platforms?.['linux-x86_64']?.url">{{
          versionInfo?.platforms?.['linux-x86_64']?.url?.split('/')?.pop() || '暂无' }}</a></td>
      </tr>
    </tbody>
  </table>

</template>
<style scoped lang="scss"></style>
