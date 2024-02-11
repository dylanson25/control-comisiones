<script setup lang="ts"></script>

<template>
  <section id="login">
    <article class="login-image">
      <h2>Pancito</h2>
      <h3>panCakes</h3>
    </article>
    <article class="login-form container">
      <section class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
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
      // background: $pancake-pink
  @include media-breakpoint-down(lg)
    .login-image
      display: none
    .login-form
      width: unset
</style>
