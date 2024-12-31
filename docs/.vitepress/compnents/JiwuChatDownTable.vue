<script setup lang="ts">
import { ref } from 'vue';

interface VersionInfoVO {
  version: string
  platforms: {
    'windows-x86_64': {
      url: string
    }
    'darwin-aarch64': {
      url: string
    }
    'darwin-x86_64': {
      url: string
    }
    'linux-x86_64': {
      url: string
    }
    'android': {
      url: string
    }
  }
}

const versionInfo = ref<Partial<VersionInfoVO>>({})
function getVersionInfo(version = 'latest') {
  fetch(`https://api.jiwu.kiwi2333.top/res/app/${version === 'latest' ? 'latest' : `version/${version}`}`)
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
  <div>
    <table>
      <caption class="text-left mb-4">最新版本：v{{ versionInfo.version }}</caption>
      <thead>
        <tr>
          <th>平台</th>
          <th>下载地址</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Windows x86_64</td>
          <td><a download :href="versionInfo?.platforms?.['windows-x86_64']?.url">{{
            versionInfo?.platforms?.['windows-x86_64']?.url?.split('/')?.pop() || '暂无' }}</a></td>
        </tr>
        <tr>
          <td>Mac M系列</td>
          <td><a download :href="versionInfo?.platforms?.['darwin-aarch64']?.url">{{
            versionInfo?.platforms?.['darwin-aarch64']?.url?.split('/')?.pop() || '暂无' }}</a></td>
        </tr>
        <tr>
          <td>Mac Intel系列</td>
          <td><a download :href="versionInfo?.platforms?.['darwin-x86_64']?.url">{{
            versionInfo?.platforms?.['darwin-x86_64']?.url?.split('/')?.pop() || '暂无' }}</a></td>
        </tr>
        <tr>
          <td>Linux x86_64</td>
          <td><a download :href="versionInfo?.platforms?.['linux-x86_64']?.url">{{
            versionInfo?.platforms?.['linux-x86_64']?.url?.split('/')?.pop() || '暂无' }}</a></td>
        </tr>
        <tr>
          <td>Android x86_64</td>
          <td>
            <a download
              :href="`https://api.jiwu.kiwi2333.top/res/oss/app/${versionInfo.version}/JiwuChat_${versionInfo.version}.apk`">JiwuChat_{{
                versionInfo?.version }}.apk</a>
          </td>
        </tr>
      </tbody>
    </table>
    <span>安卓下载：v{{ versionInfo.version }}.apk</span>
    <img v-if="versionInfo.version"
      :src="`https://api.jiwu.kiwi2333.top/res/qrcode/stream?content=https://quang.kiwi2333.top/app/${versionInfo.version}/JiwuChat_${versionInfo.version}.apk&w=200&h=200`"
      alt="二维码" class="mt-4">
  </div>

</template>
<style scoped lang="scss"></style>
