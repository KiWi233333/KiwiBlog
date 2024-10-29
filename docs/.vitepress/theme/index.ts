// https://vitepress.dev/guide/custom-theme
import { inBrowser, type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HomeLayout from './layout/HomeLayout.vue'
import './style/index.scss'
import './style/init.scss'
import './style/custom.scss'
import NavBarTitle from './layout/NavBarTitle.vue'
import 'uno.css'
import busuanzi from 'busuanzi.pure.js'
// import 'virtual:unocss-devtools'

export default {
  extends: DefaultTheme,
  Layout: HomeLayout,
  enhanceApp({ app, router, siteData }) {
    // 博客访问量统计
    router.onBeforeRouteChange = (to) => {
      if (to !== '/' && inBrowser) {
        busuanzi.fetch()
      }
    }
    // 注册全局组件
    app.component("NavBarTitle", NavBarTitle)
  }
} satisfies Theme
