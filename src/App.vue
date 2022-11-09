<!--
 * @Descripttion: 
 * @version: 
 * @Author: 刘童鞋
 * @Date: 2022-10-16 16:40:09
 * @LastEditors: 刘童鞋
 * @LastEditTime: 2022-11-10 01:09:08
-->
<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div data-server-rendered="true" id="__nuxt">
    <div id="__layout">
      <div class="index_page hide pc-transition platform-web">
        <main>

          <router-view v-if="isRouterActive" />
          <div class="overlay-right"></div>
          <div class="overlay-left"></div>
          <Foot />
        </main>
        <Sider />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Foot from '@/components/Foot.vue'
import Sider from '@/components/Sider.vue'
import { nextTick, provide, ref } from 'vue';
const isRouterActive = ref(true)
provide('reload', () => {
  console.log(3);
  
  isRouterActive.value = false
  nextTick(() => {
    isRouterActive.value = true
  })
})


</script>


<style lang="scss">
@import "assets/css/5e944c6.css";
// @import "assets/css/element-theme-blue.css";
@import "assets/css/10cde71.css";
@import "assets/css/e1bc80b.css";

td {
  word-break: break-all;
}

svg {
  width: 1em;
  height: 1em;
  fill: #ddd; //颜色
}
</style>