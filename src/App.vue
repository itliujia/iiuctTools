<!--
 * @Descripttion: 
 * @version: 
 * @Author: 刘童鞋
 * @Date: 2022-10-16 16:40:09
 * @LastEditors: 刘童鞋
 * @LastEditTime: 2022-10-16 19:25:46
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
          
          <router-view />
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






</script>


<!-- <style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style> -->


<style>
@import "assets/css/5e944c6.css";
@import "assets/css/element-theme-blue.css";
@import "assets/css/10cde71.css";
@import "assets/css/e1bc80b.css";
</style>