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
  markdown: {},
  // vite
  vite: {
    plugins: [
      AutoSidebar({
        path: "/docs",
        ignoreList: ["/docs/.vitepress/**"]
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lLWNvbmZpZy9jb25zdGFudC50cyIsICJkb2NzLy52aXRlcHJlc3MvdGhlbWUtY29uZmlnL3B3YS50cyIsICJkb2NzLy52aXRlcHJlc3MvdGhlbWUtY29uZmlnL2xhbmcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxMzI5NlxcXFxEZXNrdG9wXFxcXGJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxMzI5NlxcXFxEZXNrdG9wXFxcXGJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzEzMjk2L0Rlc2t0b3AvYmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcbmltcG9ydCB7IHB3YUNvbmZpZyB9IGZyb20gJy4vdGhlbWUtY29uZmlnL3B3YSdcbmltcG9ydCB7IHdpdGhQd2EgfSBmcm9tICdAdml0ZS1wd2Evdml0ZXByZXNzJ1xuaW1wb3J0IHsgYXBwTGFuZywgYXBwTmFtZSB9IGZyb20gJy4vdGhlbWUtY29uZmlnL2NvbnN0YW50J1xuaW1wb3J0IHsgbGFuZ0NOLCBsYW5nRU4gfSBmcm9tICcuL3RoZW1lLWNvbmZpZy9sYW5nJztcbmltcG9ydCBBdXRvU2lkZWJhciBmcm9tICd2aXRlLXBsdWdpbi12aXRlcHJlc3MtYXV0by1zaWRlYmFyJztcblxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgd2l0aFB3YShkZWZpbmVDb25maWcoe1xuICB0aXRsZTogYXBwTmFtZSxcbiAgZGVzY3JpcHRpb246IFwiS2l3aTIzMzMnIGJsb2dcdUQ4M0NcdURGODlcdUZGMDFcIixcbiAgbGFuZzogYXBwTGFuZyxcbiAgcHdhOiBwd2FDb25maWcsXG4gIGxvY2FsZXM6IHtcbiAgICByb290OiBsYW5nQ04sXG4gICAgZW46IGxhbmdFTlxuICB9LFxuICB0aGVtZUNvbmZpZzoge1xuICAgIHNpZGViYXI6IHt9LFxuICAgIC8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS1jb25maWdcbiAgICBsb2dvOiBcIlwiLFxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0tpV2kyMzMzMzMvYmxvZycgfVxuICAgIF0sXG4gICAgLy8gaGVhZGVyXHU2ODA3XHU5ODk4XG4gICAgc2l0ZVRpdGxlOiBmYWxzZSxcbiAgICAvL1x1NjcyQ1x1NTczMFx1NjQxQ1x1N0QyMlxuICAgIHNlYXJjaDoge1xuICAgICAgcHJvdmlkZXI6ICdsb2NhbCdcbiAgICB9LFxuICB9LFxuICAvL2Zhdlx1NTZGRVx1NjgwN1xuICBoZWFkOiBbXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9raXdpX3N0cm9uZy5zdmcnIH1dLFxuICBdLFxuICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvemgvcmVmZXJlbmNlL3NpdGUtY29uZmlnI21ldGFjaHVua1xuICBtZXRhQ2h1bms6IHRydWUsXG4gIC8vIFx1NTkxQ1x1OTVGNFx1NkEyMVx1NUYwRiBcdTU5MTZcdTg5QzJcbiAgYXBwZWFyYW5jZTogXCJkYXJrXCIsXG4gIC8vIG1hcmtkb3duXG4gIG1hcmtkb3duOiB7XG4gIH0sXG4gIC8vIHZpdGVcbiAgdml0ZToge1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIEF1dG9TaWRlYmFyKHtcbiAgICAgICAgcGF0aDogXCIvZG9jc1wiLFxuICAgICAgICBpZ25vcmVMaXN0OiBbJy9kb2NzLy52aXRlcHJlc3MvKionXVxuICAgICAgfSlcbiAgICBdXG4gIH0sXG4gIHZ1ZToge1xuICB9LFxuICAvLyBcdTdBRDlcdTcwQjlcdTU3MzBcdTU2RkVcbiAgc2l0ZW1hcDoge1xuICAgIGhvc3RuYW1lOiAnaHR0cHM6Ly9ibG9nLmtpd2kyMzMudG9wJ1xuICB9LFxufSkpIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxMzI5NlxcXFxEZXNrdG9wXFxcXGJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lLWNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMTMyOTZcXFxcRGVza3RvcFxcXFxibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZS1jb25maWdcXFxcY29uc3RhbnQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzEzMjk2L0Rlc2t0b3AvYmxvZy9kb2NzLy52aXRlcHJlc3MvdGhlbWUtY29uZmlnL2NvbnN0YW50LnRzXCI7ZXhwb3J0IGNvbnN0IGFwcERlc2NyaXB0aW9uID0gXCJBIEtpd2kyMzMzIFx1NzY4NFx1NEUyQVx1NEVCQVx1NTM1QVx1NUJBMiB8IFNlbGYgQmxvZ1wiXHJcbmV4cG9ydCBjb25zdCBhcHBOYW1lID0gXCJLaXdpMjMzM1wiXHJcbmV4cG9ydCBjb25zdCBhcHBMYW5nID0gXCJ6aC1DTlwiIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxMzI5NlxcXFxEZXNrdG9wXFxcXGJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lLWNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMTMyOTZcXFxcRGVza3RvcFxcXFxibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZS1jb25maWdcXFxccHdhLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy8xMzI5Ni9EZXNrdG9wL2Jsb2cvZG9jcy8udml0ZXByZXNzL3RoZW1lLWNvbmZpZy9wd2EudHNcIjtcclxuLy8gaHR0cHM6Ly92aXRlLXB3YS1vcmcubmV0bGlmeS5hcHAvZnJhbWV3b3Jrcy9udXh0XHJcbmltcG9ydCB7IGFwcERlc2NyaXB0aW9uLCBhcHBOYW1lIH0gZnJvbSBcIi4vY29uc3RhbnRcIjtcclxuXHJcbi8vIGh0dHBzOi8vd3d3LmppYW5zaHUuY29tL3AvMGEwN2JkNTI4ZTA4XHJcbmNvbnN0IHNjb3BlID0gXCIvXCI7XHJcbmV4cG9ydCBjb25zdCBwd2FDb25maWc6IGFueSA9IHtcclxuICByZWdpc3RlclR5cGU6IFwiYXV0b1VwZGF0ZVwiLFxyXG4gIHNjb3BlLFxyXG4gIGJhc2U6IHNjb3BlLFxyXG4gIGluY2x1ZGVBc3NldHM6IFtcImxvZ28ucG5nXCJdLFxyXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL3poLUNOL2RvY3MvV2ViL01hbmlmZXN0I2xhbmdcclxuICBtYW5pZmVzdDoge1xyXG4gICAgaWQ6IHNjb3BlLFxyXG4gICAgYmFja2dyb3VuZF9jb2xvcjogXCIjZmZmXCIsXHJcbiAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcclxuICAgIG5hbWU6IGFwcE5hbWUsXHJcbiAgICBzaG9ydF9uYW1lOiBhcHBOYW1lLFxyXG4gICAgc3RhcnRfdXJsOiBzY29wZSxcclxuICAgIGRlc2NyaXB0aW9uOiBhcHBEZXNjcmlwdGlvbixcclxuICAgIHRoZW1lX2NvbG9yOiBcIiNmZmZcIixcclxuICAgIGljb25zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6IFwiL2xvZ28ucG5nXCIsXHJcbiAgICAgICAgc2l6ZXM6IFwiMjAweDIwMFwiLFxyXG4gICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgcmVsYXRlZF9hcHBsaWNhdGlvbnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBsYXRmb3JtOiBcInBsYXlcIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWtpd2libG9nLmhhY2tlcndlYlwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHdvcmtib3g6IHtcclxuICAgIGdsb2JQYXR0ZXJuczogW1wiKipcXC8qLntqcyxjc3MsaHRtbCxwbmcsanBnLHN2Zyx3b2ZmLHdvZmYyLHR0Zn1cIl0sXHJcbiAgICBydW50aW1lQ2FjaGluZzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdXJsUGF0dGVybjogXCIvXihodHRwc3xodHRwKTovLyoua2l3aTIzMzMudG9wL2ZvbnQvKiAvaVwiLFxyXG4gICAgICAgIGhhbmRsZXI6IFwiQ2FjaGVGaXJzdFwiLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGNhY2hlTmFtZTogXCJqaXd1cXVhbi1mb250cy1jYWNoZVwiLFxyXG4gICAgICAgICAgZXhwaXJhdGlvbjoge1xyXG4gICAgICAgICAgICBtYXhFbnRyaWVzOiAxMCxcclxuICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogMzEsIC8vIDw9PSAzNjUgZGF5c1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNhY2hlYWJsZVJlc3BvbnNlOiB7XHJcbiAgICAgICAgICAgIHN0YXR1c2VzOiBbMCwgMjAwXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICByZWdpc3RlcldlYk1hbmlmZXN0SW5Sb3V0ZVJ1bGVzOiB0cnVlLFxyXG4gIHdyaXRlUGx1Z2luOiB0cnVlLFxyXG4gIGRldk9wdGlvbnM6IHtcclxuICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbn07XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMTMyOTZcXFxcRGVza3RvcFxcXFxibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZS1jb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDEzMjk2XFxcXERlc2t0b3BcXFxcYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWUtY29uZmlnXFxcXGxhbmcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzEzMjk2L0Rlc2t0b3AvYmxvZy9kb2NzLy52aXRlcHJlc3MvdGhlbWUtY29uZmlnL2xhbmcudHNcIjtleHBvcnQgY29uc3QgbGFuZ0NOOiBhbnkgPSB7XHJcbiAgbGFiZWw6ICdcdTdCODBcdTRGNTNcdTRFMkRcdTY1ODcnLFxyXG4gIGxhbmc6ICd6bicsXHJcbiAgdGhlbWVDb25maWc6IHtcclxuICAgIC8vXHU5ODc1XHU4MTFBXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgbWVzc2FnZTogJ1JlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4nLFxyXG4gICAgICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgXHUwMEE5IDIwMjQgXHU1OTA3XHU2ODQ4XHU1M0Y3XHVGRjFBPGEgaHJlZj1cImh0dHBzOi8vYmVpYW4ubWlpdC5nb3YuY24vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHU0RUFDKioqKlx1NTNGNzwvYT4nLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsYW5nRU46IGFueSA9IHtcclxuICBsYWJlbDogJ0VuZ2xpc2gnLFxyXG4gIGxhbmc6ICdlbicsXHJcbiAgdGhlbWVDb25maWc6IHtcclxuICAgIC8vXHU5ODc1XHU4MTFBXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgbWVzc2FnZTogJ1JlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4nLFxyXG4gICAgICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgXHUwMEE5IDIwMjQgXHU1OTA3XHU2ODQ4XHU1M0Y3XHVGRjFBPGEgaHJlZj1cImh0dHBzOi8vYmVpYW4ubWlpdC5nb3YuY24vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHU0RUFDKioqKlx1NTNGNzwvYT4nLFxyXG4gICAgfSxcclxuICB9XHJcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlULFNBQVMsb0JBQW9COzs7QUNBcUIsSUFBTSxpQkFBaUI7QUFDM1gsSUFBTSxVQUFVO0FBQ2hCLElBQU0sVUFBVTs7O0FDR3ZCLElBQU0sUUFBUTtBQUNQLElBQU0sWUFBaUI7QUFBQSxFQUM1QixjQUFjO0FBQUEsRUFDZDtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sZUFBZSxDQUFDLFVBQVU7QUFBQTtBQUFBLEVBRTFCLFVBQVU7QUFBQSxJQUNSLElBQUk7QUFBQSxJQUNKLGtCQUFrQjtBQUFBLElBQ2xCLFNBQVM7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLFdBQVc7QUFBQSxJQUNYLGFBQWE7QUFBQSxJQUNiLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxJQUNBLHNCQUFzQjtBQUFBLE1BQ3BCO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxjQUFjLENBQUMsK0NBQWdEO0FBQUEsSUFDL0QsZ0JBQWdCO0FBQUEsTUFDZDtBQUFBLFFBQ0UsWUFBWTtBQUFBLFFBQ1osU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFVBQ1AsV0FBVztBQUFBLFVBQ1gsWUFBWTtBQUFBLFlBQ1YsWUFBWTtBQUFBLFlBQ1osZUFBZSxLQUFLLEtBQUssS0FBSztBQUFBO0FBQUEsVUFDaEM7QUFBQSxVQUNBLG1CQUFtQjtBQUFBLFlBQ2pCLFVBQVUsQ0FBQyxHQUFHLEdBQUc7QUFBQSxVQUNuQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGlDQUFpQztBQUFBLEVBQ2pDLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxJQUNWLFNBQVM7QUFBQSxFQUNYO0FBQ0Y7OztBRnpEQSxTQUFTLGVBQWU7OztBR0YyVSxJQUFNLFNBQWM7QUFBQSxFQUNyWCxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixhQUFhO0FBQUE7QUFBQSxJQUVYLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxJQUNiO0FBQUEsRUFDRjtBQUNGO0FBRU8sSUFBTSxTQUFjO0FBQUEsRUFDekIsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBLEVBQ04sYUFBYTtBQUFBO0FBQUEsSUFFWCxRQUFRO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxXQUFXO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFDRjs7O0FIakJBLE9BQU8saUJBQWlCO0FBR3hCLElBQU8saUJBQVEsUUFBUSxhQUFhO0FBQUEsRUFDbEMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sS0FBSztBQUFBLEVBQ0wsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBLEVBQ047QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLFNBQVMsQ0FBQztBQUFBO0FBQUEsSUFFVixNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsTUFDWCxFQUFFLE1BQU0sVUFBVSxNQUFNLHFDQUFxQztBQUFBLElBQy9EO0FBQUE7QUFBQSxJQUVBLFdBQVc7QUFBQTtBQUFBLElBRVgsUUFBUTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBLE1BQU07QUFBQSxJQUNKLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLG1CQUFtQixDQUFDO0FBQUEsRUFDcEQ7QUFBQTtBQUFBLEVBRUEsV0FBVztBQUFBO0FBQUEsRUFFWCxZQUFZO0FBQUE7QUFBQSxFQUVaLFVBQVUsQ0FDVjtBQUFBO0FBQUEsRUFFQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsTUFDUCxZQUFZO0FBQUEsUUFDVixNQUFNO0FBQUEsUUFDTixZQUFZLENBQUMscUJBQXFCO0FBQUEsTUFDcEMsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLLENBQ0w7QUFBQTtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsVUFBVTtBQUFBLEVBQ1o7QUFDRixDQUFDLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
