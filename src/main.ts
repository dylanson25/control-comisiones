import '@oruga-ui/theme-bootstrap/dist/bootstrap.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Oruga from '@oruga-ui/oruga-next'
import { bootstrapConfig } from '@oruga-ui/theme-bootstrap'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Oruga, bootstrapConfig)
app.use(createPinia())
app.use(router)

app.mount('#app')
