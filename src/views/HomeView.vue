<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <section id="content-views" class="container">
    <RouterView />
  </section>
</template>
<style lang="sass" scoped>
#content-views
  width: 100%
  height: 100%
  flex-flow: 1
</style>
