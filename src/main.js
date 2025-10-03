import './assets/main.css'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './config/firebase'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {plugin, defaultConfig} from '@formkit/vue'
import config from '../formkit.config.js'



import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueFire,{
    firebaseApp,
    modules: [VueFireAuth()],
})

app.use(createPinia())
app.use(router)
app.use(plugin, defaultConfig(config))

app.mount('#app')
