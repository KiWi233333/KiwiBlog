
<div align="center">
<img src="./docs/public/kiwi.gif" width="300" style="margin:30px 0;" alt="预览"/>

[![Netlify Status](https://api.netlify.com/api/v1/badges/21d806d7-2127-4d4c-8e27-083b59fc10af/deploy-status)](https://app.netlify.com/sites/kiwiblog/deploys)

体验地址：[Kiwi2333](https://kiwi233.top)

语言：中文 | [English](./README.en.md)
</div>

## ☕ 演示

![首页](./assets/image.png)

![博客](./assets/image2.png)

![文章](./assets/image3.png)

## 🎉 Lighthouse 评分

![Lighthouse 评分](./.doc/score.png)

## ⏳ 起步 | Project Setup

```sh
# node 版本 >= 18
npm install -g pnpm
pnpm install
```

## ✨ 开发

```sh
pnpm run dev
```

## 📦 打包

```sh
pnpm run build
```

## 🎊 部署

静态托管

## ❌ pnpm install error

查看源

```sh
pnpm get registry 
```

临时修改

```sh
pnpm --registry https://registry.npmmirror.com install any-touch
```

持久使用

```sh
pnpm config set registry https://registry.npmmirror.com
```

还原

```sh
pnpm config set registry https://registry.npmjs.org
```
