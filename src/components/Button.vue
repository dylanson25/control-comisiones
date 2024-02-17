<script setup lang="ts">
import { computed } from 'vue'
import type { buttonProps } from './props'
const props = defineProps<buttonProps>()
const emit = defineEmits<{
  (e: 'click', value: PointerEvent): void
}>()
const isDisabled = computed(() => props.disabled || props.loading)
</script>
<template>
  <o-button v-bind="{ ...props }" :disabled="isDisabled" @click="emit('click', $event)">
    <o-icon v-if="props.loading" icon="spinner" spin />
    <template v-else>
      {{ props.label }}
    </template>
  </o-button>
</template>
