/* eslint-disable no-unused-labels */
import { sigInpWithEmail, getUserData, signOutWithEmail } from '@/utils/firebase/firebaseAuth'
import { defineStore } from 'pinia'

interface State {
  auth: 'authenticated' | 'no-authenticated' | 'authenticating'
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
    auth: 'no-authenticated',
    userData: {}
  }),
  getters: {
    isAuthenticated(state): boolean {
      return state.auth === 'authenticated'
    }
  },
  actions: {
    async onLogIn(email: string, pasword: string) {
      const data = await sigInpWithEmail(email, pasword)
      this.auth = 'authenticated'
      this.userData = data
    },
    async getUserData() {
      const data = await getUserData()
      if (data.uid) this.auth = 'authenticated'
      this.userData = data
    },
    async onSignOut() {
      await signOutWithEmail()
      this.auth = 'no-authenticated'
      this.userData = {}
    }
  }
})

export default useAuthStore
