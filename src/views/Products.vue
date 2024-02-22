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
      <!-- AGREGAR LOADING -->
      <template v-for="product in products" :key="product.uid">
        <ProductCard :data="product" />
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
