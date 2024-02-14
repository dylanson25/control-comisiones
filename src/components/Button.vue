<script setup lang="ts">
import type { buttonProps } from './props'
const props = defineProps<buttonProps>()
const emit = defineEmits<{
  (e: 'click', value: PointerEvent): void
}>()
</script>
<template>
  <o-button v-bind="{ ...props }" @click="emit('click', $event)">{{ props.label }}</o-button>
</template>
