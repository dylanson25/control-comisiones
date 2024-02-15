import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'

import { app, db } from './firebaseApp'

interface userData {
  email: string
  password: string
  userName: string
  userType: string
  userTypeId: string
}

const auth = getAuth(app)

const createUserDocument = async (data: userData, user: any) => {
  try {
    await setDoc(doc(db, 'usuarios', user.uid), {
      userType: data.userType,
      userTypeId: data.userTypeId
    })
  } catch (error) {
    console.log(error)
  }
}

const getUserDocument = async (userUid: string) => {
  const docRef = doc(db, 'usuarios', userUid)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) throw 'firestore-document/not-exist'
  return docSnap.data()
}

export const signUpWithEmail = async (data: userData) => {
  try {
    const { email, password, userName, userType, userTypeId } = data
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    if (auth.currentUser) await updateProfile(auth.currentUser, { displayName: userName })
    createUserDocument(data, user)
    return { ...user, userType, userTypeId }
  } catch (error) {
    console.log(error)
  }
}

export const sigInpWithEmail = async (email: string, password: string) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    const userDocument = await getUserDocument(user.uid)
    return { ...user, ...userDocument }
  } catch (error) {
    console.log(error)
  }
}
