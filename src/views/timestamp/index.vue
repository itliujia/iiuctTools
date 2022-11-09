<!--
 * @Descripttion: 抖音视频解析
 * @version: 
 * @Author: 刘童鞋
 * @Date: 2022-10-16 17:28:02
 * @LastEditors: 刘童鞋
 * @LastEditTime: 2022-11-10 00:38:33
-->
<template>
    <Headers :isHomePage="true" />
    <div class="bilibili_cover_get view">
        <div main="" class="nya-container pt">
            <div class="nya-title">
                <span>时间戳转换</span>
            </div>
            <span class="nya-container-subtitle"></span>
            <form class="el-form nya-input-btn">
                <el-switch v-model="isms" size="large" inline-prompt active-text="秒" inactive-text="豪秒" />
                <span class="nya-subtitle" style="margin-top: 20px" v-if="currentTime">当前时间：<el-tag>{{ currentTime }}
                    </el-tag>
                </span>
                <span class="nya-subtitle" style="margin-top: 20px" v-if="currentTimestamp">当前时间戳：<el-tag>{{
                        currentTimestamp
                }}</el-tag>
                    <vcopy :value="currentTimestamp" />
                </span>
            </form>
        </div>


        <div main="" class="nya-container pt">
            <div class="nya-title">
                <span>日期 → （北京）时间戳</span>
            </div>
            <span class="nya-container-subtitle"></span>
            <form class="el-form nya-input-btn">
                <el-row style="font-weight: 700 !important;">
                    <el-col :lg="6" :xs="24">
                        <el-config-provider :locale="zhCn">
                            <el-date-picker v-model="checkedTime" type="datetime" placeholder="请选择时间"
                                format="YYYY/MM/DD hh:mm:ss" value-format="x" @change="handleSelectTime" />
                        </el-config-provider>

                    </el-col>
                    <el-col :lg="1" :xs="24">
                        <div style="margin-top: 10px;"></div>
                    </el-col>
                    <el-col :lg="12" :xs="24">
                        <template v-if="checkedTimestamp">
                            <el-tag>{{ checkedTimestamp }}</el-tag>
                            <vcopy :value="checkedTimestamp" />
                        </template>
                    </el-col>
                </el-row>


            </form>
        </div>


        <div main="" class="nya-container pt">
            <div class="nya-title">
                <span>时间戳 → （北京）日期</span>
            </div>
            <span class="nya-container-subtitle"></span>
            <form class="el-form nya-input-btn">
                <el-row style="font-weight: 700 !important;">


                    <el-col :lg="6" :xs="24">
                        <el-input v-model="inputTimestamp" placeholder="请输入时间戳" clearable class="input-with-select" />
                    </el-col>
                    <el-col :lg="1" :xs="24">
                        <div style="margin-top: 10px;"></div>

                    </el-col>
                    <el-col :lg="6" :xs="24">

                        <el-tag v-if="inputTimestamp">{{ inputTime }}
                        </el-tag>
                    </el-col>
                </el-row>
            </form>
        </div>

        <div class="nya-container pt">
            <div class="nya-title">
                <span>关于时间戳</span>
            </div><span class="nya-container-subtitle"></span>
            <ul class="nya-list">
                <li>Unix 时间戳是从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数，不考虑闰秒。</li>
                <li>Unix 时间戳（英文为 Unix epoch, Unix time, POSIX time 或 Unix timestamp）</li>
                <li>UNIX时间戳的 0 按照 ISO 8601 规范为 ：1970-01-01T00:00:00Z.</li>
                <li>一个小时表示为UNIX时间戳格式为：3600秒；一天表示为UNIX时间戳为86400秒，闰秒不计算。</li>
                <li>在大多数的 Unix 系统中 Unix 时间戳存储为 32 位，这样会引发 2038 年问题或 Y2038。</li>

            </ul>
        </div>

    </div>
</template>

<script lang="ts" setup>
import Headers from "@/components/Header.vue";
import { computed, ref, watch, onBeforeUnmount } from "vue";
import { getLastTime, getNowTime } from '@/utils/time'

import zhCn from "element-plus/lib/locale/lang/zh-cn"

getLastTime

let currentTimestamp = ref(0),
    isms = ref(false),
    currentTime = ref(""),
    checkedTime = ref(0),
    inputTimestamp = ref(''),
    checkedTimestamp = ref(0)

const inputTime = computed(() => {
    if (inputTimestamp.value.length == 13) {
        let a = Math.floor(Number(inputTimestamp.value) / 1000)
        return getLastTime(a)
    }
    return getLastTime(Number(inputTimestamp.value))
})

watch(isms, async (newVal) => {
    console.log(newVal)
    getTime(), handleSelectTime()
})

let getTime = () => {
    currentTimestamp.value = new Date().valueOf();
    if (isms.value) {
        currentTimestamp.value = Math.floor(currentTimestamp.value / 1000)
    }
    currentTime.value = getNowTime()
};

let handleSelectTime = () => {
    checkedTimestamp.value = checkedTime.value
    if (isms.value) {
        checkedTimestamp.value = Math.floor(checkedTime.value / 1000)
    }
}

let timer = setInterval(getTime, 500)

onBeforeUnmount(() => {
    clearInterval(timer)
})

window.scrollTo(0, 0); //强制让页面回到顶部
</script>
