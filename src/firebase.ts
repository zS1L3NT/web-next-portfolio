import config from "./config.json"
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app"

const app = initializeApp(config.firebase.service_account)

export const firestore = getFirestore(app)
