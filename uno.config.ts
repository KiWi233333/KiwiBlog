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
    ["card-df", "bg-[#ffffff93] dark:bg-dark-5 rounded-1.5"],
    ["card-df-br", "bg-(white bg-op-60) dark:(bg-dark-6 bg-op-60) rounded-1.5 backdrop-blur-1 backdrop-saturate-180"],
    ["blur-card", "backdrop-blur-4 bg-[#75757528] rounded-4px"],
    ["btn-default", "border-0 cursor-pointer rounded-4px hover:text-[var(--el-color-primary)] text-white"],
    ["btn-primary-bg", " cursor-pointer rounded-4px hover:bg-[var(--el-color-primary)]  hover:text-white"],
    // 颜色
    ["text-color", "text-dark dark:text-white"],
    ["bg-color", "bg-white dark:bg-dark"],
    // 边框
    ["border-default", "border-1px border-solid border-gray-200 dark:border-dark-300"],
    ["border-default-dashed", "hover:shadow-sm border-2px  border-default border-dashed"],
    ["border-default-hover", `transition-200 hover:shadow hover:border-solid hover:border-[var(--el-color-primary)]  border-default-dashed
    `],
    // 布局
    ["flex-row-c-c", "flex flex-row flex-justify-center flex-items-center"],
    ["flex-row-bt-c", "flex flex-row flex-justify-between flex-items-center"],
    ["layout-default", "mx-a sm:px-2rem py-4 w-94vw md:w-1400px"],
    ["layout-default-md", "mx-a sm:px-2rem py-4 w-94vw md:w-1400px"],
    ["layout-default-xm", "mx-a sm:px-2rem py-4 w-94vw md:w-1200px"],
    ["layout-default-se", "mx-a sm:px-2rem py-4 w-94vw md:w-1000px"],
    ["absolute-center", "absolute left-1/2 -translate-x-1/2"],
    ["absolute-center-center", "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"],
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
      warn: true,
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
