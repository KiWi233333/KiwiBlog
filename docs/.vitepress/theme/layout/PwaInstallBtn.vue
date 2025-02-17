<script setup lang="ts">
import { onMounted, ref } from 'vue';
let deferredPrompt;
const isInstalled = ref<boolean>(false);
onMounted(() => {
  isInstalled.value = Boolean(navigator.serviceWorker.controller);
  window.addEventListener('beforeinstallprompt', e => {
    isInstalled.value = Boolean(navigator.serviceWorker.controller);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // 保存事件
    deferredPrompt = e;
  });
});

/**
 * 安装
 */
function onInstall() {
  // 打开提示用户安装弹窗
  deferredPrompt?.prompt && deferredPrompt.prompt();
  // 弹窗点击事件回调
  deferredPrompt?.userChoice?.then(choiceResult => {
    // 同意
    if (choiceResult.outcome === 'accepted') {
      isInstalled.value = true;
    } else {
    }
  });
}
</script>

<template>
  <div title="PWA 应用安装" @click="onInstall" v-if="!isInstalled" style="cursor:pointer;opacity: 0.8;">
    <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path fill="none" stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="14;0" />
        </path>
        <path fill="currentColor" d="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5">
          <animate attributeName="d" calcMode="linear" dur="1.5s" keyTimes="0;0.7;1" repeatCount="indefinite"
            values="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5;M12 4 h2 v3 h2.5 L12 11.5M12 4 h-2 v3 h-2.5 L12 11.5;M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5" />
        </path>
      </g>
    </svg>
  </div>
</template>
