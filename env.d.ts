/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_API_KEY_FIREBASE: string
  readonly VITE_APP_AUTH_DOMAIN_FIREBASE: string
  readonly VITE_APP_PROJECT_ID_FIREBASE: string
  readonly VITE_APP_STORAGE_BUCKET_FIREBASE: string
  readonly VITE_APP_MESSAGING_SENDER_ID_FIREBASE: string
  readonly VITE_APP_ID_FIREBASE: string
  readonly VITE_APP_MEASUREMENT_ID_FIREBASE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
