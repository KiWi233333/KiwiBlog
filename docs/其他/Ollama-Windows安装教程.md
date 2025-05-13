# Ollama windows安装教程

> Ollama 现在作为本机 Windows 应用程序运行，包括 NVIDIA 和 AMD Radeon GPU 支持。 安装 Ollama for Windows 后，Ollama 将在后台运行，并且 这ollama命令行在cmd,powershell或您的最爱 终端应用程序。像往常一样，Ollama api 将在`http://localhost:11434`.

## 系统要求

- Windows 10 22H2 或更高版本、家庭版或专业版
- NVIDIA 452.39 或更高版本的驱动程序（如果您有 NVIDIA 卡）
- AMD Radeon 驱动程序 <https://www.amd.com/en/support> 您是否有 Radeon 卡
- Ollama 使用 unicode 字符进行进度指示，在 Windows 10 中，这些字符可能会在某些较旧的终端字体中呈现为未知方块。如果您看到此内容，请尝试更改终端字体设置。

## 文件系统要求

Ollama 安装不需要 Administrator，默认情况下安装在您的主目录中。您至少需要 4GB 的空间来进行二进制安装。安装 Ollama 后，您将需要额外的空间来存储大型语言模型，其大小可能为数十到数百 GB。如果您的主目录没有足够的空间，您可以更改二进制文件的安装位置和模型的存储位置。

## 1. 安装

### 1) 更改安装位置

要将 Ollama 应用程序安装在主目录以外的位置，请使用以下标志启动安装程序

```sh
OllamaSetup.exe /DIR="d:\some\location"
```

### 2) 更改模型位置

-. 为您的用户帐户编辑或创建新变量OLLAMA_MODELS您希望存储模型的位置

- 关闭Ollama

- 如果安装过模型，找到对应的原.ollama文件，并将其移动到新的模型位置。

- 开启Ollama

## 2. 启动Ollama

- 双击 OllamaSetup.exe 启动安装程序

- 命令行运行模型：

```sh
ollama run deepseek-r1:7b
```

## 3. 使用Ollama API

```powershell
 (Invoke-WebRequest -method POST -Body '{"model":"deepseek-r1:7b", "prompt":"你好", "stream": false}' -uri http://localhost:11434/api/generate ).Content | ConvertFrom-json
```
