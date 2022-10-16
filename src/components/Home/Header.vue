<!--
 * @Descripttion: 
 * @version: 
 * @Author: 刘童鞋
 * @Date: 2022-10-16 16:47:37
 * @LastEditors: 刘童鞋
 * @LastEditTime: 2022-10-16 16:52:00
-->
<template>
    <header class="navbar">
        <h1 class="title">
            <a href="/" aria-current="page" class="nuxt-link-exact-active nuxt-link-active">
                小合集
            </a>
        </h1>
        <div icon="person-outline" class="panel">
            <div class="login-text">
                <i class="eva eva-person-outline"></i><span>未登录</span>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>

</script>

<style>

.navbar {
    padding: 1.25rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column
}

.navbar .title {
    position: relative;
    margin-bottom: .3125rem;
    text-shadow: .0625rem .0625rem .0625rem rgba(0, 0, 0, .15);
    font-family: initial
}

.navbar .title,
.navbar .title a {
    display: flex;
    align-items: center;
    cursor: pointer
}

.navbar .title a {
    color: var(--color-text)
}

.navbar .title a:hover {
    text-decoration: none
}

.navbar .subtitle {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1rem;
    margin-top: .3125rem;
    opacity: .8;
    color: #249ffd;
    letter-spacing: .0625rem;
    text-shadow: .0625rem .0625rem .0625rem hsla(0, 0%, 50.2%, .2)
}

.navbar .subtitle i {
    font-size: 1.25rem;
    margin-right: .3125rem
}

</style>