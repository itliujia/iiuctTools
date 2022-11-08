<!--
 * @Descripttion: 抖音视频解析
 * @version: 
 * @Author: 刘童鞋
 * @Date: 2022-10-16 17:28:02
 * @LastEditors: 刘童鞋
 * @LastEditTime: 2022-11-09 01:02:16
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
                <span class="nya-subtitle" style="margin-top: 20px">当前时间：<el-tag>{{ currentTime }}</el-tag>
                </span>
                <span class="nya-subtitle" style="margin-top: 20px">当前时间戳：<el-tag>{{ timestamp }}</el-tag>
                </span>
            </form>
        </div>


        <div main="" class="nya-container pt">
            <div class="nya-title">
                <span>日期 → （北京）时间戳</span>
            </div>
            <span class="nya-container-subtitle"></span>
            <form class="el-form nya-input-btn">
                <el-date-picker v-model="time1" type="datetime" placeholder="请选择时间" format="YYYY/MM/DD hh:mm:ss"
                    value-format="x"  @change="handleSelectTime"/>
                <el-tag style="margin-left: 50px;" v-if="time1">{{ timestamp1 }}</el-tag>
            </form>
        </div>


        <div main="" class="nya-container pt">
            <div class="nya-title">
                <span>时间戳 → （北京）日期</span>
            </div>
            <span class="nya-container-subtitle"></span>
            <form class="el-form nya-input-btn">
                <el-input v-model="timestamp2" placeholder="请输入时间戳" clearable class="input-with-select" style="width: 25%;"/>
                <el-tag style="margin-left: 50px;" v-if="timestamp2">{{ getLastTime(timestamp2)}}</el-tag>
                
            </form>
        </div>

    </div>
</template>

<script lang="ts" setup>
import Headers from "@/components/Header.vue";
import { ref, reactive, onMounted } from "vue";
import { Download } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
// import time from "@/utils/time"
import { getLastTime, formatDuring } from '@/utils/time'

getLastTime
let timestamp = ref(0),
    isms = ref(false),
    currentTime = ref(""),
    time1=ref(0),
    timestamp2=ref(''),
    timestamp1=ref(0)

let getTime = () => {
    timestamp.value = new Date().valueOf();
    if (isms.value) {
        timestamp.value = Math.floor(timestamp.value / 1000);
    }
    dateShow();
};

let handleSelectTime=()=>{
    timestamp1.value = time1.value
    if (isms.value) {
        timestamp1.value = Math.floor(time1.value / 1000);
    }
}

let dateShow = () => {
    var date = new Date(); // 当前日期时间
    var year = date.getFullYear(); // 年份
    var month = ("0" + (date.getMonth() + 1)).slice(-2); // 月份+1
    var day = ("0" + date.getDate()).slice(-2); // 日
    var hour = ("0" + date.getHours()).slice(-2); // 小时
    var minute = ("0" + date.getMinutes()).slice(-2); // 分钟
    var second = ("0" + date.getSeconds()).slice(-2); // 秒数
    var millisecond = ("000" + date.getMilliseconds()).slice(-3); // 毫秒数0-999

    var wekday = date.getDay();

    var wekdate = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
    ];

    currentTime.value =
        year +
        "年" +
        month +
        "月" +
        day +
        "日 " +
        hour +
        ":" +
        minute +
        ":" +
        second +
        " " +
        wekdate[wekday];
};

let timer = setInterval(getTime, 1000);

window.scrollTo(0, 0); //强制让页面回到顶部
</script>
