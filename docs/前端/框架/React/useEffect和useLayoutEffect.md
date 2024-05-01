# useEffect和useLayoutEffect区别

## 相同

> useEffect和useLayoutEffect都是React Hooks，用于在函数组件中执行副作用操作。

```jsx
import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { render } from 'react-dom';

function App() {
  const [count, setCount] = useState(0);

  for (let i = 0; i <= 10000000000; i++) {}
  useEffect(() => {
    if (count === 0) {
      const randomNum = 10 + Math.random() * 200;
      setCount(10 + Math.random() * 200);
    }
  }, [count]);

  return <div onClick={() => setCount(0)}>{count}</div>;
}

render(<App />, document.getElementById('root'));
```

> 结果会出现 0 -> 闪烁 -> 随机数

```jsx
import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { render } from 'react-dom';

function App() {
  const [count, setCount] = useState(0);

  for (let i = 0; i <= 10000000000; i++) {}
  useLayoutEffect(() => {
    if (count === 0) {
      const randomNum = 10 + Math.random() * 200;
      setCount(10 + Math.random() * 200);
    }
  }, [count]);

  return <div onClick={() => setCount(0)}>{count}</div>;
}

render(<App />, document.getElementById('root'));

```

> 结果会不出现闪烁

1. useLayoutEffect 和 useEffect 的相同点是：

- 函数签名是一样的；
- clean up 机制是一样的；
- 提交 DOM mutation 次数是一样的。

2. useLayoutEffect 和 useEffect 的不同点是：

- 执行时机是不同的。useLayoutEffect在当前帧paint流程之前，useEffect在当前帧paint流程之后；
- useEffect callback 的执行是异步的，而 useLayoutEffect callback 的执行是同步的；
- useEffect callback 里面的「状态更新是非批量的」（也就是说，会分配到不同的渲染帧里面），而useLayoutEffect callback 里面的「状态更新是批量」。
