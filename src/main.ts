import '@oruga-ui/theme-bootstrap/dist/bootstrap.css'
import '@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '@fortawesome/fontawesome-free/scss/regular.scss'
import '@fortawesome/fontawesome-free/scss/solid.scss'
import '@/assets/sass/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Oruga from '@oruga-ui/oruga-next'
import { bootstrapConfig } from '@oruga-ui/theme-bootstrap'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Oruga, {
  customIconPacks: {
    fas: {
      sizes: {
        default: '',
        small: 'fa-sm',
        medium: 'fa-lg',
        large: 'fa-2x'
      }
    }
  },
  iconPack: 'fas',
  ...bootstrapConfig
})
app.use(createPinia())
app.use(router)

app.mount('#app')
