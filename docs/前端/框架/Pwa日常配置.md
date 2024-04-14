---
# https://vitepress.dev/reference/default-theme-home-page
layout: doc
title: "Pwa日常配置"
---

# PWA 配置初始化模板

```js
const scope = "/";
export const pwaConfig: any = {
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
        type: "image/png",
      },
    ],
    related_applications: [
      {
        platform: "play",
        url: "https://play.google.com/store/apps/details?id=kiwiblog.hackerweb",
      },
    ],
  },
  workbox: {
    globPatterns: ["**\/*.{js,css,html,png,jpg,svg,woff,woff2,ttf}"],
    runtimeCaching: [
      {
        urlPattern: "/^(https|http)://*.kiwi2333.top/font/* /i",
        handler: "CacheFirst",
        options: {
          cacheName: "jiwuquan-fonts-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 31, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  registerWebManifestInRouteRules: true,
  writePlugin: true,
  devOptions: {
    enabled: true,
  },
};

```
