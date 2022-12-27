/*
 * @Description: 路由配置
 * @Author: Liu Jia
 * @Date: 2022-11-06 14:03:18
 * @LastEditTime: 2022-11-17 23:55:16
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/douyin',
    name: 'douyin',
    component: () => import('../views/Video/douyin/index.vue'),
    meta: {
      title: '抖音视频解析',
    },
  },
  {
    path: '/rgb/',
    name: 'rgb',
    component: () => import('../views/Code/rgb/index.vue'),
    meta: {
      title: 'RGB转换',
    },
  },

  {
    path: '/timestamp/',
    name: 'timestamp',
    component: () => import('../views/Code/timestamp/index.vue'),
    meta: {
      title: '时间戳转换',
    },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


//2.使用router.beforeEach对路由进行遍历，设置title
router.beforeEach((to, from, next) => {
  //beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {
    //判断是否有标题
    console.log(to.meta.title)
    document.title = String(to.meta.title) + ' - iiuctTools'
  } else {
    document.title = 'iiuctTools'
  }
  next()
})

export default router
