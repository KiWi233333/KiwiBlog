---
# https://vitepress.dev/reference/default-theme-home-page
layout: doc
title: "Js面试题汇总"
---

# Js面试题汇总

## 1、`var`和`let`区别

---

1. `var`是ES5中的关键字，用于声明变量。它可以重复声明同一个变量，并且作用域是函数作用域或全局作用域。在函数内部声明的变量，其作用域是函数内部；在全局作用域中声明的变量，其作用域是全局的。

2. `let`是ES6中的关键字，用于声明变量。它可以重复声明同一个变量，但是作用域是块级作用域。在块级作用域内声明的变量，其作用域仅限于该块级作用域。

3. 两者最大的区别在于作用域的不同。`var`声明的变量作用域可以是`全局或函数作用域` `可重复声明（声明覆盖）`，而`let`声明的变量作用域只能是`块级作用域`。

> 补充const 关键字：const 用于声明常量，其作用域与 let 相同，也是块级作用域。const 声明的常量必须进行初始化，并且一旦赋值，其值就不能再被修改。
>

---

## 2、深拷贝和浅拷贝的区别和实现方式？

---

1. `深拷贝`和`浅拷贝`是针对`对象`拷贝而言的。浅拷贝只复制对象的第一层内容，而深拷贝会复制对象的所有层级的属性。

2. 实现方式：可以使用递归`函数`实现深拷贝，也可以使用`简单用 JSON.parse(JSON.stringify())`方法实现深拷贝，但是该方法有局限性，不能处理函数和正则表达式等特殊对象。

```js
const obj = {
  name: '张三',
  age: 20,
  info:{
    detail: "aaa",
    age: 2
  }
}

// 1）深拷贝（简）
const deepClone = (obj) => JSON.parse(JSON.stringify(obj)); // 注意：该方法无法处理函数和正则表达式等特殊对象。
const newObj = deepClone(obj); // 注意：该方法无法处理函数和正则表达式等特殊对象。

// 2）深拷贝多情况兼容Sybol、Map、Set、BigInt、Date、RegExp、Function等特殊对象（复杂）
const deepClone = (obj, hash = new WeakMap()) => {
  if (obj === null) return null; // 处理null值。
  if (obj instanceof Date) return new Date(obj); // 处理Date对象。
  if (obj instanceof RegExp) return new RegExp(obj); // 处理RegExp对象。
  if (typeof obj !== 'object') return obj; // 处理基本类型。
  if (hash.has(obj)) return hash.get(obj); // 处理循环引用。
  let cloneObj = Array.isArray(obj) ? [] : {}; // 处理数组和对象。
  hash.set(obj, cloneObj); // 处理循环引用。
  for (let key in obj) { // 遍历对象属性。
    if (obj.hasOwnProperty(key)) { // 处理原型链上的属性。
      cloneObj[key] = deepClone(obj[key], hash); // 递归复制属性值。
    }
  }
}
// 写一个复杂类型
const obj = { a: 1, b: { c: new Symbol('c') } };
const newObj = deepClone(obj); // 注意：该方法无法处理函数和正则表达式等特殊对象。
```

---
