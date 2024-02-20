<script setup lang="ts"></script>

<template>
  <section id="defaultlayout">
    <section class="sidebar-layout">
      <o-sidebar inline active fullheight reduce :cancelable="false">
        <section class="menu">
          <o-icon icon="bars" size="medium" clickable />
        </section>
      </o-sidebar>
    </section>
    <section>
      <slot />
    </section>
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
      background: $pancake-pink
</style>
