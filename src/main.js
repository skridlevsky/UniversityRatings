import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'
import './assets/css/app.css'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
