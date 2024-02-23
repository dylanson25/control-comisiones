<script setup lang="ts">
import type { ProductCardProps } from '@/components/props'
import { useTexTransform } from '@/utils/composables'
import { Badge } from '@/components'
import { toRefs, computed } from 'vue'

const { formatPrice, formatFirebaseUnitTime } = useTexTransform()
const props = defineProps<ProductCardProps>()
const { data } = toRefs(props)

const price = computed(() => formatPrice(props.data.precio))
const lastUpdated = computed(() => formatFirebaseUnitTime(props.data.edited_at))
</script>

<template>
  <article class="card">
    <div class="card-body">
      <Badge :label="data.uid" size="6" variant="secondary" />
      <hr />
      <p v-if="data.panques" class="mb-1">
        <span class="fw-bolder">Hotcakes: </span>
        <small>{{ data.panques }} pz</small>
      </p>
      <p class="mb-1">
        <span class="fw-bolder">Precio: </span> <small>{{ price }}</small>
      </p>
      <p class="mb-1">
        <span class="fw-bolder">toppings incluidos: </span>
        <small>{{ data.toppings_included ?? data.names?.join(', ') }}</small>
      </p>
    </div>
    <div class="card-footer">
      <!-- TODO: formato de ultima actualizacion -->
      <small class="text-body-secondary"> Última actualización {{ lastUpdated }}</small>
    </div>
  </article>
</template>

<style lang="sass" scoped></style>
