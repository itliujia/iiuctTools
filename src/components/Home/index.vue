<!--
 * @Descripttion: 核心
 * @version: 0.1.0
 * @Author: 刘童鞋
 * @Date: 2022-10-16 17:01:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-12 03:15:33
-->
<template>
  <div class="home view">
    <div class="nya-container welcome">
      <span class="nya-container-subtitle"></span>

      <h2>轻量的工具集合</h2>
      <p>
        目前共开发了数十款有趣的小功能，数量还在持续增加中。如果觉得某一款不错，不妨安利给他人使用。遇到任何问题或建议都能在
        <a href="/message_board"> 留言反馈 </a> 进行留言
      </p>
      <div title="关闭" class="el-tooltip close">
        <i class="eva eva-close-outline"></i>
      </div>
    </div>

    <div class="search-component">
      <div class="search">
        <i class="eva eva-search-outline"></i
        ><input
          id="search-component-input"
          type="search"
          placeholder="搜索工具(Ctrl+F)"
        />
      </div>
    </div>
    <div class="nya-container pt">
      <div class="nya-title">
        <el-icon><component is="Bell"></component></el-icon>
        <span>公告</span>
      </div>
      <span class="nya-container-subtitle"></span>

      <ul class="nya-list">
        <li>
          <div class="badge-info">
            <span class="badge hot">热门</span
            ><span class="badge new">新功能</span
            ><span class="badge recommend">推荐</span
            ><span class="badge error">维护中</span>
          </div>
        </li>
        <li class="nya-c-danger">
          <b>遇到问题都请先点击右上角的清除缓存按钮</b>
        </li>
        <li>
          <span
            >请作者喝一杯咖啡：<a target="_blank" rel="noopener noreferrer"
              ><b>点我赞助</b></a
            ></span
          >
        </li>
      </ul>
    </div>

    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
</script>
