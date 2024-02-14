/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly API_KEY_FIREBASE: string
  readonly AUTH_DOMAIN_FIREBASE: string
  readonly PROJECT_ID_FIREBASE: string
  readonly STORAGE_BUCKET_FIREBASE: string
  readonly MESSAGING_SENDER_ID_FIREBASE: string
  readonly APP_ID_FIREBASE: string
  readonly MEASUREMENT_ID_FIREBASE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
