import { defineConfig } from 'vitepress'
import { navs } from './theme-config/nav'
import { sidebar } from './theme-config/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kiwi2333",
  description: "Kiwi2333' blog🎉！",
  lang: "zh-CN",
  locales: {
    root: {
      label: '简体中文',
      lang: 'zn',
      themeConfig: {
        // 导航
        nav: navs,
        // 子菜单
        sidebar: sidebar,
        //本地搜索
        search: {
          provider: 'local'
        },
        //页脚
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2024 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京****号</a>',
        },
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        // 导航
        nav: navs,
        // 子菜单
        sidebar: sidebar,
        //本地搜索
        search: {
          provider: 'local'
        },
        //页脚
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2024 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京****号</a>',
        },
      }
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/kiwi.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KiWi233333/blog' }
    ],
    // header标题
    siteTitle: false, 
    //本地搜索
    search: {
      provider: 'local'
    }, 
  },
  //fav图标
  head: [
    ['link', { rel: 'icon', href: '/kiwi_strong.svg' }],
  ],
  // https://vitepress.dev/zh/reference/site-config#metachunk
  metaChunk: true,
  // 夜间模式
  appearance: "dark",
  // markdown
  markdown: {
  },
  // vite
  vite: {
  },
  vue: {
  },
  // 站点地图
  sitemap: {
    hostname: 'https://blog.kiwi233.top'
  },
})
