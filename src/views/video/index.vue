<!--
 * @Descripttion: 
 * @version: 
 * @Author: 刘童鞋
 * @Date: 2022-10-16 17:28:02
 * @LastEditors: 刘童鞋
 * @LastEditTime: 2022-10-16 19:26:41
-->
<template>
    <Headers :isHomePage="true" />
    <div class="bilibili_cover_get view">
        <div main="" class="nya-container pt">
            <div class="nya-title">
                <span>哔哩哔哩封面获取</span>
            </div><span class="nya-container-subtitle"></span>
            <form class="el-form nya-input-btn"><span class="nya-subtitle">请输入视频链接</span>
                <div class="el-form-item is-required">
                    <div class="el-form-item__content">
                        <div class="el-input el-input-group el-input-group--append el-input--suffix">
                            <input autocomplete="off" autofocus=""
                                placeholder="https://www.bilibili.com/video/av43714415" class="el-input__inner">
                            <div class="el-input-group__append"><button type="button"
                                    class="el-button el-button--default">
                                    <span>
                                        开始获取
                                    </span>
                                </button></div>
                        </div>

                    </div>
                </div>
            </form>
        </div>

    </div>

    <div class="nya-container pt">
        <div class="nya-title">
            <span>说明</span>
        </div><span class="nya-container-subtitle"></span>
        <ul class="nya-list">
            <li>主要用于手机端浏览器无法查看源码的情况下使用</li>
            <li>暂时只支持HTML的格式化</li>
        </ul>
    </div>

</template>

<script lang="ts" setup>
import Headers from '@/components/Header.vue'

</script>