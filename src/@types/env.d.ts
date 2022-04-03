/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE__FIREBASE__API_KEY: string
	readonly VITE__FIREBASE__AUTH_DOMAIN: string
	readonly VITE__FIREBASE__DATABASE_URL: string
	readonly VITE__FIREBASE__PROJECT_ID: string
	readonly VITE__FIREBASE__STORAGE_BUCKET: string
	readonly VITE__FIREBASE__MESSAGING_SENDER_ID: string
	readonly VITE__FIREBASE__APP_ID: string
	readonly VITE__FIREBASE__MEASUREMENT_ID: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}