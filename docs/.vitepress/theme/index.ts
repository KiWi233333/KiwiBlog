// https://vitepress.dev/guide/custom-theme
import { inBrowser, type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HomeLayout from './layout/HomeLayout.vue'
import './style/index.scss'
import './style/init.scss'
import './style/custom.scss'
import NavBarTitle from './layout/NavBarTitle.vue'
import PublicResource from '../compnents/PublicResource.vue'
import Lenis from 'lenis'
import 'uno.css'
// import 'virtual:unocss-devtools'

export default {
  extends: DefaultTheme,
  Layout: HomeLayout,
  enhanceApp({ app, router, siteData }) {
    // // 博客访问量统计
    // router.onBeforeRouteChange = (to) => {
    //   if (to !== '/' && inBrowser) {
    //     busuanzi.fetch()
    //   }
    // }
    if (inBrowser && localStorage.getItem("isSmoothScroll") !== 'false') {
      // 滚动动画
      const lenis = new Lenis({
        duration: 0.68,
        // wrapper: window,
        prevent: (node) => node.id === 'VPSidebarNav',
      })
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }
    // 注册全局组件
    app.component("NavBarTitle", NavBarTitle)
    app.component("PublicResource", PublicResource)
  }
} satisfies Theme
