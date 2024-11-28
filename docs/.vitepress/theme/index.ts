// https://vitepress.dev/guide/custom-theme
import { inBrowser, type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HomeLayout from './layout/HomeLayout.vue'
import './style/index.scss'
import './style/init.scss'
import './style/custom.scss'
import NavBarTitle from './layout/NavBarTitle.vue'
import PublicResource from '../compnents/PublicResource.vue'
import 'uno.css'
import { initializeApp } from "firebase/app";
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
    if (inBrowser) {
      // 1. 引入 firebase.google 分析
      // https://firebase.google.com/docs/web/setup#available-libraries
      const firebaseConfig = {
        apiKey: "AIzaSyA3lMOxV94oIbzyRNfc9_tHibQaeoffsrU",
        authDomain: "jiwuquan.firebaseapp.com",
        projectId: "jiwuquan",
        storageBucket: "jiwuquan.firebasestorage.app",
        messagingSenderId: "621147828247",
        appId: "1:621147828247:web:a343702b7d2ce5cbc1ec52"
      };
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
    }
    // 注册全局组件
    app.component("NavBarTitle", NavBarTitle)
    app.component("PublicResource", PublicResource)
  }
} satisfies Theme
