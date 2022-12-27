<!--
 * @Descripttion: 头部
 * @version: 0.1.0
 * @Author: 刘童鞋
 * @Date: 2022-10-16 16:47:37
 * @LastEditors: 刘童鞋
 * @LastEditTime: 2022-11-04 23:09:16
-->
<template>
    <header class="navbar">
        <h1 class="title">
            <a @click="goHome" aria-current="page" class="nuxt-link-exact-active nuxt-link-active">
                小合集工具箱
                
            </a>
        </h1>
        <div class="miniTitle">iiuctTools</div>
        <div icon="person-outline" class="panel">
            <div class="login-text">
                <a href="/" title="backhome" class="nuxt-link-active" v-if="isHomePage"><i
                        class="eva eva-arrow-back-outline"></i><span class="mr-15">返回首页</span></a>
                <i class="eva eva-person-outline"></i><span>未登录</span>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import { useRouter } from "vue-router"
const router = useRouter()

let isHomePage = ref(true)
const props = defineProps({
    isHomePage: Boolean
})

const goHome = () => {
  router.push("/")
}
isHomePage=ref(props.isHomePage)
console.log(props)
</script>

<style>
.miniTitle{
    margin: 10px 0;
    font-size: 1.5em;
    color:gray;
    letter-spacing: 3px;
}
</style>