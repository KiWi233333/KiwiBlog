<script setup lang="ts">
import NavBarTitle from '../theme/layout/NavBarTitle.vue';
import { selfName } from '../theme-config/constant';
import DefaultCard, { CardItem } from './DefaultCard.vue';
import { ref } from 'vue';
// @unocss-include
const doingList = ref<CardItem[]>([
  {
    title: "Web Developer",
    icon: "i-solar:code-2-bold-duotone ",
    details: "A Developer with a passion for creating innovative and user-friendly web applications."
  },
])
const projectList = ref<CardItem[]>([
  {
    title: "极物圈社区商城",
    icon: "https://jiwu.kiwi2333.top/logo.png",
    link: "https://jiwu.kiwi2333.top/",
    details: "极物圈，是一个集商城、ai聊天、沟通、社区功能于一体的平台。"
  },
  {
    title: "Jiwu聊天应用",
    icon: "i-solar:ghost-bold p-4",
    link: "https://github.com/KiWi233333/jiwu-mall-chat-electron",
    details: "Jiwu聊天应用，是一个ai聊天、社交功能于一体的桌面应用。"
  },
  {
    title: "MSI",
    icon: "https://www.apple.com/favicon.ico",
    link: "https://github.com/KiWi233333/MSI-GS66-Stealth-OC-Hackintosh-opencore/releases/tag/1.0.1",
    details: "微星GS66黑苹果EFI文件 OC-Hackintosh-opencore"
  },
  {
    title: "简约博客",
    icon: "https://blogs.kiwi233.top/public/image/icon/favicon.ico",
    link: "https://blogs.kiwi233.top/",
    details: "H5C3+js+jq+bootstrap5响应式博客简约静态网站"
  },
])
</script>

<template>
  <div class="content animate-fade-in">
    <!-- 左侧 -->
    <div data-fades class="left sm:w-full bg-transparent  w-2/3 mx-a card card-df-br">
      <div class="top">
        <img src="/avatar.png" class="avatar" alt="头像">
        <h3 style='--lv: 1;margin: 0;' data-fade>{{ selfName }}</h3>
        <!-- 联系 -->
        <div data-fades class="w-full border-default border-0 border-y-1px py-2" data-fade>
          <small class="flex-row-c-c gap-1">
            <i class="i-carbon:location"></i>
            <a target="_blank"
              href="https://www.bing.com/maps?osid=414f6073-28b0-4f10-af33-92d146a2845c&cp=23.171926~113.203812&lvl=11&pi=0&imgid=2cf04fdd-6730-43f9-a96f-c9e0a91a8e11&v=2&sV=2&form=S00027"
              style="color: inherit;">广东省广州市天河</a>
          </small>
          <small class="flex-row-c-c gap-1">
            <i class="i-carbon:email"></i>
            <a target="_blank" href="mailto:kiwi2333@qq.com" style="color: inherit;">kiwi2333@qq.com</a>
          </small>
        </div>
        <!-- 媒体 -->
        <div class="links data-fade" style='--lv: 2;'>
          <a href="https://github.com/KiWi233333" target="_blank">
            <img src="/github.png" alt="github">
          </a>
          <a href="https://space.bilibili.com/37574787" target="_blank">
            <img src="/bilibili.png" alt="bilibili">
          </a>
        </div>
      </div>
    </div>
    <!-- 右侧 -->
    <div data-fades style="--delay: 60ms;" class="right card card-df-br">
      <!-- 关于我 -->
      <h1>About Me
        <NavBarTitle class="kiwi" />
      </h1>
      <p>💻 正在学习的独立开发者</p>
      <p>🧠 有创意点子就会尝试</p>
      <p>🏫 分享日常<a href="/blog">博客</a></p>
      <!-- 最近在做什么 -->
      <h2>What have I been doing</h2>
      <div data-fades class=" project-list">
        <DefaultCard :data="p" v-for="(p, i) in doingList" :key="i">
          <template #icon>
            <span class="p-4 mr-2" :class="p.icon" v-if="p.icon"></span>
          </template>
        </DefaultCard>
      </div>
      <!-- 项目 -->
      <h2>Projects</h2>
      <div data-fades class="project-list">
        <DefaultCard :data="p" v-for="(p, i) in projectList" :key="i" />
      </div>
      <a href="/blog" class="card-df p-2 px-4 hover:shadow mt-4 block ml-a border-default w-fit rounded-10px">Just
        Go！</a>
    </div>
  </div>
</template>
<style scoped lang="scss">
.content {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: start;
  grid-gap: 2rem;
  position: relative;

  >.card {
    --at-apply: 'p-6 sm:p-10 border-default';
    border-radius: 1rem;

    p {
      letter-spacing: 0.02em;
      height: 0.8em;
    }
  }

  .left {
    --at-apply: "bg-none static border-0 sm:(sticky bg-color border-default)";
    top: 6rem;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .top {
      display: flex;
      gap: 1rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .avatar {
        --at-apply: "sm:(w-7/10 rounded-4) transition-all w-1/2 rounded-1/2";
      }
    }

    .contact {
      display: flex;
      gap: 0.2em;
      flex-direction: column;


      .flex {
        display: flex;
        gap: 0.2em;
      }

    }

    // 链接
    .links {
      border-top: var(--border-default);
      padding: 1em 0 0 0;
      display: flex;
      gap: 0.4em;
      width: 100%;

      a {
        width: 1.6em;
        height: 1.6em;

        img {
          object-fit: cover;
          box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
          border-radius: 6px;
          overflow: hidden;
        }
      }
    }
  }

  .right {
    position: relative;

    .kiwi {
      display: inline;
      height: 1em;
      float: right;

    }

    h2 {
      font-size: 1.2rem;
      opacity: 0.9;
    }

    .project-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem 1rem;
    }
  }
}

@media screen and (width <=768px) {
  .content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;

    .left.card-df {
      position: static;
      background-color: transparent;
      border: 0;
      margin: auto;

      .avatar {
        border-radius: 50%;
      }
    }

    .right {

      .project-list {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>