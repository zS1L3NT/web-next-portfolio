import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app"

const app = initializeApp({
	projectId: process.env.FIREBASE__SERVICE_ACCOUNT__PROJECT_ID,
	//@ts-ignore
	privateKey: process.env.FIREBASE__SERVICE_ACCOUNT__PRIVATE_KEY,
	//@ts-ignore
	clientEmail: process.env.FIREBASE__SERVICE_ACCOUNT__CLIENT_EMAIL,
})

export const firestore = getFirestore(app)
