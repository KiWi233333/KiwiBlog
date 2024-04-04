export const langCN: any = {
  label: '简体中文',
  lang: 'zh-CN',
  themeConfig: {
    darkModeSwitchLabel: "黑暗/白天",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    nav: [
      { text: "首 页", link: "/" },
      { text: "博 客", link: "/blog" },
      {
        text: '项 目',
        items: [
          { text: '极物圈', link: 'https://github.com/KiWi233333/jiwu-mall-web', },
          { text: '极物聊天（Election）', link: 'https://github.com/KiWi233333/jiwu-mall-chat-electron', },
          { text: '麦当劳（鸿蒙）', link: 'https://github.com/KiWi233333/McDonalds-Harmonry-Js', },
          { text: 'Gs66-OC-EFI', link: 'https://github.com/KiWi233333/MSI-GS66-Stealth-OC-Hackintosh-opencore', },
          { text: '美宜购（Mobile）', link: 'https://github.com/KiWi233333/shop-front-mobile-mall', },
          { text: 'KiwiBlog', link: 'https://github.com/KiWi233333/KiwiBlog', },
          { text: 'Kiwi博客', link: 'https://github.com/KiWi233333/kiwi-blog-while-simple', },
        ]
      }
    ],
    //页脚
    footer: {
      message: "采用 Apache-2.0 license 协议",
      copyright: 'Copyright © 2024 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京****号</a>',
    },
    //本地搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: "搜索"
          },
          modal: {
            displayDetails: "显示详情",
            resetButtonTitle: "重置",
            backButtonTitle: "返回",
            noResultsText: "未找到结果",
            footer: {
              selectText: "选择",
              navigateText: "导航",
              closeText: "关闭",
            }
          }
        }
      }
    },
    // 字体
    outlineTitle: "文章导航",
    lastUpdatedText: "上次更新",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  }
}

export const langEN: any = {
  label: 'English',
  lang: 'en',
  link: "/",
  themeConfig: {
    //本地搜索
    search: {
      provider: 'local',
    },
    //页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京****号</a>',
    },
  },

}