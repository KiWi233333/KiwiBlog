# Tauri 实现文件管理器

## 概况 🎈

- 使用 fs, shell, dialog, upload 模块 实现文件管理器功能

- 支持下载文件，打开文件/目录，选择文件/目录，下载文件夹路径更改 等功能

## 效果 🎉

- 下载文件

![效果1](<assets/Tauri 实现文件管理器/image-1.png>)

- 打开文件/目录

![效果2](<assets/Tauri 实现文件管理器/image-2.png>)

## 不同模块作用 🤔

### **fs模块**，部分需要自定义方法，满足自定义路径的需求

  1. 使用 fs 模块 `exists()` 判断文件或目录是否存在
  2. 使用 fs 模块 `mkdir()` 创建目录
  3. 使用 fs 模块 `remove()` 删除文件

- **shell模块**，打开文件或目录

  1. 使用 shell 模块 `open()` 打开文件（默认程序打开）或打开目录（系统文件管理器）

```typescript
import { open as openFile } from "@tauri-apps/plugin-shell";

// 定制 fs 实现任意路径
export const existsFile = (path: string) => invoke("exist_file", { path });
export const removeFile = (path: string) => invoke("remove_file", { path });

// 打开下载文件夹
async function openFileFolder() {
  if (!await existsFile(setting.appDataDownloadDirUrl)) return;
  openFile(setting.appDataDownloadDirUrl);
}
```

- **dialog模块**，选择文件或目录，返回路径

  1. 使用 dialog 模块 `open()` 选择文件，返回路径

```typescript
import { open as openDialog } from "@tauri-apps/plugin-dialog";

// 更改下载文件夹路径
async function changeDownloadDir() {
  const path = await openDialog({
    multiple: false,
    directory: true,
  });
  if (!path) return;
  if (!await existsFile(path)) {
    ElMessage.error("目标路径不存在！");
    return;
  }
  setting.appDataDownloadDirUrl = path;
  ElMessage.success("下载路径已更改！");
}
```

## 遇到的问题 🤯

### 1. fs 自定义访问文件系统的权限问题?

> 参考：[tauri-tutorial 讨论](https://github.com/lencx/tauri-tutorial/discussions/13)

#### 需求

- 原本只允许读写配置的文件，不允许其他未定义文件夹下读写文件

- 概况：虽然 FS API 提供了文件读写能力，但是却无法获取到元数据（如创建，修改时间等）。当 API 不支持时，我们就需要编写 Tauri 插件来对其进行扩展。官方提供了一个名为 `tauri-plugin-fs-extra` 的插件，但是截止到写文章时，并不能使用任何一种方式安装到本地，所以需要开发者手动将源代码复制到本地。

- 非权限列表的文件目录，无权限
  ![图片错误](assets/Tauri 实现文件管理器/image.png)

#### 解决方案

- Step 1:

```rust
// main.rs | lib.rs (tauri2.0)
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        // ✅ 在这里传递自定义命令
        .invoke_handler(tauri::generate_handler![my_read_file])
        .run(context)
        .expect("error while running OhMyBox application");
}

#[tauri::command]
async fn my_read_file(path: std::path::PathBuf) -> String {
    // 读取文件内容，以文本字符串形式返回
    std::fs::read_to_string(path).unwrap()
}
```

- Step 2:

```typescript
// 前端调用
import { invoke } from '@tauri-apps/api';

async function readFileContent() {
  // 注: `/etc/hosts` 为自定义路径，而非基本目录之一
  const content = await invoke('my_read_file', { path: '/etc/hosts' });
  console.log(content);
}

readFileContent();
```

### 2. 如何实现文件下载功能？

- 使用`@tauri-apps/plugin-upload`、`streamSaver（web端兼容）` 模块实现文件下载功能

```typescript

import { download } from "@tauri-apps/plugin-upload";
import streamSaver from "streamsaver";
import { mkdir } from "@tauri-apps/plugin-fs";

/**
 * https://segmentfault.com/a/1190000044342886
 * 下载文件
 * @param url 下载地址
 * @param fileName 下载后的文件名
 * @param options 下载选项
 * @param options.targetPath 下载到指定目录
 * @param options.mimeType 文件类型
 * @param callback 下载进度回调函数
 * @returns 下载进度对象
 */
export async function downloadFile(url: string, fileName: string, options: {
  targetPath?: string
  mimeType?: string
} = {},
callback?: (progress: number) => void) {
  const { targetPath = "", mimeType = "" } = options;
  const setting = useSettingStore();
  const platformType = setting.appPlatform;
  if (["android", "ios", "web"].includes(platformType) || !platformType) {
    // 移动端使用 streamSaver 下载
    return downloadFileByStreamSaver(url, fileName, callback);
  }
  const dir = setting.appDataDownloadDirUrl;
  const existsDir = await existsFile(dir);
  if (!existsDir)
    mkdir(dir);
  // 文件下载
  setting.fileDownloadMap[url] = {
    url,
    fileName,
    localPath: targetPath || `${dir}\\${fileName}`,
    currentSize: 0,
    totalSize: 0,
    status: FileStatus.DOWNLOADING,
    mimeType,
    downloadTime: Date.now(),
    fromUid: "",
  };
  let currentSize = 0;
  try {
    await download(
      url,
      targetPath || `${dir}\\${fileName}`,
      ({ progress, total }) => {
        currentSize += progress;
        setting.fileDownProgressCallback(url, currentSize, total);
      },
      { "Content-Type": "application/octet-stream" } as any,
    );
    // 下载完成后，通知设置存储
    if (typeof callback === "function")
      callback(1);
  }
  catch (error) {
    console.warn(error);
    setting.fileDownloadMap[url]!.status = FileStatus.ERROR;
  }
}

/**
 * 下载文件 by streamSaver
 * @param url 下载地址
 * @param fileName 下载后的文件名
 * @param callback 下载进度回调函数
 * @returns 下载进度对象
 */
export function downloadFileByStreamSaver(url: string, fileName: string, callback?: (progress: number) => void) {
  const progress = ref(0);
  let writer: WritableStreamDefaultWriter<Uint8Array>;
  // 【步骤1】创建一个文件，该文件支持写入操作
  const fileStream = streamSaver.createWriteStream(fileName); // 这里传入的是下载后的文件名，这个名字可以自定义
  // 【步骤2】使用 fetch 方法访问文件的url，将内容一点点的放到 StreamSaver 创建的文件里
  fetch(url)
    .then((res) => {
      const stream = res.body;
      if (!stream)
        return;

      if (window.WritableStream && stream.pipeTo) {
        return stream.pipeTo(fileStream)
          .then(() => {
            if (typeof callback === "function")
              callback(1);
            progress.value = 1;
          });
      }
      // 【步骤3】监听文件内容是否读取完整，读取完就执行“保存并关闭文件”的操作。
      writer = fileStream.getWriter();
      const reader = stream.getReader();
      const pump: () => void = () => reader.read()
        .then(res => res.done
          ? writer.close()
          : writer.write(res.value).then(pump),
        );
      // 【步骤4】监听写入进度
      pump();
    });

  return {
    progress,
  };
}

```
