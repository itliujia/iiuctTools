/*
 * @Description: 自定义
 * @version: 1.0.1
 * @Author: 刘童鞋
 * @Date: 2022-11-09 21:56:43
 * @LastEditors: 刘童鞋
 * @LastEditTime: 2022-11-09 22:50:35
 */

import vcopy from './components/base/copy.vue'

import copy from './directives/copy'


import * as Icons from '@element-plus/icons-vue'

export default {
  install(app: any) {
    //注册全局组件
    app.component('vcopy', vcopy);


    //注册全局指令
    app.directive('copy', copy)

    //统一注册el-icon图标
    for (const name in Icons) {
      //name 为icon名称，也是组件名称。使用时：<Edit />，
      //也可以按需增加前缀或者后缀
      // eg: app.component(`eurake-name-${name}`,(Icons as any)[name])
      // 使用时：<eurake-name-Edit />
      // 当然你也可以写一个方法把首字母大写的图标名称改成小写等你想要的任意格式
      app.component(name, (Icons as any)[name])
    }
  }
}