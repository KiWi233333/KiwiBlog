import { defineConfig } from 'vitepress'
import { navs } from './theme-config/nav'
import { sidebar } from './theme-config/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kiwi2333的博客",
  description: "Kiwi2333' blog🎉！",
  //fav图标
  head: [
    // ['link',{ rel: 'icon', href: '/kiwi_strong.svg'}],
    ['link',{ rel: 'icon', href: '/logo.png'}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/kiwi_strong.svg',
    // header标题
    siteTitle: " ",
    // 导航
    nav: navs,
    // 子菜单
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KiWi233333/blog' }
    ],
    //本地搜索
    search: { 
      provider: 'local'
    }, 
    //页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京****号</a>', 
    },
  },
  // 站点地图
  sitemap: {
    hostname: 'https://blog.kiwi233.top'
  },
})
