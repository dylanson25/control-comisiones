<script setup lang="ts">
import { computed } from 'vue'
import { useField } from 'vee-validate'
import type { inputProps } from './props'

interface ErrorHandler {
  variant: string | undefined
  message: string | undefined
}

const props = withDefaults(defineProps<inputProps>(), {
  name: 'text',
  variant: '',
  message: ''
})

const { value, errorMessage } = useField(() => props.name)
const errorHandler = computed<ErrorHandler>(() =>
  errorMessage.value
    ? {
        variant: 'danger',
        message: errorMessage.value
      }
    : {
        variant: props.variant,
        message: props.message
      }
)
</script>
<template>
  <o-field :label="props.label" :variant="errorHandler.variant" :message="errorHandler.message">
    <o-input v-model="value" v-bind="{ ...props }" :variant="errorHandler.variant" />
  </o-field>
</template>
