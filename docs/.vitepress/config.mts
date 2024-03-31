import { defineConfig } from 'vitepress'
import { pwaConfig } from './theme-config/pwa'
import { withPwa } from '@vite-pwa/vitepress'
import { appLang, appName } from './theme-config/constant'
import { langCN, langEN } from './theme-config/lang';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  title: appName,
  description: "Kiwi2333' blog🎉！",
  lang: appLang,
  pwa: pwaConfig,
  locales: {
    root: langCN,
    en: langEN
  },
  themeConfig: {
    sidebar: {},
    // https://vitepress.dev/reference/default-theme-config
    logo: "",
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
  // 夜间模式 外观
  appearance: "dark",
  // markdown
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  // vite
  vite: {
    plugins: [
      AutoSidebar({
        path: "/docs",
        ignoreList: ['/docs.vitepress/**', '/docs.vitepress/*']
      })
    ]
  },
  vue: {
  },
  // 站点地图
  sitemap: {
    hostname: 'https://blog.kiwi233.top'
  },
}))


