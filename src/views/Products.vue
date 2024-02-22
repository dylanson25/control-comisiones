<script setup lang="ts">
import { ProductCard } from '@/components'
import { useProductStore } from '@/stores'
import { onBeforeMount, reactive } from 'vue'
defineOptions({
  inheritAttrs: false
})

const { getProducts, products } = useProductStore()
const loading = reactive({ products: false })

onBeforeMount(async () => {
  loading.products = true
  await getProducts()
  loading.products = false
})
</script>

<template>
  <h3>Productos</h3>
  <div class="scroll">
    <section class="products">
      <template v-for="product in products" :key="product.uid">
        <ProductCard />
      </template>
    </section>
  </div>
</template>

<style lang="sass" scoped>
.scroll
  max-height: 90%
  overflow: auto
.products
  display: grid
  gap: 16px
  grid-template-columns: repeat(auto-fit, minmax(286px, calc(25% - 12px)))
  place-content: center
</style>
<!-- 
  TODO: Crear card de producto
    [ ]:  Paquetes de 15 + 2 toppings - $55
    [ ]:  Paquetes de 25 + 3 toppings - $90
    [ ]:  Paquetes de 50 + 4 toppings - $150
    [ ]:  pancibrocheta 5 pancitos, fruta y chocolate - $25
    [ ]:  topping extra 5 pesos
      Pueden tener varios toppings
    [ ]: fresa, platano, nuez, coco tostado, galleta oreo, lechera, mermelada, cajeta, chkocolate, miel de maple
    
 -->
