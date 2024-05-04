# Tauri 学习

## 基本自定义配置

```json
{
  "build": {
    "beforeBuildCommand": "pnpm run build",
    "beforeDevCommand": "pnpm run dev",
    "devPath": "http://localhost:3000",
    "distDir": "../.output/public"
  },
  "package": {
    "productName": "jiwu-mall-chat",
    "version": "1.0.0"
  },
  "tauri": {
    "allowlist": {
      "all": false,
      "window": {
        "all": false,
        "close": true,
        "hide": true,
        "show": true,
        "maximize": true,
        "minimize": true,
        "unmaximize": true,
        "unminimize": true,
        "startDragging": true
      }
    },
    "bundle": {
      "active": true,
      "category": "DeveloperTool",
      "copyright": "",
      "deb": {
        "depends": []
      },
      "externalBin": [],
      "icon": ["icons/32x32.png", "icons/128x128.png", "icons/128x128@2x.png", "icons/icon.icns", "icons/icon.ico"],
      "identifier": "com.tauri.dev",
      "longDescription": "",
      "macOS": {
        "entitlements": null,
        "exceptionDomain": "",
        "frameworks": [],
        "providerShortName": null,
        "signingIdentity": null
      },
      "resources": [],
      "shortDescription": "",
      "targets": "all",
      "windows": {
        "certificateThumbprint": null,
        "digestAlgorithm": "sha256",
        "timestampUrl": ""
      }
    },
    "security": {
      "csp": null
    },
    "updater": {
      "active": false
    },
    "windows": [
      {
        "label": "main",
        "height": 820,
        "resizable": true,
        "title": "极物聊天",
        "width": 1290,
        "center": true,
        "minWidth": 345,
        "minHeight": 724,
        "focus": true,
        "decorations": false,
        "hiddenTitle": true,
        "transparent": true
      }
    ],
    "systemTray": {
      "title": "极物聊天",
      "iconPath": "../public/logo.png",
      "iconAsTemplate": true
    }
  }
}

```

### 创建自定义标题栏（header、tabbar）
>
> [文档](https://tauri.app/zh-cn/v1/guides/features/window-customization)

- 示例：

```vue
<script lang="ts" setup>
import { appWindow } from "@tauri-apps/api/window";

const user = useUserStore();
function onToggleWindow(type: "min" | "max" | "close") {
  if (type === "min")
    appWindow.minimize();
  if (type === "max")
    appWindow.toggleMaximize();
  if (type === "close") {
    ElMessageBox.confirm("是否关闭应用？", {
      title: "提示",
      confirmButtonText: "关闭",
      confirmButtonClass: "btn-danger transition-200",
      center: true,
      cancelButtonText: "取消",
      lockScroll: false,
      callback: async (action: string) => {
        if (action === "confirm")
          appWindow.close();
      },
    });
  }
}
</script>

<template>
  <!-- 菜单栏 -->
  <menu class="nav group sticky left-0 top-0 h-2rem flex-row-bt-c select-none gap-4 border-0 border-b-1px rounded-b-0 px-4 border-default bg-color">
    <NuxtLink to="/" class="left flex-row-c-c gap-3 tracking-0.2em">
      <CardElImage src="./logo.png" class="h-1.6rem w-1.6rem" />
      <strong>极物圈</strong>
    </NuxtLink>
    <!-- 拖拽区域 -->
    <div style=" flex: 1;height: 100%;" data-tauri-drag-region />
    <div class="flex flex-shrink-0 items-center gap-4">
      <div class="flex items-center gap-4 rounded-2rem px-2 py-1 g-hover-op-40 border-default v-card">
        <!-- 主题 -->
        <BtnTheme class="btn-primary" />
        <!-- 退出登录 -->
        <i
          circle plain
          class="cursor-pointer btn-danger"
          transition="all cubic-bezier(0.61, 0.225, 0.195, 1.3)"
          i-solar:logout-3-broken
          p-2 @click="user.exitLogin()"
        />
      </div>
      <div class="flex items-center gap-3 border-0 border-l-1px pl-3 border-default">
        <i i-carbon:subtract p-3 btn-primary @click="onToggleWindow('min')" />
        <i
          i-tabler:maximize
          class="text-0.9rem"
          btn-primary @click="onToggleWindow('max')"
        />
        <i i-carbon:close p-3 btn-primary @click="onToggleWindow('close')" />
      </div>
    </div>
  </menu>
</template> 
```

自定义拖拽区设置data-tauri-drag-region属性，即可实现自定义元素拖动功能。
