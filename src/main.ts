/*
 * @Descripttion: 
 * @version: 
 * @Author: 刘童鞋
 * @Date: 2022-10-16 16:40:09
 * @LastEditors: 刘童鞋
 * @LastEditTime: 2022-11-09 21:59:51
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import vue3videoPlay from 'vue3-video-play' // 引入组件

import 'element-plus/dist/index.css'
import 'vue3-video-play/dist/style.css' // 引入css



import iitcu from './iitcu'




const app=createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
app.use(ElementPlus)
app.use(vue3videoPlay)
app.use(iitcu);


