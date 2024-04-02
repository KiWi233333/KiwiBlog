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
  <div class="content">
    <!-- 左侧 -->
    <div data-fade class="left card-default card-df">
      <div class="top">
        <img src="/logo.png" style='--lv: 0;' data-fade class="avatar" alt="头像">
        <h3 style='--lv: 1;margin: 0;' data-fade>{{ selfName }}</h3>
        <!-- 联系 -->
        <div class="contact" style='--lv: 2;' data-fade>
          <small class="email flex">
            📧 <a href="mailto:kiwi2333@qq.com">kiwi2333@qq.com</a>
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
    <div data-fade class="right card-default card-df data-fades" style='--lv: 1;'>
      <div>
        <h1>About Me
          <NavBarTitle class="kiwi" />
        </h1>
        <p>💻 正在学习的独立开发者</p>
        <p>🧠 有创意点子就会尝试</p>
        <p>🐵 喜欢美食和旅游</p>
      </div>
      <div>
        <h2>What have I been doing</h2>
        <div class="project-list">
          <DefaultCard :data="p" v-for="(p, i) in doingList" :key="i">
            <template #icon>
              <span class="p-4 mr-2" :class="p.icon" v-if="p.icon"></span>
            </template>
          </DefaultCard>
        </div>
      </div>
      <!-- 项目 -->
      <div>
        <h2>Projects</h2>
        <div class="project-list">
          <DefaultCard :data="p" v-for="(p, i) in projectList" :key="i" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.content {
  width: 100%;
  margin: 4rem auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: start;
  grid-gap: 2rem;
  position: relative;

  .card-df {
    box-shadow: rgba(0, 0, 0, 0.08) 1px 1px 1px;
    border-radius: 1rem;
    background-color: #e4e4e410;
    backdrop-filter: blur(1rem);
    border: 1px solid #b9b9b927;
    padding: 2.6rem;

    p {
      letter-spacing: 0.02em;
      height: 0.8em;
    }
  }

  .left {
    position: sticky;
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
        width: 70%;
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
        width: 1.4em;
        height: 1.4em;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 1px;

        img {
          object-fit: cover;
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