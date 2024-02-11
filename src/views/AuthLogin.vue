<script setup lang="ts"></script>

<template>
  <section id="login">
    <article class="login-image">
      <h2 class="m-auto">Bienvenid@</h2>
    </article>
    <article class="login-form">sdfa</article>
  </section>
</template>

<style lang="sass" scoped>
#login
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 100%
  .login-image
    display: flex
    height: 100%
    width: 60%
    background-size: cover
    background-image: url('src/assets/img/fondo_login.png')
  .login-form
    width: 40%
  @include media-breakpoint-down(lg)
    .login-image
      display: none
</style>
