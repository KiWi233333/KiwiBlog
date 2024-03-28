import { defineConfig } from 'vitepress'
import { navs } from './theme-config/nav'
import { sidebar } from './theme-config/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kiwi Blog",
  description: "Kiwi2333' blog🎉！",
  //fav图标
  head: [
    ['link',{ rel: 'icon', href: '/logo.png'}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 导航
    nav: navs,
    // 子菜单
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KiWi233333/blog' }
    ]
  },
  // 站点地图
  sitemap: {
    hostname: 'https://blog.kiwi233.top'
  },
})
