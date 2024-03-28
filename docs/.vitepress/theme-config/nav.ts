import { DefaultTheme } from "vitepress"

export const navs: DefaultTheme.NavItem[] | undefined = [
  { text: '首页', link: '/' },
  {
    text: '项目',
    items: [
      { text: '极物圈', link: 'https://jiwu.kiwi2333.top/', },
      { text: '其他博客', link: 'https://blogs.kiwi233.top/', },
    ]
  }
] 