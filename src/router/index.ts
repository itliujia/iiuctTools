/*
 * @Descripttion: 
 * @version: 
 * @Author: 刘童鞋
 * @Date: 2022-10-16 16:40:09
 * @LastEditors: 刘童鞋
 * @LastEditTime: 2022-11-09 00:16:31
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
    path: '/video/douyin',
    name: 'douyin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Video/douyin/index.vue')
  },
  {
    path: '/rgb/index',
    name: 'rgb',
    component: () => import(/* webpackChunkName: "about" */ '../views/rgb/index.vue')
  },

  {
    path: '/timestamp/index',
    name: 'timestamp',
    component: () => import(/* webpackChunkName: "about" */ '../views/timestamp/index.vue')
  },



  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
