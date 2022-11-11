/*
 * @Description: 路由配置
 * @Author: Liu Jia
 * @Date: 2022-11-06 14:03:18
 * @LastEditTime: 2022-11-12 04:56:10
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/douyin',
    name: 'douyin',
    component: () => import('../views/Video/douyin/index.vue')
  },
  {
    path: '/rgb/',
    name: 'rgb',
    component: () => import('../views/Code/rgb/index.vue')
  },

  {
    path: '/timestamp/',
    name: 'timestamp',
    component: () => import('../views/Code/timestamp/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
