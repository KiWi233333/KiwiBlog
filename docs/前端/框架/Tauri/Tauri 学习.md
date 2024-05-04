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

## 打包遇到的问题

> [参考链接](https://github.com/tauri-apps/tauri/issues/7338)

1. 首先是msi中的wix安装的失败，网络上有很多答案
手动下载文件，并解压到C:\Users\你的用户名\AppData\Local\tauri\WixTools下，
下载地址 <https://github.com/wixtoolset/wix3/releases/download/wix3112rtm/wix311-binaries.zip>
下载地址<https://github.com/wixtoolset/wix3/releases/download/wix3112rtm/wix311-binaries.zip>
对应源代码地址为
<https://github.com/tauri-apps/tauri/blob/dev/tooling/bundler/src/bundle/windows/msi/wix.rs#L33>
<https://github.com/tauri-apps/tauri/blob/dev/tooling/bundler/src/bundle/windows/msi.rs#L28>

重点！！！
msi.rs中 WIX_REQUIRED_FILES 会检查这里的文件是否存在，不存在会删除文件重新下载。接下来的nsis也是同样的问题。

1. 第二！！！ nsis
手动下载文件nsis 解压到C:\Users\你的用户名\AppData\Local\tauri\NSIS
下载地址 <https://github.com/tauri-apps/binary-releases/releases/download/nsis-3/nsis-3.zip>
下载地址www.example.com
对应源码地址
<https://github.com/tauri-apps/tauri/blob/dev/tooling/bundler/src/bundle/windows/nsis.rs#L47>

注意！
NSIS这里检测的文件有两个插件是不包含再nsis-3.zip中的。

  "Plugins/x86-unicode/ApplicationID.dll",
  "Plugins/x86-unicode/nsis_tauri_utils.dll",
源码中给到了这两个文件的下载地址

const NSIS_APPLICATIONID_URL: &str = "<https://github.com/tauri-apps/binary-releases/releases/download/nsis-plugins-v0/NSIS-ApplicationID.zip>";
const NSIS_TAURI_UTILS: &str =
  "<https://github.com/tauri-apps/nsis-tauri-utils/releases/download/nsis_tauri_utils-v0.1.1/nsis_tauri_utils.dll>";
如果检测到没有这两个文件，就会删除NSIS文件夹，从头开始下载，这就是你@rechalow文件被删的原因
这两个文件按照上边给到的位置放进去就可以了。

到此为止，就可以了

简略的文件树
C:\Users\用户名\AppData\Local\tauri>
C：\Users\用户名\AppData\Local\tauri>
├─NSIS  公司简介
│ ├─Bin  联系我们
│ ├─Contrib  联系我们
│ ├─Docs  电子邮件
│ ├─Examples  简体中文
│ ├─Include  简体中文
│ ├─Plugins  电子邮件 *
│ │ ├─x86-ansi  电子邮件：<info@x86.com>
│ │ └─x86-unicode 下载的插件放这里
│ └─Stubs  中国─小作品
└─WixTools  公司简介

> 自动化ps脚本

```shell
mkdir temp
cd temp


curl  https://github.com/wixtoolset/wix3/releases/download/wix3112rtm/wix311-binaries.zip -LO 

Expand-Archive ./wix311-binaries.zip -DestinationPath ./WixTools

curl  https://github.com/tauri-apps/binary-releases/releases/download/nsis-3/nsis-3.zip -LO 

Expand-Archive ./nsis-3.zip -DestinationPath ./NSIS

mv .\NSIS\nsis-3.*\* .\NSIS
rmdir .\NSIS\nsis-3.*


curl https://github.com/tauri-apps/binary-releases/releases/download/nsis-plugins-v0/NSIS-ApplicationID.zip -LO

Expand-Archive .\NSIS-ApplicationID.zip -DestinationPath .\NSIS-ApplicationID

mv .\NSIS-ApplicationID\Release\* .\NSIS\Plugins\x86-unicode

curl https://github.com/tauri-apps/nsis-tauri-utils/releases/download/nsis_tauri_utils-v0.1.1/nsis_tauri_utils.dll -LO

mv .\nsis_tauri_utils.dll .\NSIS\Plugins\x86-unicode

mv .\NSIS ~\AppData\Local\tauri\NSIS
mv .\WixTools ~\AppData\Local\tauri\WixTools

echo "rm temp dir"

rm -r .\NSIS-ApplicationID
rm .\nsis-3.zip
rm .\NSIS-ApplicationID.zip
rm .\wix311-binaries.zip
rm .\temp

echo "done"
```

3. 打包应用运行出现终端？

```rust

#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

fn main() {
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("failed to run app");
}

```
