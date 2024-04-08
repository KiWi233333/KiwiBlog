// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HomeLayout from './layout/HomeLayout.vue'
import './style/index.scss'
import './style/init.scss'
import './style/custom.scss'
import NavBarTitle from './layout/NavBarTitle.vue'
import 'uno.css'
// import 'virtual:unocss-devtools'

export default {
  extends: DefaultTheme,
  Layout: HomeLayout,
  enhanceApp({ app, router, siteData }) {
    app.component("NavBarTitle", NavBarTitle)
  }
} satisfies Theme
