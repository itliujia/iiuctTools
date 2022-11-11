/*
 * @Description: 自定义
 * @version: 1.0.1
 * @Author: 刘童鞋
 * @Date: 2022-11-09 21:56:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-12 02:43:20
 */

import vcopy from './components/base/copy.vue'

import copy from './directives/copy'



export default {
  install(app: any) {
    //注册全局组件
    app.component('vcopy', vcopy);


    //注册全局指令
    app.directive('copy', copy)

  }
}