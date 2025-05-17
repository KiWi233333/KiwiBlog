/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
interface ImportMeta {
  readonly env: {
    VITE_ICP_CODE: string
    VITE_ICP_LINK: string
    VITE_DISABLED_COMMENTS: string
    [key: string]: any
  }
}
