<!--
 * @Descripttion: 侧边
 * @version: 0.1.0
 * @Author: 刘童鞋
 * @Date: 2022-10-11 22:36:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-15 00:42:14
-->
<template>
  <div class="theme-btn" style="z-index: 999;">
    <!-- <div class="el-tooltip type-icon" @click="updateFun">
      <i class="eva eva-refresh-outline"></i>
    </div> -->
    <!-- <el-icon><RefreshRight /></el-icon> -->
    <el-button type="primary" @click="updateFun" :icon="RefreshRight" circle class="el-tooltip type-icon" />
    <el-button type="primary" @click="updateFun" :icon="Setting" circle class="el-tooltip type-icon" />
    <!-- <a class="el-tooltip type-icon"><i class="eva eva-settings-2-outline"></i></a> -->
  </div>

  <div class="sidebar-left">
    <div class="el-tooltip coffee-btn">
      <div class="coffee">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 144.4 169.8" xml:space="preserve" style="enable-background: new 0 0 144.4 169.8">
          <path d="M84.1,137.4H40.6c-12.3,0-22.4-10.1-22.4-22.4V93.3h88.3V115C106.5,127.3,96.4,137.4,84.1,137.4z"
            fill="#249ffd"></path>
          <path
            d="M121.4,62c-0.8,0-1.7,0.1-2.5,0.2c0-2.4-1.9-4.3-4.3-4.3H7.7c-2.4,0-4.3,1.9-4.3,4.3v31.6c0,29.3,23.7,53,53,53h9.4c20.5,0,38.2-11.7,47-28.7c2.6,1.3,5.5,2,8.4,2c13,0,23.1-12.7,23.1-29S134.3,62,121.4,62z M104.1,93.8c0,21.1-17.1,38.3-38.3,38.3h-9.4c-21.1,0-38.3-17.1-38.3-38.3V72.7h85.9L104.1,93.8L104.1,93.8z M121.4,105.3c-1.4,0-2.5-0.7-3.5-1.5c0.6-3.3,1-6.6,1-10V77.5c0.8-0.5,1.6-0.8,2.5-0.8c4,0,8.4,6.1,8.4,14.2S125.3,105.3,121.4,105.3L121.4,105.3z M117.3,155H7.6c-3.2,0-6.2,1.9-7.2,5c-1.7,5.1,2.1,9.8,7,9.8h109.7c3.2,0,6.2-1.9,7.2-5C126,159.7,122.2,155,117.3,155L117.3,155z M58.5,47.7c-2.8-2.5-3.6-6.8-2.2-10.4c1.3-3.2,2.1-6.6,0.8-8.4c-4.8-6.4-5.9-14.2-5.5-21c0.3-5.8,5.6-9.6,10.5-7.5c3.1,1.4,5.1,4.8,4.9,8.5c-0.2,3,0.1,6.5,2,9.1c6,8.1,4.6,18.4,1.2,26.4C68.2,49.7,62.4,51.2,58.5,47.7zM30.6,48.4c-1.8-1.6-2.3-4.3-1.4-6.7c0.8-2.1,1.3-4.3,0.5-5.4c-3-4.1-3.8-9.1-3.5-13.4c0.2-3.7,3.6-6.1,6.7-4.8c2,0.9,3.3,3.1,3.1,5.5c-0.1,1.9,0.1,4.2,1.3,5.8c3.9,5.2,2.9,11.8,0.8,17C36.8,49.6,33.1,50.6,30.6,48.4z M89.1,48.4c-1.8-1.6-2.3-4.3-1.4-6.7c0.8-2.1,1.3-4.3,0.5-5.4c-3-4.1-3.8-9.1-3.5-13.4c0.2-3.7,3.6-6.1,6.7-4.8c2,0.9,3.3,3.1,3.1,5.5c-0.1,1.9,0.1,4.2,1.3,5.8c3.9,5.2,2.9,11.8,0.8,17C95.4,49.6,91.6,50.6,89.1,48.4L89.1,48.4z"
            fill="#2f3e4c"></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ElButton } from "element-plus";
import { inject } from "vue";
import { RefreshRight, Setting } from "@element-plus/icons-vue";

const refresh: any = inject("reload");
const updateFun = async () => {
  await refresh();
};
</script>
<style>
.el-button+.el-button {
  margin-left: 0px !important;
}
</style>
