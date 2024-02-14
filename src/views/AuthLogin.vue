<script setup lang="ts">
import { Field, Button } from '@/components'

const onclick = (e: PointerEvent) => {
  console.log(e)
}
</script>

<template>
  <section id="login">
    <article class="login-image">
      <h2>Pancito</h2>
      <h3>panCakes</h3>
    </article>
    <article class="login-form container">
      <section class="card">
        <div class="card-body">
          <h3 class="card-title text-center mb-0">Pancito</h3>
          <h5 class="card-title text-center">Pancakes</h5>
          <div class="d-flex w-100 mb-4">
            <img src="../assets/img/logoColor.png" class="img-fluid card-logo" alt="logo pancito" />
          </div>
          <Field type="email" icon="user" placeholder="Correo" />
          <Field type="password" icon="lock" placeholder="Contraseña" password-reveal />
          <div class="d-flex w-100">
            <Button
              class="mx-auto"
              @click="onclick"
              label="Iniciar Sesión"
              variant="primary"
              outlined
              rounded
            />
          </div>
        </div>
      </section>
    </article>
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
    flex-direction: column
    justify-content: center
    align-items: center
    height: 100%
    width: 60%
    background-size: cover
    background-image: url('src/assets/img/fondo_login.png')
  .login-form
    width: 40%
    display: flex
    .card
      margin: auto
      max-width: 400px
      .card-logo
        width: 150px
        margin: 0 auto
  @include media-breakpoint-down(lg)
    .login-image
      display: none
    .login-form
      width: 100%
      .card
        width: 100%
        max-width: 350px
</style>
