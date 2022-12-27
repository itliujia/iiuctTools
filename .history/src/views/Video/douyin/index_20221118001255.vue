
<!--
 * @Descripttion: 抖音视频解析
 * @version:
 * @Author: 刘童鞋
 * @Date: 2022-10-16 17:28:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-18 00:12:19
-->
<template>
    <Headers :isHomePage="true" />
    <div class="bilibili_cover_get view">
        <div main="" class="nya-container pt">
            <div class="nya-title">
                <span>抖音视频解析</span>
            </div><span class="nya-container-subtitle"></span>
            <form class="el-form nya-input-btn">
                <span class="nya-subtitle">请输入视频链接</span>
                <el-input v-model="vurl" placeholder="请输入视频分享链接" clearable class="input-with-select">
                    <template #append>
                        <el-button type="primary" @click="parse">开始解析</el-button>
                    </template>
                </el-input>
            </form>
        </div>
    </div>
    <div class="nya-container pt" v-if="result">
        <div class="nya-title">
            <span>解析结果</span>
        </div><span class="nya-container-subtitle"></span>
        <div v-loading="loading">
            <el-row>
                <el-col :lg="6" :xs="24" style="margin-right:10px;margin-top: 10px;">
                    <vue3VideoPlay v-bind="options" :poster='videoData.cover' />
                </el-col>
                <el-col :lg="16" :xs="24" style="margin-top: 10px;">
                    <el-descriptions :column="1" border>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    视频标题
                                </div>
                            </template>

                            {{ videoData.title }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    发布时间
                                </div>
                            </template>

                            {{ getLastTime(videoData.time) }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    视频作者
                                </div>
                            </template>

                            {{ videoData.author }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    视频主页
                                </div>
                            </template>
                            <!-- {{ videoData.like }} -->

                            <el-link type="primary" :href="'https://www.douyin.com/video/' + videoData.aweme_id"
                                target="_blank">抖音视频</el-link>

                        </el-descriptions-item>
                    </el-descriptions>

                </el-col>
            </el-row>
            <el-table :data="tableData" style="width: 100%;margin-top:20px">
                <el-table-column prop="date" label="类型">
                    <template #default="scope">
                        <el-tag :type="scope.row.type == 'mp4' ? 'success' : ''" disable-transitions>{{ scope.row.type
                        }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="时长">
                    <template #default="scope">
                        {{ formatDuring(scope.row.duration) }}

                    </template>
                </el-table-column>
                <el-table-column align="center" label="操作">
                    <template #default="scope">
                        <el-button-group>
                            <el-tooltip class="box-item" effect="dark" content="如果弹出新窗口，则按【Ctrl + S】键进行下载"
                                placement="top">
                                <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">
                                    <el-icon>
                                        <Download />
                                    </el-icon>
                                    下载
                                </el-button>
                            </el-tooltip>

                            <el-tooltip class="box-item" effect="dark" content="如果出现403异常，则在403页面刷新一下" placement="top">
                                <el-button type="warning" size="small" @click="handleView(scope.$index, scope.row)">
                                    <el-icon>
                                        <View />
                                    </el-icon>
                                    预览
                                </el-button>
                            </el-tooltip>
                        </el-button-group>

                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
    <div class="nya-container pt">
        <div class="nya-title">
            <span>官网</span>
        </div><span class="nya-container-subtitle"></span>
        <ul class="nya-list">
            <li>
                <el-link type="primary" href="https://www.douyin.com/" target="_blank">抖音视频</el-link>
            </li>
        </ul>
    </div>
    <div class="nya-container pt">
        <div class="nya-title">
            <span>支持视频链接格式</span>
        </div><span class="nya-container-subtitle"></span>
        <ul class="nya-list">
            <li>https://v.douyin.com/JxWkXxk/</li>
        </ul>
    </div>
    <div class="nya-container pt">
        <div class="nya-title">
            <span>说明</span>
        </div><span class="nya-container-subtitle"></span>
        <ul class="nya-list">
            <li>如果点击下载弹出新窗口，则按Ctrl + S进行下载</li>
            <li>下载视频版权归&nbsp;&nbsp;<el-tag>抖音</el-tag>&nbsp;&nbsp;所有，本站不提供任何资源存储、版权服务</li>

        </ul>
    </div>
</template>

<script lang="ts" setup>

import Headers from '../../../components/Header.vue'
import { ref, reactive } from 'vue'
import { Download, View } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

import { getLastTime, formatDuring } from '../../../utils/time'
import axios from 'axios'

import api from '../../../api/index'


getLastTime
formatDuring

const options = reactive({
    width: '100%',
    height: '100%',
    color: "#409eff",
    src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4",
    muted: false,
    webFullScreen: false,
    autoPlay: false,
    loop: false,
    mirror: false,
    ligthOff: false,
    volume: 0.3,
    control: false
})

let vurl = ref(''), result = ref(false), loading = ref(true), videoData = ref({}), tableData = ref([])


let handleEdit = (a: any, b: any) => {
    console.log(a, b);
    // window.open(b.url)
    download(b.url, b.title, b.type)


}

let handleView = (a: any, b: any) => {
    window.open(b.url)

}

let download = (fileUrl: string, title: string, type: string) => {
    //   var fileUrl = 'http://172.18.124.46:8886/dataExport/downloadSampledata'
    axios({
        method: 'get',
        url: fileUrl,
        responseType: 'blob'  // 二进制流文件
    }).then(res => {
        const link = document.createElement('a')
        const blob = new Blob([res.data], { type: 'application/vnd.ms-excel' })
        link.style.display = 'none'
        link.href = URL.createObjectURL(blob)
        link.setAttribute('download', `${title}.${type}`)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }).catch(req => { console.log('error' + req) })
}



let parse = () => {
    let regex = /http[s]?:\/\/[\w.]+[\w\/]*[\w.]*\??[\w=&:\-\+\%]*[/]*/;
    if (vurl.value.match(regex)) {
        var videoUrl = vurl.value.match(regex)?.[0];
        result.value = true
        api.getVedio({ videoUrl })?.then((res: any) => {
            if (res.code) {
                videoData.value = res.data.data
                loading.value = false
                options.src = res.data.data.url
                tableData.value = res.data.data.datalist
            }
        })

    } else {
        ElMessage.error('你输入的链接有误，没有识别到抖音链接.')
    }



}





window.scrollTo(0, 0)//强制让页面回到顶部

</script>