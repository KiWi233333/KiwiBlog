// docs/.vitepress/config.mts
import { defineConfig } from "file:///C:/Users/13296/Desktop/blog/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/theme-config/constant.ts
var appDescription = "A Kiwi2333 \u7684\u4E2A\u4EBA\u535A\u5BA2 | Self Blog";
var appName = "Kiwi2333";
var appLang = "zh-CN";

// docs/.vitepress/theme-config/pwa.ts
var scope = "/";
var pwaConfig = {
  registerType: "autoUpdate",
  scope,
  base: scope,
  includeAssets: ["logo.png"],
  // https://developer.mozilla.org/zh-CN/docs/Web/Manifest#lang
  manifest: {
    id: scope,
    background_color: "#fff",
    display: "standalone",
    name: appName,
    short_name: appName,
    start_url: scope,
    description: appDescription,
    theme_color: "#fff",
    icons: [
      {
        src: "/logo.png",
        sizes: "200x200",
        type: "image/png"
      }
    ],
    related_applications: [
      {
        platform: "play",
        url: "https://play.google.com/store/apps/details?id=kiwiblog.hackerweb"
      }
    ]
  },
  workbox: {
    globPatterns: ["**/*.{js,css,html,png,jpg,svg,woff,woff2,ttf}"],
    runtimeCaching: [
      {
        urlPattern: "/^(https|http)://*.kiwi2333.top/font/* /i",
        handler: "CacheFirst",
        options: {
          cacheName: "jiwuquan-fonts-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 31
            // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  },
  registerWebManifestInRouteRules: true,
  writePlugin: true,
  devOptions: {
    enabled: false
  }
};

// docs/.vitepress/config.mts
import { withPwa } from "file:///C:/Users/13296/Desktop/blog/node_modules/@vite-pwa/vitepress/dist/index.mjs";

// docs/.vitepress/theme-config/lang.ts
var langCN = {
  label: "\u7B80\u4F53\u4E2D\u6587",
  lang: "zn",
  themeConfig: {
    darkModeSwitchLabel: "\u9ED1\u6697/\u767D\u5929",
    sidebarMenuLabel: "\u83DC\u5355",
    returnToTopLabel: "\u8FD4\u56DE\u9876\u90E8",
    nav: [
      { text: "\u9996\u9875", link: "/" },
      { text: "\u535A\u5BA2", link: "/self" }
    ],
    //页脚
    footer: {
      message: "\u91C7\u7528 Apache-2.0 license \u534F\u8BAE",
      copyright: 'Copyright \xA9 2024 \u5907\u6848\u53F7\uFF1A<a href="https://beian.miit.gov.cn/" target="_blank">\u4EAC****\u53F7</a>'
    },
    //本地搜索
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "\u641C\u7D22"
          },
          modal: {
            displayDetails: "\u663E\u793A\u8BE6\u60C5",
            resetButtonTitle: "\u91CD\u7F6E",
            backButtonTitle: "\u8FD4\u56DE",
            noResultsText: "\u672A\u627E\u5230\u7ED3\u679C",
            footer: {
              selectText: "\u9009\u62E9",
              navigateText: "\u5BFC\u822A",
              closeText: "\u5173\u95ED"
            }
          }
        }
      }
    },
    // 字体
    outlineTitle: "\u6587\u7AE0\u5BFC\u822A",
    lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0",
    docFooter: {
      prev: "\u4E0A\u4E00\u9875",
      next: "\u4E0B\u4E00\u9875"
    }
  }
};
var langEN = {
  label: "English",
  lang: "en",
  link: "/",
  themeConfig: {
    //本地搜索
    search: {
      provider: "local"
    },
    //页脚
    footer: {
      message: "Released under the MIT License.",
      copyright: 'Copyright \xA9 2024 \u5907\u6848\u53F7\uFF1A<a href="https://beian.miit.gov.cn/" target="_blank">\u4EAC****\u53F7</a>'
    }
  }
};

// docs/.vitepress/config.mts
import AutoSidebar from "file:///C:/Users/13296/Desktop/blog/node_modules/vite-plugin-vitepress-auto-sidebar/dist/index.mjs";
var config_default = withPwa(defineConfig({
  title: appName,
  description: "Kiwi2333' blog\u{1F389}\uFF01",
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
      { icon: "github", link: "https://github.com/KiWi233333/blog" }
    ],
    search: {
      provider: "local"
    },
    // header标题
    siteTitle: false
  },
  //fav图标
  head: [
    ["link", { rel: "icon", href: "/kiwi_strong.svg" }]
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
      AutoSidebar()
    ]
  },
  vue: {},
  // 站点地图
  sitemap: {
    hostname: "https://blog.kiwi233.top/"
  }
}));
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lLWNvbmZpZy9jb25zdGFudC50cyIsICJkb2NzLy52aXRlcHJlc3MvdGhlbWUtY29uZmlnL3B3YS50cyIsICJkb2NzLy52aXRlcHJlc3MvdGhlbWUtY29uZmlnL2xhbmcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxMzI5NlxcXFxEZXNrdG9wXFxcXGJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxMzI5NlxcXFxEZXNrdG9wXFxcXGJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzEzMjk2L0Rlc2t0b3AvYmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcbmltcG9ydCB7IHB3YUNvbmZpZyB9IGZyb20gJy4vdGhlbWUtY29uZmlnL3B3YSdcbmltcG9ydCB7IHdpdGhQd2EgfSBmcm9tICdAdml0ZS1wd2Evdml0ZXByZXNzJ1xuaW1wb3J0IHsgYXBwTGFuZywgYXBwTmFtZSB9IGZyb20gJy4vdGhlbWUtY29uZmlnL2NvbnN0YW50J1xuaW1wb3J0IHsgbGFuZ0NOLCBsYW5nRU4gfSBmcm9tICcuL3RoZW1lLWNvbmZpZy9sYW5nJztcbmltcG9ydCBBdXRvU2lkZWJhciBmcm9tICd2aXRlLXBsdWdpbi12aXRlcHJlc3MtYXV0by1zaWRlYmFyJztcblxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgd2l0aFB3YShkZWZpbmVDb25maWcoe1xuICB0aXRsZTogYXBwTmFtZSxcbiAgZGVzY3JpcHRpb246IFwiS2l3aTIzMzMnIGJsb2dcdUQ4M0NcdURGODlcdUZGMDFcIixcbiAgbGFuZzogYXBwTGFuZyxcbiAgcHdhOiBwd2FDb25maWcsXG4gIGxvY2FsZXM6IHtcbiAgICByb290OiBsYW5nQ04sXG4gICAgZW46IGxhbmdFTlxuICB9LFxuICB0aGVtZUNvbmZpZzoge1xuXG4gICAgc2lkZWJhcjoge30sXG4gICAgLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lLWNvbmZpZ1xuICAgIGxvZ286IFwiXCIsXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vS2lXaTIzMzMzMy9ibG9nJyB9XG4gICAgXSxcbiAgICBzZWFyY2g6IHtcbiAgICAgIHByb3ZpZGVyOiAnbG9jYWwnLFxuICAgIH0sXG4gICAgLy8gaGVhZGVyXHU2ODA3XHU5ODk4XG4gICAgc2l0ZVRpdGxlOiBmYWxzZSxcbiAgfSxcbiAgLy9mYXZcdTU2RkVcdTY4MDdcbiAgaGVhZDogW1xuICAgIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcva2l3aV9zdHJvbmcuc3ZnJyB9XSxcbiAgXSxcbiAgLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3poL3JlZmVyZW5jZS9zaXRlLWNvbmZpZyNtZXRhY2h1bmtcbiAgbWV0YUNodW5rOiB0cnVlLFxuICAvLyBcdTU5MUNcdTk1RjRcdTZBMjFcdTVGMEYgXHU1OTE2XHU4OUMyXG4gIGFwcGVhcmFuY2U6IFwiZGFya1wiLFxuICAvLyBtYXJrZG93blxuICBtYXJrZG93bjoge1xuICAgIGltYWdlOiB7XG4gICAgICBsYXp5TG9hZGluZzogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgLy8gdml0ZVxuICB2aXRlOiB7XG4gICAgcGx1Z2luczogW1xuICAgICAgQXV0b1NpZGViYXIoKVxuICAgIF1cbiAgfSxcbiAgdnVlOiB7XG4gIH0sXG4gIC8vIFx1N0FEOVx1NzBCOVx1NTczMFx1NTZGRVxuICBzaXRlbWFwOiB7XG4gICAgaG9zdG5hbWU6ICdodHRwczovL2Jsb2cua2l3aTIzMy50b3AvJ1xuICB9LFxufSkpXG5cblxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxMzI5NlxcXFxEZXNrdG9wXFxcXGJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lLWNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMTMyOTZcXFxcRGVza3RvcFxcXFxibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZS1jb25maWdcXFxcY29uc3RhbnQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzEzMjk2L0Rlc2t0b3AvYmxvZy9kb2NzLy52aXRlcHJlc3MvdGhlbWUtY29uZmlnL2NvbnN0YW50LnRzXCI7ZXhwb3J0IGNvbnN0IGFwcERlc2NyaXB0aW9uID0gXCJBIEtpd2kyMzMzIFx1NzY4NFx1NEUyQVx1NEVCQVx1NTM1QVx1NUJBMiB8IFNlbGYgQmxvZ1wiXHJcbmV4cG9ydCBjb25zdCBhcHBOYW1lID0gXCJLaXdpMjMzM1wiXHJcbmV4cG9ydCBjb25zdCBzZWxmTmFtZSA9IFwiS2l3aTIzMzNcIlxyXG5leHBvcnQgY29uc3QgYXBwTGFuZyA9IFwiemgtQ05cIiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMTMyOTZcXFxcRGVza3RvcFxcXFxibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZS1jb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDEzMjk2XFxcXERlc2t0b3BcXFxcYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWUtY29uZmlnXFxcXHB3YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvMTMyOTYvRGVza3RvcC9ibG9nL2RvY3MvLnZpdGVwcmVzcy90aGVtZS1jb25maWcvcHdhLnRzXCI7XHJcbi8vIGh0dHBzOi8vdml0ZS1wd2Etb3JnLm5ldGxpZnkuYXBwL2ZyYW1ld29ya3MvbnV4dFxyXG5pbXBvcnQgeyBhcHBEZXNjcmlwdGlvbiwgYXBwTmFtZSB9IGZyb20gXCIuL2NvbnN0YW50XCI7XHJcblxyXG4vLyBodHRwczovL3d3dy5qaWFuc2h1LmNvbS9wLzBhMDdiZDUyOGUwOFxyXG5jb25zdCBzY29wZSA9IFwiL1wiO1xyXG5leHBvcnQgY29uc3QgcHdhQ29uZmlnOiBhbnkgPSB7XHJcbiAgcmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcclxuICBzY29wZSxcclxuICBiYXNlOiBzY29wZSxcclxuICBpbmNsdWRlQXNzZXRzOiBbXCJsb2dvLnBuZ1wiXSxcclxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy96aC1DTi9kb2NzL1dlYi9NYW5pZmVzdCNsYW5nXHJcbiAgbWFuaWZlc3Q6IHtcclxuICAgIGlkOiBzY29wZSxcclxuICAgIGJhY2tncm91bmRfY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgZGlzcGxheTogXCJzdGFuZGFsb25lXCIsXHJcbiAgICBuYW1lOiBhcHBOYW1lLFxyXG4gICAgc2hvcnRfbmFtZTogYXBwTmFtZSxcclxuICAgIHN0YXJ0X3VybDogc2NvcGUsXHJcbiAgICBkZXNjcmlwdGlvbjogYXBwRGVzY3JpcHRpb24sXHJcbiAgICB0aGVtZV9jb2xvcjogXCIjZmZmXCIsXHJcbiAgICBpY29uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBcIi9sb2dvLnBuZ1wiLFxyXG4gICAgICAgIHNpemVzOiBcIjIwMHgyMDBcIixcclxuICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHJlbGF0ZWRfYXBwbGljYXRpb25zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwbGF0Zm9ybTogXCJwbGF5XCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1raXdpYmxvZy5oYWNrZXJ3ZWJcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB3b3JrYm94OiB7XHJcbiAgICBnbG9iUGF0dGVybnM6IFtcIioqXFwvKi57anMsY3NzLGh0bWwscG5nLGpwZyxzdmcsd29mZix3b2ZmMix0dGZ9XCJdLFxyXG4gICAgcnVudGltZUNhY2hpbmc6IFtcclxuICAgICAge1xyXG4gICAgICAgIHVybFBhdHRlcm46IFwiL14oaHR0cHN8aHR0cCk6Ly8qLmtpd2kyMzMzLnRvcC9mb250LyogL2lcIixcclxuICAgICAgICBoYW5kbGVyOiBcIkNhY2hlRmlyc3RcIixcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBjYWNoZU5hbWU6IFwiaml3dXF1YW4tZm9udHMtY2FjaGVcIixcclxuICAgICAgICAgIGV4cGlyYXRpb246IHtcclxuICAgICAgICAgICAgbWF4RW50cmllczogMTAsXHJcbiAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDMxLCAvLyA8PT0gMzY1IGRheXNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjYWNoZWFibGVSZXNwb25zZToge1xyXG4gICAgICAgICAgICBzdGF0dXNlczogWzAsIDIwMF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgcmVnaXN0ZXJXZWJNYW5pZmVzdEluUm91dGVSdWxlczogdHJ1ZSxcclxuICB3cml0ZVBsdWdpbjogdHJ1ZSxcclxuICBkZXZPcHRpb25zOiB7XHJcbiAgICBlbmFibGVkOiBmYWxzZSxcclxuICB9LFxyXG59O1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDEzMjk2XFxcXERlc2t0b3BcXFxcYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWUtY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxMzI5NlxcXFxEZXNrdG9wXFxcXGJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lLWNvbmZpZ1xcXFxsYW5nLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy8xMzI5Ni9EZXNrdG9wL2Jsb2cvZG9jcy8udml0ZXByZXNzL3RoZW1lLWNvbmZpZy9sYW5nLnRzXCI7ZXhwb3J0IGNvbnN0IGxhbmdDTjogYW55ID0ge1xyXG4gIGxhYmVsOiAnXHU3QjgwXHU0RjUzXHU0RTJEXHU2NTg3JyxcclxuICBsYW5nOiAnem4nLFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICBkYXJrTW9kZVN3aXRjaExhYmVsOiBcIlx1OUVEMVx1NjY5Ny9cdTc2N0RcdTU5MjlcIixcclxuICAgIHNpZGViYXJNZW51TGFiZWw6IFwiXHU4M0RDXHU1MzU1XCIsXHJcbiAgICByZXR1cm5Ub1RvcExhYmVsOiBcIlx1OEZENFx1NTZERVx1OTg3Nlx1OTBFOFwiLFxyXG4gICAgbmF2OiBbXHJcbiAgICAgIHsgdGV4dDogXCJcdTk5OTZcdTk4NzVcIiwgbGluazogXCIvXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlx1NTM1QVx1NUJBMlwiLCBsaW5rOiBcIi9zZWxmXCIgfSxcclxuICAgIF0sXHJcbiAgICAvL1x1OTg3NVx1ODExQVxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIG1lc3NhZ2U6IFwiXHU5MUM3XHU3NTI4IEFwYWNoZS0yLjAgbGljZW5zZSBcdTUzNEZcdThCQUVcIixcclxuICAgICAgY29weXJpZ2h0OiAnQ29weXJpZ2h0IFx1MDBBOSAyMDI0IFx1NTkwN1x1Njg0OFx1NTNGN1x1RkYxQTxhIGhyZWY9XCJodHRwczovL2JlaWFuLm1paXQuZ292LmNuL1wiIHRhcmdldD1cIl9ibGFua1wiPlx1NEVBQyoqKipcdTUzRjc8L2E+JyxcclxuICAgIH0sXHJcbiAgICAvL1x1NjcyQ1x1NTczMFx1NjQxQ1x1N0QyMlxyXG4gICAgc2VhcmNoOiB7XHJcbiAgICAgIHByb3ZpZGVyOiAnbG9jYWwnLFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgdHJhbnNsYXRpb25zOiB7XHJcbiAgICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcdTY0MUNcdTdEMjJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1vZGFsOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlEZXRhaWxzOiBcIlx1NjYzRVx1NzkzQVx1OEJFNlx1NjBDNVwiLFxyXG4gICAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiBcIlx1OTFDRFx1N0Y2RVwiLFxyXG4gICAgICAgICAgICBiYWNrQnV0dG9uVGl0bGU6IFwiXHU4RkQ0XHU1NkRFXCIsXHJcbiAgICAgICAgICAgIG5vUmVzdWx0c1RleHQ6IFwiXHU2NzJBXHU2MjdFXHU1MjMwXHU3RUQzXHU2NzlDXCIsXHJcbiAgICAgICAgICAgIGZvb3Rlcjoge1xyXG4gICAgICAgICAgICAgIHNlbGVjdFRleHQ6IFwiXHU5MDA5XHU2MkU5XCIsXHJcbiAgICAgICAgICAgICAgbmF2aWdhdGVUZXh0OiBcIlx1NUJGQ1x1ODIyQVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlVGV4dDogXCJcdTUxNzNcdTk1RURcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIFx1NUI1N1x1NEY1M1xyXG4gICAgb3V0bGluZVRpdGxlOiBcIlx1NjU4N1x1N0FFMFx1NUJGQ1x1ODIyQVwiLFxyXG4gICAgbGFzdFVwZGF0ZWRUZXh0OiBcIlx1NEUwQVx1NkIyMVx1NjZGNFx1NjVCMFwiLFxyXG4gICAgZG9jRm9vdGVyOiB7XHJcbiAgICAgIHByZXY6IFwiXHU0RTBBXHU0RTAwXHU5ODc1XCIsXHJcbiAgICAgIG5leHQ6IFwiXHU0RTBCXHU0RTAwXHU5ODc1XCIsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxhbmdFTjogYW55ID0ge1xyXG4gIGxhYmVsOiAnRW5nbGlzaCcsXHJcbiAgbGFuZzogJ2VuJyxcclxuICBsaW5rOiBcIi9cIixcclxuICB0aGVtZUNvbmZpZzoge1xyXG4gICAgLy9cdTY3MkNcdTU3MzBcdTY0MUNcdTdEMjJcclxuICAgIHNlYXJjaDoge1xyXG4gICAgICBwcm92aWRlcjogJ2xvY2FsJyxcclxuICAgIH0sXHJcbiAgICAvL1x1OTg3NVx1ODExQVxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIG1lc3NhZ2U6ICdSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuJyxcclxuICAgICAgY29weXJpZ2h0OiAnQ29weXJpZ2h0IFx1MDBBOSAyMDI0IFx1NTkwN1x1Njg0OFx1NTNGN1x1RkYxQTxhIGhyZWY9XCJodHRwczovL2JlaWFuLm1paXQuZ292LmNuL1wiIHRhcmdldD1cIl9ibGFua1wiPlx1NEVBQyoqKipcdTUzRjc8L2E+JyxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlULFNBQVMsb0JBQW9COzs7QUNBcUIsSUFBTSxpQkFBaUI7QUFDM1gsSUFBTSxVQUFVO0FBRWhCLElBQU0sVUFBVTs7O0FDRXZCLElBQU0sUUFBUTtBQUNQLElBQU0sWUFBaUI7QUFBQSxFQUM1Qixj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
