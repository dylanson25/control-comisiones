<script setup lang="ts">
import { RouterView, useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores'
import { DefaultLayout } from '@/layouts'
import { computed } from 'vue'

const route = useRoute()
const authStore = useAuthStore()
const { push } = useRouter()

const needAsideMenu = computed<boolean>(() => {
  return Boolean(route.meta.asideMenu)
})

authStore.$subscribe((mutation, state) => {
  if (state.userData.uid) push({ name: 'home' })
})
</script>

<template>
  <DefaultLayout v-if="needAsideMenu">
    <RouterView />
  </DefaultLayout>
  <RouterView v-else />
</template>
