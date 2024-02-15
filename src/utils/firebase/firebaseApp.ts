import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const {
  VITE_APP_API_KEY_FIREBASE,
  VITE_APP_AUTH_DOMAIN_FIREBASE,
  VITE_APP_PROJECT_ID_FIREBASE,
  VITE_APP_STORAGE_BUCKET_FIREBASE,
  VITE_APP_MESSAGING_SENDER_ID_FIREBASE,
  VITE_APP_ID_FIREBASE,
  VITE_APP_MEASUREMENT_ID_FIREBASE
} = import.meta.env

const firebaseConfig = {
  apiKey: VITE_APP_API_KEY_FIREBASE,
  authDomain: VITE_APP_AUTH_DOMAIN_FIREBASE,
  projectId: VITE_APP_PROJECT_ID_FIREBASE,
  storageBucket: VITE_APP_STORAGE_BUCKET_FIREBASE,
  messagingSenderId: VITE_APP_MESSAGING_SENDER_ID_FIREBASE,
  appId: VITE_APP_ID_FIREBASE,
  measurementId: VITE_APP_MEASUREMENT_ID_FIREBASE
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
