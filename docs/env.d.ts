/// <reference types="vite/client" />
interface ImportMeta {
  readonly env: {
    VITE_ICP_CODE: string
    VITE_ICP_LINK: string
    VITE_DISABLED_COMMENTS: string
    [key: string]: any
  }
}
