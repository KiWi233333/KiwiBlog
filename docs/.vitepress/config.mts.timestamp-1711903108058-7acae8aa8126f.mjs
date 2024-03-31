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
    //页脚
    footer: {
      message: "Released under the MIT License.",
      copyright: 'Copyright \xA9 2024 \u5907\u6848\u53F7\uFF1A<a href="https://beian.miit.gov.cn/" target="_blank">\u4EAC****\u53F7</a>'
    }
  }
};
var langEN = {
  label: "English",
  lang: "en",
  themeConfig: {
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
    // header标题
    siteTitle: false,
    //本地搜索
    search: {
      provider: "local"
    }
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
      AutoSidebar({
        path: "/docs",
        ignoreList: [".vitepress/**"]
      })
    ]
  },
  vue: {},
  // 站点地图
  sitemap: {
    hostname: "https://blog.kiwi233.top"
  }
}));
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lLWNvbmZpZy9jb25zdGFudC50cyIsICJkb2NzLy52aXRlcHJlc3MvdGhlbWUtY29uZmlnL3B3YS50cyIsICJkb2NzLy52aXRlcHJlc3MvdGhlbWUtY29uZmlnL2xhbmcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxMzI5NlxcXFxEZXNrdG9wXFxcXGJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxMzI5NlxcXFxEZXNrdG9wXFxcXGJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzEzMjk2L0Rlc2t0b3AvYmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcbmltcG9ydCB7IHB3YUNvbmZpZyB9IGZyb20gJy4vdGhlbWUtY29uZmlnL3B3YSdcbmltcG9ydCB7IHdpdGhQd2EgfSBmcm9tICdAdml0ZS1wd2Evdml0ZXByZXNzJ1xuaW1wb3J0IHsgYXBwTGFuZywgYXBwTmFtZSB9IGZyb20gJy4vdGhlbWUtY29uZmlnL2NvbnN0YW50J1xuaW1wb3J0IHsgbGFuZ0NOLCBsYW5nRU4gfSBmcm9tICcuL3RoZW1lLWNvbmZpZy9sYW5nJztcbmltcG9ydCBBdXRvU2lkZWJhciBmcm9tICd2aXRlLXBsdWdpbi12aXRlcHJlc3MtYXV0by1zaWRlYmFyJztcblxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgd2l0aFB3YShkZWZpbmVDb25maWcoe1xuICB0aXRsZTogYXBwTmFtZSxcbiAgZGVzY3JpcHRpb246IFwiS2l3aTIzMzMnIGJsb2dcdUQ4M0NcdURGODlcdUZGMDFcIixcbiAgbGFuZzogYXBwTGFuZyxcbiAgcHdhOiBwd2FDb25maWcsXG4gIGxvY2FsZXM6IHtcbiAgICByb290OiBsYW5nQ04sXG4gICAgZW46IGxhbmdFTlxuICB9LFxuICB0aGVtZUNvbmZpZzoge1xuICAgIHNpZGViYXI6IHt9LFxuICAgIC8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS1jb25maWdcbiAgICBsb2dvOiBcIlwiLFxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0tpV2kyMzMzMzMvYmxvZycgfVxuICAgIF0sXG4gICAgLy8gaGVhZGVyXHU2ODA3XHU5ODk4XG4gICAgc2l0ZVRpdGxlOiBmYWxzZSxcbiAgICAvL1x1NjcyQ1x1NTczMFx1NjQxQ1x1N0QyMlxuICAgIHNlYXJjaDoge1xuICAgICAgcHJvdmlkZXI6ICdsb2NhbCdcbiAgICB9LFxuICB9LFxuICAvL2Zhdlx1NTZGRVx1NjgwN1xuICBoZWFkOiBbXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9raXdpX3N0cm9uZy5zdmcnIH1dLFxuICBdLFxuICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvemgvcmVmZXJlbmNlL3NpdGUtY29uZmlnI21ldGFjaHVua1xuICBtZXRhQ2h1bms6IHRydWUsXG4gIC8vIFx1NTkxQ1x1OTVGNFx1NkEyMVx1NUYwRiBcdTU5MTZcdTg5QzJcbiAgYXBwZWFyYW5jZTogXCJkYXJrXCIsXG4gIC8vIG1hcmtkb3duXG4gIG1hcmtkb3duOiB7XG4gICAgaW1hZ2U6IHtcbiAgICAgIGxhenlMb2FkaW5nOiB0cnVlXG4gICAgfVxuICB9LFxuICAvLyB2aXRlXG4gIHZpdGU6IHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICBBdXRvU2lkZWJhcih7XG4gICAgICAgIHBhdGg6IFwiL2RvY3NcIixcbiAgICAgICAgaWdub3JlTGlzdDogWycudml0ZXByZXNzLyoqJ11cbiAgICAgIH0pXG4gICAgXVxuICB9LFxuICB2dWU6IHtcbiAgfSxcbiAgLy8gXHU3QUQ5XHU3MEI5XHU1NzMwXHU1NkZFXG4gIHNpdGVtYXA6IHtcbiAgICBob3N0bmFtZTogJ2h0dHBzOi8vYmxvZy5raXdpMjMzLnRvcCdcbiAgfSxcbn0pKVxuXG5cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMTMyOTZcXFxcRGVza3RvcFxcXFxibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZS1jb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDEzMjk2XFxcXERlc2t0b3BcXFxcYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWUtY29uZmlnXFxcXGNvbnN0YW50LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy8xMzI5Ni9EZXNrdG9wL2Jsb2cvZG9jcy8udml0ZXByZXNzL3RoZW1lLWNvbmZpZy9jb25zdGFudC50c1wiO2V4cG9ydCBjb25zdCBhcHBEZXNjcmlwdGlvbiA9IFwiQSBLaXdpMjMzMyBcdTc2ODRcdTRFMkFcdTRFQkFcdTUzNUFcdTVCQTIgfCBTZWxmIEJsb2dcIlxyXG5leHBvcnQgY29uc3QgYXBwTmFtZSA9IFwiS2l3aTIzMzNcIlxyXG5leHBvcnQgY29uc3QgYXBwTGFuZyA9IFwiemgtQ05cIiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMTMyOTZcXFxcRGVza3RvcFxcXFxibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZS1jb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDEzMjk2XFxcXERlc2t0b3BcXFxcYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWUtY29uZmlnXFxcXHB3YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvMTMyOTYvRGVza3RvcC9ibG9nL2RvY3MvLnZpdGVwcmVzcy90aGVtZS1jb25maWcvcHdhLnRzXCI7XHJcbi8vIGh0dHBzOi8vdml0ZS1wd2Etb3JnLm5ldGxpZnkuYXBwL2ZyYW1ld29ya3MvbnV4dFxyXG5pbXBvcnQgeyBhcHBEZXNjcmlwdGlvbiwgYXBwTmFtZSB9IGZyb20gXCIuL2NvbnN0YW50XCI7XHJcblxyXG4vLyBodHRwczovL3d3dy5qaWFuc2h1LmNvbS9wLzBhMDdiZDUyOGUwOFxyXG5jb25zdCBzY29wZSA9IFwiL1wiO1xyXG5leHBvcnQgY29uc3QgcHdhQ29uZmlnOiBhbnkgPSB7XHJcbiAgcmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcclxuICBzY29wZSxcclxuICBiYXNlOiBzY29wZSxcclxuICBpbmNsdWRlQXNzZXRzOiBbXCJsb2dvLnBuZ1wiXSxcclxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy96aC1DTi9kb2NzL1dlYi9NYW5pZmVzdCNsYW5nXHJcbiAgbWFuaWZlc3Q6IHtcclxuICAgIGlkOiBzY29wZSxcclxuICAgIGJhY2tncm91bmRfY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgZGlzcGxheTogXCJzdGFuZGFsb25lXCIsXHJcbiAgICBuYW1lOiBhcHBOYW1lLFxyXG4gICAgc2hvcnRfbmFtZTogYXBwTmFtZSxcclxuICAgIHN0YXJ0X3VybDogc2NvcGUsXHJcbiAgICBkZXNjcmlwdGlvbjogYXBwRGVzY3JpcHRpb24sXHJcbiAgICB0aGVtZV9jb2xvcjogXCIjZmZmXCIsXHJcbiAgICBpY29uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiBcIi9sb2dvLnBuZ1wiLFxyXG4gICAgICAgIHNpemVzOiBcIjIwMHgyMDBcIixcclxuICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHJlbGF0ZWRfYXBwbGljYXRpb25zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwbGF0Zm9ybTogXCJwbGF5XCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1raXdpYmxvZy5oYWNrZXJ3ZWJcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB3b3JrYm94OiB7XHJcbiAgICBnbG9iUGF0dGVybnM6IFtcIioqXFwvKi57anMsY3NzLGh0bWwscG5nLGpwZyxzdmcsd29mZix3b2ZmMix0dGZ9XCJdLFxyXG4gICAgcnVudGltZUNhY2hpbmc6IFtcclxuICAgICAge1xyXG4gICAgICAgIHVybFBhdHRlcm46IFwiL14oaHR0cHN8aHR0cCk6Ly8qLmtpd2kyMzMzLnRvcC9mb250LyogL2lcIixcclxuICAgICAgICBoYW5kbGVyOiBcIkNhY2hlRmlyc3RcIixcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBjYWNoZU5hbWU6IFwiaml3dXF1YW4tZm9udHMtY2FjaGVcIixcclxuICAgICAgICAgIGV4cGlyYXRpb246IHtcclxuICAgICAgICAgICAgbWF4RW50cmllczogMTAsXHJcbiAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDMxLCAvLyA8PT0gMzY1IGRheXNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjYWNoZWFibGVSZXNwb25zZToge1xyXG4gICAgICAgICAgICBzdGF0dXNlczogWzAsIDIwMF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgcmVnaXN0ZXJXZWJNYW5pZmVzdEluUm91dGVSdWxlczogdHJ1ZSxcclxuICB3cml0ZVBsdWdpbjogdHJ1ZSxcclxuICBkZXZPcHRpb25zOiB7XHJcbiAgICBlbmFibGVkOiBmYWxzZSxcclxuICB9LFxyXG59O1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDEzMjk2XFxcXERlc2t0b3BcXFxcYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWUtY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxMzI5NlxcXFxEZXNrdG9wXFxcXGJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lLWNvbmZpZ1xcXFxsYW5nLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy8xMzI5Ni9EZXNrdG9wL2Jsb2cvZG9jcy8udml0ZXByZXNzL3RoZW1lLWNvbmZpZy9sYW5nLnRzXCI7ZXhwb3J0IGNvbnN0IGxhbmdDTjogYW55ID0ge1xyXG4gIGxhYmVsOiAnXHU3QjgwXHU0RjUzXHU0RTJEXHU2NTg3JyxcclxuICBsYW5nOiAnem4nLFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICAvL1x1OTg3NVx1ODExQVxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIG1lc3NhZ2U6ICdSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuJyxcclxuICAgICAgY29weXJpZ2h0OiAnQ29weXJpZ2h0IFx1MDBBOSAyMDI0IFx1NTkwN1x1Njg0OFx1NTNGN1x1RkYxQTxhIGhyZWY9XCJodHRwczovL2JlaWFuLm1paXQuZ292LmNuL1wiIHRhcmdldD1cIl9ibGFua1wiPlx1NEVBQyoqKipcdTUzRjc8L2E+JyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGFuZ0VOOiBhbnkgPSB7XHJcbiAgbGFiZWw6ICdFbmdsaXNoJyxcclxuICBsYW5nOiAnZW4nLFxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICAvL1x1OTg3NVx1ODExQVxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIG1lc3NhZ2U6ICdSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuJyxcclxuICAgICAgY29weXJpZ2h0OiAnQ29weXJpZ2h0IFx1MDBBOSAyMDI0IFx1NTkwN1x1Njg0OFx1NTNGN1x1RkYxQTxhIGhyZWY9XCJodHRwczovL2JlaWFuLm1paXQuZ292LmNuL1wiIHRhcmdldD1cIl9ibGFua1wiPlx1NEVBQyoqKipcdTUzRjc8L2E+JyxcclxuICAgIH0sXHJcbiAgfVxyXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VCxTQUFTLG9CQUFvQjs7O0FDQXFCLElBQU0saUJBQWlCO0FBQzNYLElBQU0sVUFBVTtBQUNoQixJQUFNLFVBQVU7OztBQ0d2QixJQUFNLFFBQVE7QUFDUCxJQUFNLFlBQWlCO0FBQUEsRUFDNUIsY0FBYztBQUFBLEVBQ2Q7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLGVBQWUsQ0FBQyxVQUFVO0FBQUE7QUFBQSxFQUUxQixVQUFVO0FBQUEsSUFDUixJQUFJO0FBQUEsSUFDSixrQkFBa0I7QUFBQSxJQUNsQixTQUFTO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUEsSUFDWCxhQUFhO0FBQUEsSUFDYixhQUFhO0FBQUEsSUFDYixPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsSUFDQSxzQkFBc0I7QUFBQSxNQUNwQjtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsS0FBSztBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsY0FBYyxDQUFDLCtDQUFnRDtBQUFBLElBQy9ELGdCQUFnQjtBQUFBLE1BQ2Q7QUFBQSxRQUNFLFlBQVk7QUFBQSxRQUNaLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxVQUNQLFdBQVc7QUFBQSxVQUNYLFlBQVk7QUFBQSxZQUNWLFlBQVk7QUFBQSxZQUNaLGVBQWUsS0FBSyxLQUFLLEtBQUs7QUFBQTtBQUFBLFVBQ2hDO0FBQUEsVUFDQSxtQkFBbUI7QUFBQSxZQUNqQixVQUFVLENBQUMsR0FBRyxHQUFHO0FBQUEsVUFDbkI7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxpQ0FBaUM7QUFBQSxFQUNqQyxhQUFhO0FBQUEsRUFDYixZQUFZO0FBQUEsSUFDVixTQUFTO0FBQUEsRUFDWDtBQUNGOzs7QUZ6REEsU0FBUyxlQUFlOzs7QUdGMlUsSUFBTSxTQUFjO0FBQUEsRUFDclgsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBLEVBQ04sYUFBYTtBQUFBO0FBQUEsSUFFWCxRQUFRO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxXQUFXO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFDRjtBQUVPLElBQU0sU0FBYztBQUFBLEVBQ3pCLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQSxFQUNOLGFBQWE7QUFBQTtBQUFBLElBRVgsUUFBUTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsV0FBVztBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQ0Y7OztBSGpCQSxPQUFPLGlCQUFpQjtBQUd4QixJQUFPLGlCQUFRLFFBQVEsYUFBYTtBQUFBLEVBQ2xDLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLEtBQUs7QUFBQSxFQUNMLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQSxFQUNOO0FBQUEsRUFDQSxhQUFhO0FBQUEsSUFDWCxTQUFTLENBQUM7QUFBQTtBQUFBLElBRVYsTUFBTTtBQUFBLElBQ04sYUFBYTtBQUFBLE1BQ1gsRUFBRSxNQUFNLFVBQVUsTUFBTSxxQ0FBcUM7QUFBQSxJQUMvRDtBQUFBO0FBQUEsSUFFQSxXQUFXO0FBQUE7QUFBQSxJQUVYLFFBQVE7QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxNQUFNO0FBQUEsSUFDSixDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxtQkFBbUIsQ0FBQztBQUFBLEVBQ3BEO0FBQUE7QUFBQSxFQUVBLFdBQVc7QUFBQTtBQUFBLEVBRVgsWUFBWTtBQUFBO0FBQUEsRUFFWixVQUFVO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTCxhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLE1BQ1AsWUFBWTtBQUFBLFFBQ1YsTUFBTTtBQUFBLFFBQ04sWUFBWSxDQUFDLGVBQWU7QUFBQSxNQUM5QixDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUssQ0FDTDtBQUFBO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxVQUFVO0FBQUEsRUFDWjtBQUNGLENBQUMsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
