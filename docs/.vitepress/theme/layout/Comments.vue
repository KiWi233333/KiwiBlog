<!-- Comment.vue -->
<script setup lang="ts">
import { inBrowser, useData } from "vitepress";
import { ref, onMounted, watchEffect, onUnmounted } from "vue";

const { page, isDark } = useData();

const comments = ref<HTMLElement>();

// 非首页时加载评论组件
watchEffect(() => {
  console.log(page.value.relativePath);
  
  if (page.value.relativePath && page.value.relativePath !== "index.md") {
    initComments();
  }
});

// 监听样式，并同步评论组件
watchEffect(setTheme);

// Beaudar 通过读取 script 中的属性来设置样式
// 如果 iframe 还未加载完成时马上切换样式则无法同步最新样式（因为未加载完成无法通信）
// 可以利用 Beaudar 会通过 postMessage 来发送所占高度的特性解决这个问题（首次收到消息就刚创建完成的时候）
onMounted(() => {
  window.addEventListener("message", watchMsg);
});

onUnmounted(() => {
  window.removeEventListener("message", watchMsg);
});

function watchMsg(msg: MessageEvent) {
  setTheme();
}

function initComments() {
  if (!inBrowser) {
    return;
  }
  if (comments?.value) {
    const script = document.createElement("script");
    script.src = "https://beaudar.lipk.org/client.js";
    // TODO: 修改为自己的配置
    script.setAttribute("repo", "KiWi233333/KiwiBlog");
    script.setAttribute("issue-term", "url");
    script.setAttribute("branch", "main");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("theme", "preferred-color-scheme");
    script.setAttribute("comment-order", "desc");
    script.setAttribute("input-position", "top");
    script.async = true;
    comments.value.innerHTML = "";
    comments.value.appendChild(script);
  }
}

function setTheme() {
  if (inBrowser) {
    const message = {
      type: "set-theme",
      theme: isDark.value ? "github-dark" : "github-light",
    };
    const beaudar =
      document.querySelector<HTMLIFrameElement>(".beaudar iframe");
    if (beaudar?.contentWindow) {
      beaudar.contentWindow.postMessage(message, "https://beaudar.lipk.org");
    }
  }
}
</script>

<template>
  <section ref="comments"></section>
</template>