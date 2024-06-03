# Tauri 自动更新

## 概况

Tauri 是一个跨平台的应用程序框架，它允许开发人员使用 Web 技术（如 HTML、CSS 和 JavaScript）来构建桌面应用程序。Tauri 提供了自动更新的功能，使得应用程序能够定期检查是否有新的版本可用，并在有新版本可用时自动下载并安装。

> 相关链接：
> [Tauri官方文档 | updater](https://tauri.app/zh-cn/v1/guides/distribution/updater)
> [Tauri配合github action](https://blog.csdn.net/weixin_44786530/article/details/131963524)

## 步骤

### 2、GitHub Actions 配置文件（.github/workflows/release.yml）

```yml
name: JiwuChat CI
 
on:
    push:
        # Sequence of patterns matched against refs/tags
        tags:
            - 'v*' # Push events to matching v*, i.e. v1.0, v20.15.10
    workflow_dispatch:
 
jobs:
    release:
        permissions:
            contents: write
        strategy:
            fail-fast: false
            matrix:
                # 选择编译平台
                platform: [macos-latest,  windows-latest]
        runs-on: ${{ matrix.platform }}
        steps:
            - name: Checkout repository
              uses: actions/checkout@v3
 
            - name: Install dependencies (ubuntu only)
              if: matrix.platform == 'ubuntu-20.04'
              # You can remove libayatana-appindicator3-dev if you don't use the system tray feature.
              run: |
                  sudo apt-get update
                  sudo apt-get install -y libgtk-3-dev libwebkit2gtk-4.0-dev libayatana-appindicator3-dev librsvg2-dev
 
            - name: Rust setup
              uses: dtolnay/rust-toolchain@stable
 
            - name: Rust cache
              uses: swatinem/rust-cache@v2
              with:
                  workspaces: './src-tauri -> target'
 
            - name: Sync node version and insatll nodejs
              uses: actions/setup-node@v3
              with:
                  node-version: 20
 
            # 使用 pnpm 作为包管理器
            - name: Install pnpm
              uses: pnpm/action-setup@v2
              id: pnpm-install
              with:
                  version: 8
                  run_install: false
 
            - name: Get pnpm store directory
              id: pnpm-cache
              shell: bash
              run: |
                  echo "STORE_PATH=$(pnpm store path)" >> $GITHUB_OUTPUT
 
            - uses: actions/cache@v3
              name: Setup pnpm cache
              with:
                  path: ${{ steps.pnpm-cache.outputs.STORE_PATH }}
                  key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
                  restore-keys: |
                      ${{ runner.os }}-pnpm-store-
 
            - name: Install app dependencies and build it
              run: pnpm i && pnpm build:nuxt # 安装依赖和打包
              env:
                  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
                  TAURI_PRIVATE_KEY: ${{ secrets.TAURI_PRIVATE_KEY }}
                  TAURI_KEY_PASSWORD: ${{ secrets.TAURI_KEY_PASSWORD }}
            # 发布 - 需填写相关参数
            - name: Create Release
              uses: tauri-apps/tauri-action@v0.3
              env:
                GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
                TAURI_PRIVATE_KEY: ${{ secrets.TAURI_PRIVATE_KEY }}
                TAURI_KEY_PASSWORD: ${{ secrets.TAURI_KEY_PASSWORD }}
              with:
                tagName: ${{ github.ref_name }}
                releaseName: 'v__VERSION__'
                # 正确引用步骤输出的变量
                # releaseBody: ${{ steps.get_release_body.outputs.releaseBody }}
                releaseBody: "**Full Changelog**: https://github.com/KiWi233333/jiwu-mall-chat-tauri/blob/main/.github/releasemd/${{ github.ref_name }}.md"
                releaseDraft: false
                prerelease: false

```

### Github配置

![action](<assets/Tauri 自动更新/image.png>)
