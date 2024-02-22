import { db } from './firebaseApp'
import { collection, getDocs } from 'firebase/firestore'

export const getCollection = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(db, collectionName))
  const data: [object] | [] = []
  querySnapshot.forEach((doc) => data.push({ ...doc.data(), uid: doc.id }))
  return data
}
