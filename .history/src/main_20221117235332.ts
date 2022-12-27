import { createApp } from 'vue'
import './style.css'
import router from '@/router'

import App from './App.vue'
import ElementPlus from 'element-plus'


import 'element-plus/dist/index.css'



const app = createApp(App)

// app.use(store)
app.use(router)
app.mount('#app')
app.use(ElementPlus)

