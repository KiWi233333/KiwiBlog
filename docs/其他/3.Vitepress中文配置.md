---
# https://vitepress.dev/reference/default-theme-home-page
layout: doc 
---

# Vitepress中文配置

```Typescript
import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress",
  description: "VitePress中文文档",
  base: "/vitepress/",
  cleanUrls: true,
  locales: {
    root: {
      label: "中文",
      lang: "zh-CN",
    },
    en: {
      label: "English",
      lang: "en",
      link: "https://vitepress.dev/",
    },
  },
  head: [["meta", { name: "keywords", content: "VitePress docs 文档" }]],
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索"
          },
          modal: {
            displayDetails: "显示详情",
            resetButtonTitle: "重置",
            backButtonTitle: "返回",
            noResultsText: "未找到结果",
            footer: {
              selectText: "选择",
              navigateText: "导航",
              closeText: "关闭",
            }
          }
        }
      }
    },
    darkModeSwitchLabel: "黑暗模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    nav: [
      { text: "指南", link: "/guide/what-is-vitepress" },
      { text: "进阶", link: "/reference/site-config" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "介绍",
          collapsed: false,
          items: [
            { text: "前言", link: "/guide/" },
            { text: "什么是VitePress", link: "/guide/what-is-vitepress" },
            { text: "快速上手", link: "/guide/getting-started" },
            { text: "路由", link: "/guide/routing" },
            { text: "部署", link: "/guide/deploy" },
          ],
        },
        {
          text: "写作",
          collapsed: false,
          items: [
            { text: "markdown扩展", link: "/guide/markdown" },
            { text: "静态资源处理", link: "/guide/asset-handling" },
            { text: "frontmatter", link: "/guide/frontmatter" },
            { text: "在markdown中使用Vue", link: "/guide/using-vue" },
            { text: "多语言", link: "/guide/i18n" },
          ],
        },
        {
          text: "自定义",
          collapsed: false,
          items: [
            { text: "使用自定义主题", link: "/guide/custom-theme" },
            { text: "扩展默认主题", link: "/guide/extending-default-theme" },
            { text: "构建时的数据加载", link: "/guide/data-loading" },
            { text: "兼容服务端渲染", link: "/guide/ssr-compat" },
            { text: "连接到CMS", link: "/guide/cms" },
          ],
        },
        {
          text: "实验性",
          collapsed: false,
          items: [{ text: "MPA(多页面应用)模式", link: "/guide/mpa-mode" }],
        },
        {
          text: "进阶",
          link: "/reference/site-config",
        },
      ],
      "/reference/": [
        {
          text: "进阶",
          items: [
            { text: "站点配置", link: "/reference/site-config" },
            { text: "frontmatter配置", link: "/reference/frontmatter-config" },
            { text: "运行时API", link: "/reference/runtime-api" },
            { text: "命令行工具", link: "/reference/cli" },
            {
              text: "默认主题",
              items: [
                { text: "概述", link: "/reference/default-theme-config" },
                { text: "导航栏", link: "/reference/default-theme-nav" },
                { text: "侧边栏", link: "/reference/default-theme-sidebar" },
                { text: "主页", link: "/reference/default-theme-home-page" },
                { text: "页脚", link: "/reference/default-theme-footer" },
                { text: "布局", link: "/reference/default-theme-layout" },
                { text: "徽章", link: "/reference/default-theme-badge" },
                {
                  text: "团队页面",
                  link: "/reference/default-theme-team-page",
                },
                {
                  text: "上一页/下一页",
                  link: "/reference/default-theme-prev-next-links",
                },
                {
                  text: "编辑按钮",
                  link: "/reference/default-theme-edit-link",
                },
                {
                  text: "上次更新",
                  link: "/reference/default-theme-last-updated",
                },
                { text: "搜索", link: "/reference/default-theme-search" },
                { text: "广告", link: "/reference/default-theme-carbon-ads" },
              ],
            },
          ],
        },
      ],
    },
    outlineTitle: "本页大纲",
    lastUpdatedText: "上次更新",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    footer: {
      message: "本文档根据官方文档翻译，采用Apache-2.0 license协议",
      copyright: "作者：@Kiwi2333",
    },
    editLink: {
      pattern:
        "https://gitee.com/johnec/vitepress-doc-cn/tree/doc-cn/docs/:path",
      text: "在Gitee上编辑此页",
    },
    socialLinks: [
      {
        icon: {
          svg:
            ``,
        },
        link: "https://gitee.com/johnec/vitepress-doc-cn",
      },
    ],
  },
});
```
