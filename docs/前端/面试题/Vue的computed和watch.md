---
# https://vitepress.dev/reference/default-theme-home-page
layout: doc
title: "computed和watch区别"
---

# computed和watch

## computed和watch的区别是什么？

> computed和watch都是Vue.js中的计算属性（computed）和侦听器（watch），它们都可以用于响应式地响应数据的变化。但是，它们之间有一些区别：

1. `计算属性（computed）`：computed是一种`缓存`属性，它会在依赖的数据发生变化时自动更新。computed的值是基于依赖的数据计算得出的，并且只在需要时才会重新计算。computed通常用于根据现有的数据计算出一个新的值，例如计算总价、平均值等`getter` `setter`。

2. `侦听器（watch）`：watch是一种观察属性，它会在数据发生变化时执行相应的回调函数。watch可以监听一个数据的变化，并在数据发生变化时执行相应的操作，例如发送网络请求、更新其他数据等。watch通常用于监听一个数据的变化，并在数据发生变化时执行一些副作用操作。

## vue2和vue3的computed和watch有什么区别？
>
> vue2和vue3的computed和watch有一些区别：

1. 在vue2中，computed和watch都是通过`Object.defineProperty`来实现的，而vue3则是通过`Proxy`来实现的。
2. 在vue2中，computed和watch都是通过`new Watcher`来实现的，而vue3则是通过`createGetterSetter`来实现的。
3. 在vue2中，computed和watch都是通过`this`来访问的，而vue3则是通过`setup`函数来访问的。
4. 在vue2中，computed和watch都是通过`this.$watch`来监听的，而vue3则是通过`watch`函数来监听的。
