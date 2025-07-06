---
layout: doc
---

# JiwuChat 项目亮点

## 📡 网络请求优化

### 1. **消息队列系统**

```typescript
class MessageQueueManager {
  // 响应式队列管理
  private queue = reactive<Record<string | number, MessageQueueItem>>({});

  // 预构建消息对象，减少渲染延迟
  msgBuilder = (formData: ChatMessageDTO, tempId: any, time: number): ChatMessageVO => {
    return {
      fromUser: {
        /* ... */
      },
      message: {
        /* ... */
      },
    } as ChatMessageVO<any>;
  };
}
```

### 2. **SSE 流式请求优化**

```typescript
interface SseRequestOptions {
  processData?: (text: string) => string; // 数据处理函数
  onSuccess?: (data: string) => void; // 成功回调
  onError?: (error: any) => void; // 错误回调
  onComplete?: () => void; // 完成回调
}
```

## 🎨 UI 渲染优化

### 1. **硬件加速管理**

```typescript
export function useHardwareAcceleration() {
  const apply = () => {
    const body = document.body;
    const className = "hardware-acceleration-enabled";

    if (setting.settingPage.animation.hardwareAcceleration) {
      body.classList.add(className);
    } else {
      body.classList.remove(className);
    }
  };
}
```

### 2. **动画性能控制**

```typescript
// 设置页面 - 动画控制
animation: {
  pageTransition: true,        // 页面切换动画
  listTransition: true,        // 列表过渡动画
  dialogTransition: true,      // 弹窗进入动画
  messageTransition: true,     // 消息气泡动画
  themeTransition: true,       // 主题切换动画
  hardwareAcceleration: false, // 硬件加速
}
```

### 3. **懒加载组件**

```vue
<!-- Lazy.vue -->
<template>
  <div
    v-if="!viewShow"
    ref="loadMoreRef">
    <slot name="load">
      <div class="animate-fade-in">加载中...</div>
    </slot>
  </div>
  <div
    v-else
    class="animate-fade-in">
    <slot name="done" />
  </div>
</template>
```

## 🔍 文件处理优化

### 1. **智能图片压缩**

```typescript
// 动态计算压缩质量
function calculateQuality(fileSize: number, limit: number): number {
  const ratio = fileSize / limit;

  if (ratio <= 0.8) {
    return 0.95; // 高质量
  } else if (ratio <= 1) {
    // 线性插值：当文件大小从80%增长到100%时，质量从0.8降到0.4
    return Math.max(0.4, 0.8 - (ratio - 0.8) * 2);
  } else if (ratio <= 1.5) {
    return Math.max(0.2, 0.4 - (ratio - 1) * 0.4);
  } else {
    return 0.1; // 最低质量
  }
}
```

### 2. **文件大小格式化**

```typescript
export function formatFileSize(size: number): string {
  if (size < 1024) return `${size} B`;
  else if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
  else if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  else return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}
```

## 🎛️ 状态管理优化

### 1. **响应式数据优化**

```typescript
// 使用 computed 进行数据派生
const filteredUserAtOptions = computed(() => {
  if (!atFilterKeyword.value) return userAtOptions.value;
  const keyword = atFilterKeyword.value.toLowerCase();
  return userAtOptions.value.filter(user => user?.nickName?.toLowerCase().includes(keyword));
});
```

### 2. **防抖处理**

```typescript
// 防抖输入处理，减少频繁的输入检测
const debouncedHandleInput = useDebounceFn(handleInput, 60);

// 防抖成员变更监听
watchDebounced(
  () => ws.wsMsgList.memberMsg.length,
  len => {
    if (!len) return;
    loadUser();
  },
  { debounce: 1000 }
);
```

## 📊 性能监控与优化

### 1. **版本检查优化**

```typescript
async function checkUpdates(checkLog = false) {
  if (!checkLog && appUploader.value.ignoreVersion.includes(update.version)) {
    return false; // 忽略已标记的版本
  }
  // 检查更新逻辑...
}
```

### 2. **下载进度优化**

```typescript
await update.download(e => {
  switch (e.event) {
    case "Progress":
      appUploader.value.downloaded += e.data.chunkLength || 0;
      appUploader.value.downloadedText = `${(downloaded / 1024 / 1024).toFixed(2)}MB / ${(
        contentLength /
        1024 /
        1024
      ).toFixed(2)}MB`;
      break;
  }
});
```

## 🚀 构建与打包优化

### 1. **智能代码分割**

```typescript
// nuxt.config.ts - 精细化的代码分割策略
manualChunks(id) {
  if (id.includes("node_modules")) {
    // Vue 核心生态系统
    if (id.match(/(vue|@vue|pinia|nuxt)/)) {
      return "vue-ecosystem";
    }
    // Element Plus 及其图标
    if (id.includes("element-plus") || id.includes("@element-plus")) {
      return "element-plus";
    }
    // VueUse 工具库
    if (id.match(/@vueuse\//)) {
      return "vueuse";
    }
    // 图标相关
    if (id.match(/(@iconify|@iconify-json)\//)) {
      return "icons";
    }
  }
}
```

### 2. **构建配置优化**

```typescript
build: {
  chunkSizeWarningLimit: 1000, // chunk 大小警告的限制(kb)
  cssCodeSplit: true, // CSS 代码拆分为单独的文件
  minify: "terser", // 使用 terser 进行代码压缩
}
```

## 🎯 缓存策略优化

### 1. **多层缓存系统**

```typescript
// DOM 缓存管理器
class DomCacheManager {
  private cache = new Map<string, Element[]>();
  private cacheTimeout = 5000;

  get(key: string, selector: string, parent: HTMLElement | null): Element[] {
    if (this.cache.has(key)) {
      return this.cache.get(key)!;
    }
    const elements = Array.from(parent.querySelectorAll(selector));
    this.cache.set(key, elements);
    this.scheduleClear();
    return elements;
  }
}
```

### 2. **智能用户列表缓存**

```typescript
const CACHE_TIME = 5 * 60 * 1000; // 5分钟缓存时间

async function loadUser() {
  const cache = chat.atMemberRoomMap[roomId];
  // 如果缓存存在且未过期,直接使用缓存
  if (cache && Date.now() - cache.time < CACHE_TIME) {
    userOptions.value = cache.list;
    return;
  }
  // 重新请求数据...
}
```

### 3. **翻译缓存优化**

```typescript
// 检查缓存大小，如果超过 200 条删除最早的 50 条
function checkTranslationCacheSize() {
  const keyRaws = Object.keys(translationCache.value);
  if (keyRaws.length > 200) {
    const keys = keyRaws.sort((a, b) => {
      return translationCache.value[a].startTime - translationCache.value[b].startTime;
    });
    for (let i = 0; i < 50; i++) {
      delete translationCache.value[keys[i]];
    }
  }
}
```

## ⚡ 虚拟化与性能优化

### 1. **虚拟滚动列表**

```vue
<!-- VirtualScrollList.vue -->
<template>
  <div
    :style="{ height: containerHeight + 'px' }"
    @scroll="onScroll">
    <div :style="{ height: totalHeight + 'px', position: 'relative' }">
      <div
        v-for="item in visibleItems"
        :key="item.index"
        :style="{
          position: 'absolute',
          top: item.top + 'px',
          width: '100%',
        }">
        <slot
          :item="item.data"
          :index="item.index" />
      </div>
    </div>
  </div>
</template>
```

### 2. **自动增量加载优化**

```typescript
// 使用被动事件监听选项优化触摸事件性能
const passiveOptions = { passive: false };

// 防抖处理输入事件
const debouncedHandleInput = useDebounceFn(handleInput, 60);
```

## 🔄 内存管理优化

### 1. **智能对象 URL 清理**

```typescript
// 防止内存泄漏
function insertAtRange(file: File | string, alt: string, range: Range) {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(objectUrl); // 及时清理
      resolve();
    };
  });
}
```

### 2. **定时器清理机制**

```typescript
onUnmounted(() => {
  if (timer) {
    cancelAnimationFrame(timer);
    timer = 0;
  }
});

// 定时清理缓存
private scheduleClear() {
  if (this.cacheClearTimer) clearTimeout(this.cacheClearTimer);
  this.cacheClearTimer = setTimeout(() => this.clear(), this.cacheTimeout);
}
```

## 📱 跨平台优化

### 1. **平台适配加载**

```html
<!-- spa-loading-template.html -->
<script>
  const osType = window.localStorage.getItem("osType");
  if (["windows", "macos", "linux"].includes(osType)) {
    document.documentElement.classList.add("desktop");
  } else if (["ios", "android"].includes(osType)) {
    document.documentElement.classList.add("mobile");
  } else {
    document.documentElement.classList.add("web");
  }
</script>
```

### 2. **环境检测优化**

```typescript
// 环境检测
const isDesktop = computed(() => ["windows", "linux", "macos"].includes(osType.value));
const isMobile = computed(() => ["android", "ios"].includes(osType.value));
```

## 🏆 性能优化总结

这个项目展现了以下几个方面的出色性能优化：

1. **构建时优化**：智能代码分割、Terser 压缩、CSS 分离
2. **运行时优化**：多层缓存、虚拟滚动、内存管理
3. **网络优化**：消息队列、SSE 流式处理、防抖节流
4. **UI 优化**：硬件加速、懒加载、动画控制
5. **文件优化**：智能压缩、格式化处理
6. **状态优化**：响应式计算、防抖处理
7. **跨平台优化**：环境适配、平台检测

这些优化措施使得 JiwuChat 能够在各种设备上保持流畅的用户体验，体现了现代前端应用的最佳实践。

找到具有 1 个许可证类型的类似代码
