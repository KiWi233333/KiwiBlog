export const langCN: any = {
  label: '简体中文',
  lang: 'zh-CN',
  themeConfig: {
    darkModeSwitchLabel: "黑暗/白天",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    nav: [
      { text: "首页", link: "/" },
      { text: "博客", link: "/blog" },
      { text: "聊天", link: "/chat" },
      {
        text: '项目',
        items: [
          { text: '极物圈', link: 'https://github.com/KiWi233333/jiwu-mall-sites', },
          { text: '极物聊天（Tauri）', link: 'https://github.com/KiWi233333/jiwu-mall-chat-tauri', },
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
  root: {
    label: 'English',
    lang: 'en'
  },
  lang: 'en-US',
  themeConfig: {
    darkModeSwitchLabel: "Dark/Light",
    sidebarMenuLabel: "Menu",
    returnToTopLabel: "Return to Top",
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog" },
      { text: "Chat", link: "/chat" },
      {
        text: 'Projects',
        items: [
          { text: 'JiWu Circle', link: 'https://github.com/KiWi233333/jiwu-mall-sites', },
          { text: 'JiWu Chat Taurin)', link: 'https://github.com/KiWi233333/jiwu-mall-chat-tauri', },
          { text: 'JiWu Chat (Election)', link: 'https://github.com/KiWi233333/jiwu-mall-chat-electron', },
          { text: 'McDonald\'s (Harmony)', link: 'https://github.com/KiWi233333/McDonalds-Harmonry-Js', },
          { text: 'Gs66-OC-EFI', link: 'https://github.com/KiWi233333/MSI-GS66-Stealth-OC-Hackintosh-opencore', },
          { text: 'MeiYiGou (Mobile)', link: 'https://github.com/KiWi233333/shop-front-mobile-mall', },
          { text: 'KiwiBlog', link: 'https://github.com/KiWi233333/KiwiBlog', },
          { text: 'Kiwi Blog', link: 'https://github.com/KiWi233333/kiwi-blog-while-simple', },
        ]
      }
    ],
    // Footer
    footer: {
      message: "Licensed under the Apache-2.0 license",
      copyright: 'Copyright © 2024 Record Number: <a href="https://beian.miit.gov.cn/" target="_blank">Beijing **** Number</a>',
    },
    // Local search
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: "Search"
          },
          modal: {
            displayDetails: "Display Details",
            resetButtonTitle: "Reset",
            backButtonTitle: "Back",
            noResultsText: "No results found",
            footer: {
              selectText: "Select",
              navigateText: "Navigate",
              closeText: "Close",
            }
          }
        }
      }
    },
    // Font
    outlineTitle: "Article Navigation",
    lastUpdatedText: "Last Updated",
    docFooter: {
      prev: "Previous Page",
      next: "Next Page",
    },
  }
}
