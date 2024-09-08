
import { withBase } from 'vitepress'
import { ComputedRef } from 'vue';
// @unocss-include
export const projectList: CardItem[] = [
  {
    title: "极物圈社区商城",
    icon: "/index/jiwuquan.png",
    link: "/项目/极物圈",
    details: "极物圈，是一个集商城、ai聊天、沟通、社区功能于一体的平台。"
  },
  {
    title: "JiwuChat 聊天应用",
    icon: "/index/jiwuchat-tauri.png",
    link: "/项目/极物聊天",
    details: "Jiwu聊天应用，是一个ai聊天、社交功能于一体的Tauri桌面应用。"
  },
  {
    title: "MSI",
    linkTarget: "_blank",
    icon: "https://www.apple.com/favicon.ico",
    link: "https://github.com/KiWi233333/MSI-GS66-Stealth-OC-Hackintosh-opencore/releases/tag/1.0.1",
    details: "微星GS66黑苹果EFI文件 OC-Hackintosh-opencore"
  },
  {
    title: "简约博客",
    linkTarget: "_blank",
    icon: "/kiwi-fruit.svg",
    link: "https://blogs.kiwi233.top/",
    details: "H5C3+js+jq+bootstrap5响应式博客简约静态网站"
  },
]


export interface CardItem {
  icon?: string;
  link?: boolean | string;
  linkTarget?: string;
  title?: string | ComputedRef<string> | (() => string);
  details?: string;
  active?: boolean;
}

// @unocss-include
export const filesList = [
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
    title: "架构",
    icon: "🧶",
    details: "系统框架设计、系统模式等",
    link: "/架构/什么是Sass系统"
  },
  {
    title: "项目",
    icon: "🎃",
    details: "项目开发、项目设计等",
    link: "/项目/极物圈"
  },
  {
    title: "其他",
    icon: "📁",
    details: "Vitepress配置等",
    link: "/其他/1.开始"
  },
  {
    title: "正在建设",
    icon: "🛠",
    details: "正在建设...",
  }
];


export const friendList = [
  {
    title: "Kiwi2333",
    link: "https://kiwi233.top",
    details: "一个正在学习的独立开发者...",
    avatar: "https://kiwi233.top/avatar.png",
    linkTarget: "_blank"
  },
]
