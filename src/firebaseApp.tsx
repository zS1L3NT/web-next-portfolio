import { initializeApp } from "firebase/app"

export default initializeApp({
	apiKey: import.meta.env.VITE__FIREBASE__API_KEY,
	authDomain: import.meta.env.VITE__FIREBASE__AUTH_DOMAIN,
	databaseURL: import.meta.env.VITE__FIREBASE__DATABASE_URL,
	projectId: import.meta.env.VITE__FIREBASE__PROJECT_ID,
	storageBucket: import.meta.env.VITE__FIREBASE__STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE__FIREBASE__MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE__FIREBASE__APP_ID,
	measurementId: import.meta.env.VITE__FIREBASE__MEASUREMENT_ID
})