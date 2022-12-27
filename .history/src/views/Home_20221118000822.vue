<!--
 * @Descripttion: 主页
 * @version: 0.1.0
 * @Author: 刘童鞋
 * @Date: 2022-10-16 16:44:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-18 00:07:32
-->
<template>
  <Headers :isHomePage="isHomePage" />
  <homeMain>
    <div class="nya-container pt" v-for="(typeItem, typeIndex) in toolsData" :key="typeIndex">
      <div class="nya-title">
        <el-icon>
          <component :is="typeItem.categoryIcon"></component>
        </el-icon>
        <span>{{ typeItem.categoryName }}</span>
      </div>
      <span class="nya-container-subtitle"></span>
      <template v-for="(item, index) in toolsData[typeIndex].toolsList" :key="index">
        <el-button size="large" @click="jumpPage(item.toolsUrl, item.state)"
          :class="'el-tooltip  item2 tools-btn badge ' + item.state">{{ item.toolsName }}</el-button>
      </template>
    </div>

    <!-- <div class="nya-container pt">
      <div class="nya-title">
        <i class="eva eva-cube-outline"></i><span>视频工具</span>
      </div>
      <span class="nya-container-subtitle"></span>
      <a
        @click="ooo()"
        target="_self"
        class="el-tooltip tools-btn recommend badge"
      >
        抖音视频解析
      </a>
      <a target="_self" class="el-tooltip tools-btn erro badge">
        视频比例调节
      </a>
      <a target="_self" class="el-tooltip tools-btn erro badge">
        B站视频解析
      </a>
      <a target="_self" class="el-tooltip tools-btn erro badge">
        视频格式转化
      </a>
      <a target="_self" class="el-tooltip tools-btn erro badge">
        快手视频解析
      </a>
      <a target="_self" class="el-tooltip tools-btn erro badge">
        微博视频视频解析
      </a>
      <a target="_self" class="el-tooltip tools-btn erro badge">
        西瓜视频视频解析
      </a>
    </div> -->

    <!-- <div class="nya-container pt">
      <div class="nya-title">
        <i class="eva eva-settings-2-outline"></i><span>网站相关</span>
      </div>
      <span class="nya-container-subtitle"></span>
      <a target="_self" class="el-tooltip tools-btn"> 更新日志 </a
      ><a target="_self" class="el-tooltip tools-btn recommend badge">
        网站设置 </a
      ><a target="_self" class="el-tooltip tools-btn"> 留言反馈 </a
      ><a target="_self" class="el-tooltip tools-btn"> 友情链接 </a
      ><a target="_self" class="el-tooltip tools-btn"> 工具隐藏 </a
      ><a target="_self" class="el-tooltip tools-btn recommend badge">
        常见问题
      </a>
    </div> -->
  </homeMain>
</template>

<script lang="ts" setup>
import Headers from "../components/Header.vue";

import homeMain from "../components/Home/index.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { ElMessage, ElIcon, ElButton, ElNotification } from "element-plus";

const router = useRouter();
// 状态
// 热门 hot
// 新功能 new
// 推荐 recommend"
// 维护中 error
let toolsData = ref([
  {
    categoryName: "视频工具",
    categoryIcon: "VideoPlay",
    toolsList: [
      {
        toolsName: "抖音视频解析",
        toolsUrl: "/douyin",
        state: "hot",
      },
    ],
  },
  {
    categoryName: "音乐工具",
    categoryIcon: "Headset",
    toolsList: [
      {
        toolsName: "网易云音乐解析",
        toolsUrl: "",
        state: "error",
      },
      {
        toolsName: "酷狗音乐解析",
        toolsUrl: "",
        state: "error",
      },
    ],
  },
  {
    categoryName: "图片工具",
    categoryIcon: "Picture",
    toolsList: [
      {
        toolsName: "Base64图片转换",
        toolsUrl: "",
        state: "error",
      },
      {
        toolsName: "图片加水印",
        toolsUrl: "",
        state: "error",
      },



    ],
  },
  {
    categoryName: "编程工具",
    categoryIcon: "ElementPlus",
    toolsList: [
      {
        toolsName: "RGB转换",
        toolsUrl: "/rgb",
        state: "",
      },
      {
        toolsName: "时间戳转换",
        toolsUrl: "/timestamp",
        state: "",
      },
      {
        toolsName: "IP地址查询",
        toolsUrl: "",
        state: "error",
      },
      {
        toolsName: "JSON 编辑器",
        toolsUrl: "",
        state: "error",
      },
      {
        toolsName: "正则大全",
        toolsUrl: "",
        state: "error",
      },





    ],
  },
]);

const jumpPage = (url: string, state: string) => {
  state == "error"
    ? ElNotification({
      title: "Error",
      message: "该工具维护中，请稍后再试！",
      type: "error",
    })
    : router.push(url);
};

let isHomePage = false;

// document.title = "小合集工具箱";
</script>

