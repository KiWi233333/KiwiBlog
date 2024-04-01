export const langCN: any = {
  label: '简体中文',
  lang: 'zn',
  themeConfig: {
    darkModeSwitchLabel: "黑暗/白天",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    nav: [
      { text: "首页", link: "/" },
      { text: "个人", link: "/self" },
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