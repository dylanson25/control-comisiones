/* eslint-disable no-unused-labels */
import { sigInpWithEmail, getUserData, signOutWithEmail } from '@/utils/firebase/firebaseAuth'
import { defineStore } from 'pinia'

interface State {
  userData: UserData
}

interface UserData {
  uid?: string
  displayName?: string
  email?: string
  userType?: string
  userTypeId?: string
}
const useAuthStore = defineStore('auth', {
  state: (): State => ({
    userData: {}
  }),
  actions: {
    async onLogIn(email: string, pasword: string) {
      const data = await sigInpWithEmail(email, pasword)
      this.userData = data
    },
    async getUserData() {
      const data = await getUserData()
      this.userData = data
    },
    async onSignOut() {
      await signOutWithEmail()
      this.userData = {}
    }
  }
})

export default useAuthStore
