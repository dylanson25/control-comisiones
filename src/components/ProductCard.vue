<script setup lang="ts">
import type { ProductCardProps } from '@/components/props'
import { Badge } from '@/components'
import { toRefs } from 'vue'
const props = defineProps<ProductCardProps>()
const { data } = toRefs(props)
</script>

<template>
  <article class="card">
    <div class="card-body">
      <!-- TODO: Poner la tag de pk -->
      <Badge :label="data.uid" size="6" variant="secondary" />
      <hr />
      <p v-if="data.panques" class="mb-1">
        <span class="fw-bolder">Hotcakes: </span>
        <small>{{ data.panques }} pz</small>
      </p>
      <!-- TODO: agregar formato $15.00 -->
      <p class="mb-1">
        <span class="fw-bolder">Precio: </span> <small>{{ data.precio }}</small>
      </p>
      <p class="mb-1">
        <span class="fw-bolder">toppings incluidos: </span>
        <small>{{ data.toppings_included ?? data.names?.join(', ') }}</small>
      </p>
    </div>
    <div class="card-footer">
      <!-- TODO: formato de ultima actualizacion -->
      <small class="text-body-secondary">last updated 3 mins ago</small>
    </div>
  </article>
</template>

<style lang="sass" scoped></style>
