import { createApp } from 'vue'
import './style.css'
import router from './router'

import App from './App.vue'
import ElementPlus from 'element-plus'

//引入样式
import 'element-plus/dist/index.css'



const app = createApp(App)

// app.use(store)
app.use(router)
app.mount('#app')
app.use(ElementPlus)


// 在main.ts注册Icon组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


