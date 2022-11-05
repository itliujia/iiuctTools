/*
 * @Descripttion: 
 * @version: 
 * @Author: 刘童鞋
 * @Date: 2022-10-16 16:40:09
 * @LastEditors: 刘童鞋
 * @LastEditTime: 2022-10-17 22:35:15
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue3-video-play'
