import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";


export default defineConfig({
  shortcuts: [
    ["card-df", "bg-[#ffffff93] dark:bg-dark-9 rounded-1.5"],
    ["card-df-br", "bg-light bg-op-60 dark:(bg-dark-9 bg-op-70) rounded-1.5 backdrop-blur-1 backdrop-saturate-180"],
    ["btn-default", "border-0 cursor-pointer rounded-4px hover:text-[var(--el-color-primary)] text-white"],
    ["btn-primary-bg", " cursor-pointer rounded-4px hover:bg-[var(--el-color-primary)]  hover:text-white"],
    // 颜色
    ["text-color", "text-dark dark:text-white"],
    ["bg-color", "bg-white dark:bg-dark"],
    ["bg-color-br", "bg-[#ffffff93] dark:(bg-dark-5 bg-op-60) backdrop-blur-12px"],
    ["bg-menu-color", "bg-white  dark:bg-dark-8"],
    ["bg-color-second", "bg-light-5 dark:bg-dark"],
    // 边框
    ["border-default", "border-1px border-solid border-gray-200 dark:border-dark-300"],
    ["border-default-r", "border-solid border-gray-200 border-0 border-r-1px  dark:border-dark-300"],
    ["border-default-l", "border-solid border-gray-200 border-0 border-l-1px  dark:border-dark-300"],
    ["border-default-t", "border-solid border-gray-200 border-0 border-t-1px  dark:border-dark-300"],
    ["border-default-b", "border-solid border-gray-200 border-0 border-b-1px  dark:border-dark-300"],
    ["border-hover-primary", "transition-200 border-1px border-solid border-gray-200 dark:border-dark-500 hover:border-color-[var(--el-color-primary)]"],
    ["border-default-hover", "transition-200 border-1px border-solid border-gray-200 dark:border-dark-500 hover:(border-gray-300 dark:border-dark-100)"],
    ["border-default-dashed", "border-2px  border-default border-dashed"],
    ["border-default-dashed-hover", "transition-200 hover:border-solid hover:border-[var(--el-color-primary)]  border-default-dashed"],
    // 布局
    ["flex-row-c-c", "flex flex-row flex-justify-center flex-items-center"],
    ["flex-row-bt-c", "flex flex-row flex-justify-between flex-items-center"],
    ["layout-default", "mx-a px-4 sm:(max-w-640px px-6) md:(max-w-960px px-6) lg:(px-6 max-w-1120px)"],
    ["absolute-center", "absolute left-1/2 -translate-x-1/2"],
    ["absolute-center-center", "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"],
    ["absolute-center-x", "absolute left-1/2 -translate-x-1/2"],
    // border
    ["rounded-default", "border-8px"],

    ["btn-primary-circle", "transition-200 cursor-pointer hover:(text-white bg-[var(--el-color-primary)]) h-2.1rem w-2.1rem rounded-full text-center leading-2.1rem border-default"],

    ["btn-info-text", "transition-200 cursor-pointer rounded-4px hover:text-[var(--el-color-info)]"],
    ["btn-success-text", "transition-200 cursor-pointer rounded-4px hover:text-[var(--el-color-success)]"],
    ["btn-primary-text", "transition-200 cursor-pointer rounded-4px hover:text-[var(--el-color-primary)]"],
    ["btn-danger-text", "transition-200 cursor-pointer rounded-4px hover:text-[var(--el-color-danger)]"],
    ["btn-warning-text", "transition-200 cursor-pointer rounded-4px hover:text-[var(--el-color-warning)]"],
    ["btn-info-bg", "transition-200 cursor-pointer rounded-4px hover:(text-white bg-[var(--el-color-info)])"],
    ["btn-success-bg", "transition-200 cursor-pointer rounded-4px hover:(text-white bg-[var(--el-color-success)])"],
    ["btn-primary-bg", "transition-200 cursor-pointer rounded-4px hover:(text-white bg-[var(--el-color-primary)])"],
    ["btn-danger-bg", "transition-200 cursor-pointer rounded-4px hover:(text-white bg-[var(--el-color-danger)])"],
    ["btn-warning-bg", "transition-200 cursor-pointer rounded-4px hover:(text-white bg-[var(--el-color-warning)])"],
    ["group-btn-info", "transition-200 cursor-pointer rounded-4px group-hover:text-[var(--el-color-info)]"],
    ["group-btn-success", "transition-200 cursor-pointer rounded-4px group-hover:text-[var(--el-color-success)]"],
    ["group-btn-primary", "transition-200 cursor-pointer rounded-4px group-hover:text-[var(--el-color-primary)]"],
    ["group-btn-danger", "transition-200 cursor-pointer rounded-4px group-hover:text-[var(--el-color-danger)]"],
    ["group-btn-warning", "transition-200 cursor-pointer rounded-4px group-hover:text-[var(--el-color-warning)]"],
    ["btn-primary-border", "transition-200 cursor-pointer rounded-4px border-1px border-color-transparent hover:border-color-[var(--el-color-primary)]"],

  ],
  rules: [
  ],
  theme: {
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: false,
      collections: {
        solar: () =>
          import("@iconify-json/solar").then(i => i.icons as any),
        carbon: () =>
          import("@iconify-json/carbon").then(i => i.icons as any),
      },
    }),
    presetTypography(),
    presetWebFonts({}),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
