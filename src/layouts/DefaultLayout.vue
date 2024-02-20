<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const currentTab = ref<'sellings' | 'stats' | 'products'>('products')

const onTabActive = (tabName: 'sellings' | 'stats' | 'products') => {
  router.push({ name: tabName })
}
</script>

<template>
  <section id="defaultlayout">
    <section class="sidebar-layout">
      <o-sidebar inline active fullheight reduce :cancelable="false">
        <section class="menu">
          <o-tabs v-model="currentTab" vertical @change="onTabActive">
            <o-tab-item label="Estadisticas" icon="chart-simple" value="stats" />
            <o-tab-item label="Ventas" icon="shop" value="sellings" />
            <o-tab-item label="Productos" icon="warehouse" value="products" />
          </o-tabs>
        </section>
      </o-sidebar>
    </section>
    <slot />
  </section>
</template>

<style lang="sass" scoped>
#defaultlayout
  display: flex
  width: 100%
  height: 100%
  :deep(.sidebar)
    height: 100%
    .offcanvas
      padding: 16px 8px
      width: 100px
      background: $pancake-pink
      .menu
        .tabs-wrapper
          .nav-default
            margin: 0
            & > .nav-item
              margin-bottom: 16px
            .nav-link
              display: flex
              width: 100%
              flex-direction: column
              text-align: center
              align-items: center
              justify-content: center
              padding: 0
              border: none
              .icon
                margin: 0
</style>
