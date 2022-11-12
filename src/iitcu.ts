/*
 * @Description: iicut
 * @Author: Liu Jia
 * @Date: 2022-11-09 21:56:43
 * @LastEditTime: 2022-11-12 16:27:33
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