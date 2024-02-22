import { defineStore } from 'pinia'
import { getCollection } from '@/utils/firebase/firebaseDocuments'

interface State {
  products: [ProductosData] | []
}

interface ProductosData {
  created_at: dateObject
  uid: string
  toppings_included: number
  panques: number
  precio: number
  edited_at: dateObject
}

interface dateObject {
  seconds: number
  nanoseconds: number
}

const useProductStore = defineStore('products', {
  state: (): State => ({
    products: []
  }),
  getters: {},
  actions: {
    async getProducts() {
      this.products = await getCollection('productos')
    }
  }
})

export default useProductStore
