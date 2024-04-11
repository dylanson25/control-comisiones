<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores'

const authStore = useAuthStore()
const { push } = useRouter()

authStore.$subscribe((mutation, state) => {
  if (state.auth === 'authenticated') push({ name: 'home' })
})
</script>

<template>
  <RouterView />
</template>
