---
# https://vitepress.dev/reference/default-theme-home-page
layout: doc
---

# TDKJ-前端开发实习面试

## 1. CSS 布局方式，行块元素类型

### CSS 布局方式

| 布局方式 | 特点                 | 适用场景                 |
| -------- | -------------------- | ------------------------ |
| 正常流   | 元素按文档顺序排列   | 简单的文档流布局         |
| Float    | 元素浮动到左侧或右侧 | 文字环绕、多列布局       |
| Position | 绝对/相对定位        | 精确定位、层级控制       |
| Flexbox  | 一维弹性布局         | 组件内部布局、居中对齐   |
| Grid     | 二维网格布局         | 复杂页面布局、响应式设计 |

### 行块元素类型

| 元素类型 | 行内元素            | 块级元素              |
| -------- | ------------------- | --------------------- |
| 排列方式 | 水平排列            | 垂直排列，独占一行    |
| 宽高设置 | 无效                | 可设置                |
| 内外边距 | 水平有效，垂直无效  | 四个方向都有效        |
| 常见元素 | span, a, img, input | div, p, h1-h6, ul, li |

## 2. 实现居中的方式

### 水平居中

```css
/* 行内元素 */
.parent {
  text-align: center;
}

/* 块级元素 */
.child {
  margin: 0 auto;
}

/* Flex */
.parent {
  display: flex;
  justify-content: center;
}
```

### 垂直居中

```css
/* Flex */
.parent {
  display: flex;
  align-items: center;
}

/* Grid */
.parent {
  display: grid;
  place-items: center;
}

/* 绝对定位 */
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

**Flex 父元素宽高要求：** 不需要固定宽高，但需要有内容撑起或设置最小高度才能看到垂直居中效果。

## 3. JiwuChat 项目通讯方式

JiwuChat 项目采用 **WebSocket** 进行实时通讯：

- 建立持久连接，实现双向通信
- 支持实时消息推送
- 心跳机制保持连接稳定
- 断线重连机制确保可靠性

## 4. Web Worker 应用场景

### 核心优势

- **避免主线程阻塞**：将耗时任务移至后台线程，保证 UI 流畅。
- **提升应用性能**：充分利用多核 CPU 进行并行计算。

### 具体应用场景

- **WebSocket 心跳维护**：在 Worker 中定时发送心跳包，不影响主线程交互。
- **复杂数据处理**：如大量消息的加解密、本地搜索索引构建等。
- **文件处理**：在后台进行大文件的分片上传或下载。
- **数据预取与缓存**：后台静默拉取数据，提升页面加载速度。

## 5. WebSocket 详解

### 特点对比

| 特性     | HTTP              | WebSocket    |
| -------- | ----------------- | ------------ |
| 连接方式 | 短连接            | 长连接       |
| 通信方向 | 单向（请求-响应） | 双向         |
| 协议头   | 每次请求都有      | 只在握手时有 |
| 实时性   | 需要轮询          | 真正实时     |

### 生命周期

```javascript
const ws = new WebSocket("wss://example.com");
ws.onopen = () => console.log("连接建立");
ws.onmessage = event => console.log("收到消息:", event.data);
ws.onerror = error => console.log("连接错误:", error);
ws.onclose = () => console.log("连接关闭");
```

## 6. 本地存储方式

| 存储方式       | 容量   | 生命周期         | 作用域     | 数据类型 |
| -------------- | ------ | ---------------- | ---------- | -------- |
| localStorage   | 5-10MB | 永久（手动清除） | 同源       | 字符串   |
| sessionStorage | 5-10MB | 会话结束         | 同源同窗口 | 字符串   |
| Cookie         | 4KB    | 可设置过期时间   | 可跨域     | 字符串   |
| IndexedDB      | 无限制 | 永久             | 同源       | 对象     |

## 7. 类型判断方法

### 简单类型判断

```javascript
typeof 123; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (特殊情况)
```

### 引用类型判断

```javascript
Object.prototype.toString.call([]); // "[object Array]"
Object.prototype.toString.call({}); // "[object Object]"
Object.prototype.toString.call(new Date()); // "[object Date]"
```

### 最佳实践

```javascript
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}
```

## 8. 数组常用方法

### 常用方法分类

| 类别     | 方法                               | 是否改变原数组 |
| -------- | ---------------------------------- | -------------- |
| 添加删除 | push, pop, shift, unshift, splice  | 是             |
| 查找     | indexOf, find, findIndex, includes | 否             |
| 遍历     | forEach, map, filter, reduce       | 否             |
| 排序     | sort, reverse                      | 是             |

### reduce 方法详解

```javascript
// 基本语法
array
  .reduce((accumulator, currentValue, currentIndex, array) => {
    // 返回新的累积值
  }, initialValue)

  [
    // 应用场景
    // 1. 求和
    (1, 2, 3, 4)
  ].reduce((sum, num) => sum + num, 0) // 10

  [
    // 2. 数组去重
    (1, 2, 2, 3)
  ].reduce((unique, item) => (unique.includes(item) ? unique : [...unique, item]), []);

// 3. 对象属性统计
users.reduce((count, user) => {
  count[user.age] = (count[user.age] || 0) + 1;
  return count;
}, {});
```

## 9. 闭包概念及应用

### 什么是闭包

闭包是指函数能够访问其外部作用域变量的特性，即使外部函数已经执行完毕。

### 应用场景

```javascript
// 1. 数据私有化
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

// 2. 模块模式
const module = (function () {
  let private = "私有变量";
  return {
    public: "公共变量",
    getPrivate: () => private,
  };
})();

// 3. 函数柯里化
function add(a) {
  return function (b) {
    return a + b;
  };
}
```

## 10. Promise 详解

### Promise 状态

| 状态      | 描述     | 可转换到              |
| --------- | -------- | --------------------- |
| pending   | 初始状态 | fulfilled 或 rejected |
| fulfilled | 成功状态 | 不可变                |
| rejected  | 失败状态 | 不可变                |

### 内部方法对比

| 方法                 | 作用                  | 返回值  | 特点           |
| -------------------- | --------------------- | ------- | -------------- |
| Promise.resolve()    | 创建成功的 Promise    | Promise | 立即 resolve   |
| Promise.reject()     | 创建失败的 Promise    | Promise | 立即 reject    |
| Promise.all()        | 所有 Promise 成功     | Promise | 一个失败则失败 |
| Promise.allSettled() | 等待所有 Promise 完成 | Promise | 返回所有结果   |
| Promise.race()       | 第一个完成的 Promise  | Promise | 竞态           |

## 11. 浏览器事件循环

### 执行顺序

1. **同步代码** → 立即执行
2. **微任务** (Promise.then, async/await) → 本轮循环结束前
3. **宏任务** (setTimeout, setInterval) → 下轮循环

```javascript
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);
// 输出: 1, 4, 3, 2
```

## 12. React Props 和 State

### 对比

| 特性     | Props          | State    |
| -------- | -------------- | -------- |
| 数据来源 | 父组件传递     | 组件内部 |
| 可变性   | 不可变         | 可变     |
| 更新方式 | 父组件重新渲染 | setState |

### setState 连续触发

```javascript
// 会被合并，只执行一次渲染
this.setState({ count: 1 });
this.setState({ count: 2 }); // 最终 count = 2

// 函数式更新，按顺序执行
this.setState(prev => ({ count: prev.count + 1 }));
this.setState(prev => ({ count: prev.count + 1 })); // count += 2
```

## 13. useEffect 简述

### 语法及应用

```javascript
// 1. 副作用执行
useEffect(() => {
  // 副作用逻辑
  return () => {
    // 清理函数
  };
}, [dependencies]); // 依赖数组

// 2. 不同依赖的行为
useEffect(() => {}, []); // 只在挂载时执行
useEffect(() => {}, [dep]); // dep变化时执行
useEffect(() => {}); // 每次渲染都执行
```

## 14. Vue watch vs React useEffect

| 特性     | Vue watch        | React useEffect |
| -------- | ---------------- | --------------- |
| 触发时机 | 数据变化时       | 渲染后          |
| 初始执行 | 可选 (immediate) | 默认执行        |
| 深度监听 | 支持 (deep)      | 需手动实现      |
| 清理机制 | 自动             | 返回清理函数    |

```javascript
// Vue watch
watch: {
  data: {
    handler(newVal, oldVal) {},
    immediate: true,
    deep: true
  }
}

// React useEffect
useEffect(() => {
  // 监听逻辑
  return () => {
    // 清理逻辑
  };
}, [data]);
```

## 15. useMemo 性能优化

### 作用

缓存计算结果，避免不必要的重复计算

```javascript
const expensiveValue = useMemo(() => {
  return heavyCalculation(a, b);
}, [a, b]); // 只有a或b变化时才重新计算
```

### 性能优化场景

- 复杂计算缓存
- 避免子组件不必要渲染
- 优化引用类型的传递

## 16. useContext 的优缺点

### 优点

- 避免 props 逐层传递
- 全局状态管理
- 代码简洁

### 缺点

- 组件耦合度增加
- 性能问题（context 变化时所有消费者重渲染）
- 调试困难

```javascript
const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Component />
    </ThemeContext.Provider>
  );
}

function Component() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>内容</div>;
}
```

## 17. any vs unknown 类型

| 特性     | any          | unknown      |
| -------- | ------------ | ------------ |
| 类型检查 | 关闭类型检查 | 保持类型检查 |
| 操作限制 | 无限制       | 需要类型收窄 |
| 安全性   | 不安全       | 安全         |

```typescript
// any - 不安全
let value: any = 42;
value.foo.bar; // 不报错，运行时可能出错

// unknown - 安全
let value: unknown = 42;
if (typeof value === "string") {
  value.toUpperCase(); // 类型收窄后才能使用
}
```

## 18. type vs interface

### 区别对比

| 特性     | type         | interface |
| -------- | ------------ | --------- |
| 扩展方式 | 交叉类型 (&) | extends   |
| 重复定义 | 报错         | 合并      |
| 计算属性 | 支持         | 不支持    |
| 联合类型 | 支持         | 不支持    |

```typescript
// type重复定义会报错
type User = { name: string };
type User = { age: number }; // Error: 重复定义

// interface重复定义会合并
interface User {
  name: string;
}
interface User {
  age: number;
}
// 合并后: { name: string; age: number }
```

## 19. Pick 和 Omit 工具类型

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Pick - 选择指定属性
type UserInfo = Pick<User, "name" | "email">;
// { name: string; email: string }

// Omit - 排除指定属性
type UserWithoutId = Omit<User, "id">;
// { name: string; email: string; age: number }

// 实际应用
function updateUser(id: number, data: Omit<User, "id">) {
  // 更新用户，不需要传入id
}
```

## 20. 反问环节问题建议

1. **公司技术栈**：团队目前使用的技术栈和未来规划？
2. **成长机会**：实习期间能参与哪些实际项目？
3. **团队氛围**：团队规模和协作方式如何？
4. **学习资源**：公司是否提供技术培训和学习机会？
5. **转正机会**：实习期间的考核标准和转正可能性？

## 总结

1. react 框架不熟悉：原理、生命周期、hooks 等；
2. ts 不熟悉：类型系统、泛型、接口、类等；
3. 一些基础不熟悉：如闭包、类型区分（typeof）等；
4. 讲述较慢和卡顿问题：讲述问题尽量先思考组织，然后稳定输出。
