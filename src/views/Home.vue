<!--
 * @Descripttion: 主页
 * @version: 0.1.0
 * @Author: 刘童鞋
 * @Date: 2022-10-16 16:44:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-08 12:14:34
-->
<template>
  <Headers :isHomePage="isHomePage" />
  <homeMain>

    <div class="nya-container pt" v-for="(typeItem, typeIndex) in  toolDataList" :key="typeIndex">
      <div class="nya-title">
        <!-- <Icon class="eva eva-cube-outline" :icon="typeItem.iconName"></Icon> -->
        <!-- <component class="xxx" :is="typeItem.iconName"></component> -->


        <el-icon>
          <Document />
        </el-icon>
        <span>{{ typeItem.type }}</span>
      </div>
      <span class="nya-container-subtitle"></span>
      <template v-for="(item, index) in  toolDataList[typeIndex].toolList" :key="index">
        <a @click="jumpPage(item.toolUrl)" target="_self" class="el-tooltip tools-btn">

          {{ item.toolTitls }} </a>
      </template>
    </div>






    <div class="nya-container pt">
      <div class="nya-title">
        <i class="eva eva-cube-outline"></i><span>视频工具</span>
      </div>
      <span class="nya-container-subtitle"></span>
      <a @click="ooo()" target="_self" class="el-tooltip tools-btn recommend badge">
        抖音视频解析 </a>
      <a target="_self" class="el-tooltip tools-btn erro badge">
        视频比例调节 </a>
      <a target="_self" class="el-tooltip tools-btn erro badge">
        B站视频解析 </a>
      <a target="_self" class="el-tooltip tools-btn erro badge">
        视频格式转化 </a>
      <a target="_self" class="el-tooltip tools-btn erro badge">
        快手视频解析 </a>
      <a target="_self" class="el-tooltip tools-btn erro badge">
        微博视频视频解析
      </a>
      <a target="_self" class="el-tooltip tools-btn erro badge">
        西瓜视频视频解析
      </a>
    </div>

    <div class="nya-container pt">
      <div class="nya-title">
        <i class="eva eva-settings-2-outline"></i><span>网站相关</span>
      </div>
      <span class="nya-container-subtitle"></span>
      <a target="_self" class="el-tooltip tools-btn">
        更新日志 </a><a target="_self" class="el-tooltip tools-btn recommend badge">
        网站设置 </a><a target="_self" class="el-tooltip tools-btn">
        留言反馈 </a><a target="_self" class="el-tooltip tools-btn">
        友情链接 </a><a target="_self" class="el-tooltip tools-btn">
        工具隐藏 </a><a target="_self" class="el-tooltip tools-btn recommend badge">
        常见问题
      </a>
    </div>
  </homeMain>

</template>

<script lang="ts" setup>
import Headers from '@/components/Header.vue'

import homeMain from '@/components/Home/index.vue'
import { useRouter } from "vue-router"
import { ref } from 'vue'

const router = useRouter()

let toolDataList = ref(
  [
    {
      type: '其他工具',
      toolList: [
        {
          toolTitls: 'RGB转换',
          toolUrl: '/rgb/index'
        }, {
          toolTitls: '时间戳转换',
          toolUrl: ''
        }

      ]
    }
  ]
)

const jumpPage = (url: string) => {
  router.push(url)
}



const ooo = () => {
  router.push("/video/douyin")
}
let isHomePage = false

document.title = '小合集工具箱'


</script>

