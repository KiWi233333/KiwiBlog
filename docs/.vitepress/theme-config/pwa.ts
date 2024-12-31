
// https://vite-pwa-org.netlify.app/frameworks/nuxt
import { appDescription, appPWAName } from "./constant";

// https://www.jianshu.com/p/0a07bd528e08
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
    name: appPWAName,
    short_name: appPWAName,
    start_url: scope,
    description: appDescription,
    theme_color: "#fff",
    icons: [
      {
        src: "/logo.png",
        sizes: "256x256",
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
    maximumFileSizeToCacheInBytes: 10000000,
    runtimeCaching: [
      {
        urlPattern: "/^(https|http)://*.kiwi2333.top/font/* /i",
        handler: "CacheFirst",
        options: {
          cacheName: "jiwu-fonts-cache",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 1, // <== 1 days
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
    enabled: false,
  },
};

