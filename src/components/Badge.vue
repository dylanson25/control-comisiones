<script setup lang="ts">
import { computed } from 'vue'
import type { badgeProps } from './props'
const props = defineProps<badgeProps>()

const classes = computed<string>(() => {
  const { variant, rounded, size } = props
  const _classes = ['badge']
  _classes.push(`text-bg-${variant ?? 'secondary'}`)
  if (rounded) _classes.push('rounded-pill')
  if (size) _classes.push(`fs-${size}`)
  return _classes.join(' ')
})
</script>
<template>
  <span :class="classes">{{ props.label }}</span>
</template>
