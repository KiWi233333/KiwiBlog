import { DefaultTheme } from "vitepress"

export const sidebar: DefaultTheme.Sidebar | undefined = [
  {
    text: '前端',
    collapsed: true,
    items: [
      { text: 'Nuxt3', link: '/markdown-examples' },
      { text: 'Runtime API Examples', link: '/api-examples' }
    ]
  },
  {
    text: 'Java',
    items: [
      { text: 'Markdown Examples', link: '/markdown-examples' },
      { text: 'Runtime API Examples', link: '/api-examples' }
    ]
  },
]