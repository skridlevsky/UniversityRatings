import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'
import './assets/SCSS/app.scss'

const app = createApp(App)

app.use(router, store)

app.mount('#app')
