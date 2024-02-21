<script setup lang="ts">
import { Badge } from '@/components'
</script>

<template>
  <article class="card">
    <div class="card-body">
      <!-- TODO: Poner la tag de pk -->
      <Badge label="PK15" size="6" variant="secondary" />
      <hr />
      <p class="mb-1"><span class="fw-bolder">Hotcakes:</span> <small>15 pz</small></p>
      <p class="mb-1"><span class="fw-bolder">Precio:</span> <small>$15.00</small></p>
      <p class="mb-1"><span class="fw-bolder">toppings incluidos:</span> <small>2</small></p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">last updated 3 mins ago</small>
    </div>
  </article>
</template>

<style lang="sass" scoped></style>
