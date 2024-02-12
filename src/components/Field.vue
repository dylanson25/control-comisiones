<script setup lang="ts">
import type { inputProps } from './props'
const props = defineProps<inputProps>()
</script>

<template>
  <o-field :label="props.label" :variant="props.variant" :message="props.message">
    <o-input v-bind="{ ...props }" />
  </o-field>
</template>
