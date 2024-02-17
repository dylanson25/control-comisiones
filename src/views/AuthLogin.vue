<script setup lang="ts">
import { Field, Button } from '@/components'
import { useAuthStore } from '@/stores'
import { useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import * as yup from 'yup'

const authStore = useAuthStore()
const { push } = useRouter()

const { handleSubmit, isSubmitting, setErrors } = useForm({
  validationSchema: yup.object({
    email: yup.string().required('Campo necesario').email('Correo electronico invalido'),
    password: yup.string().required('Campo necesario')
  })
})
const onSubmit = handleSubmit(async (values) => {
  try {
    const { email, password } = values
    await authStore.onLogIn(email, password)
    push({ name: 'home' })
  } catch (error: any) {
    if (error.code === 'auth/invalid-credential')
      setErrors({
        email: 'Contraseña o correo incorrectos',
        password: 'Contraseña o correo incorrectos'
      })
    console.log(error)
  }
})
authStore.$subscribe((mutation, state) => {
  if (state.userData.uid) push({ name: 'home' })
})
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
          <Field name="email" type="email" icon="user" placeholder="Correo" />
          <Field
            name="password"
            type="password"
            icon="lock"
            placeholder="Contraseña"
            password-reveal
          />
          <div class="d-flex w-100">
            <Button
              class="login-button"
              @click="onSubmit"
              label="Iniciar Sesión"
              variant="primary"
              outlined
              rounded
              :loading="isSubmitting"
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
    height: 100%
    display: flex
    .card
      min-height: 85%
      margin: auto
      width: 100%
      .card-body
        display: flex
        flex-direction: column
        justify-content: center
      .card-logo
        width: 150px
        margin: 0 auto
      .login-button
        margin: 0 auto
        width: 119px
  @include media-breakpoint-down(lg)
    .login-image
      display: none
    .login-form
      width: 100%
</style>
