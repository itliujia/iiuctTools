
<!--
 * @Descripttion: 抖音视频解析
 * @version: 
 * @Author: 刘童鞋
 * @Date: 2022-10-16 17:28:02
 * @LastEditors: 刘童鞋
 * @LastEditTime: 2022-11-05 01:17:45
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
                <el-input v-model="URL" placeholder="请输入视频分享链接" class="input-with-select">
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
                    <!-- <el-image style="height: 100%"
                    src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" fit="cover" /> -->
                    <vue3VideoPlay v-bind="options"
                        :poster='videoData.cover' />
                </el-col>
                <el-col :lg="16" :xs="24" style="margin-top: 10px;">
                    <el-descriptions :column="1" border>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    标题
                                </div>
                            </template>

                            {{videoData.title}}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    描述
                                </div>
                            </template>

                            18100000000
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    作者
                                </div>
                            </template>

                            {{videoData.author}}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label>
                                <div class="cell-item">
                                    封面图片
                                </div>
                            </template>
                            <el-link :href="videoData.cover" target="_blank">
                                {{videoData.cover}}</el-link>
                        </el-descriptions-item>
                    </el-descriptions>

                </el-col>
            </el-row>
            <el-table :data="tableData" style="width: 100%;margin-top:20px">
                <el-table-column prop="date" label="类型">
                    <template #default="scope">
                        <el-tag type="success" disable-transitions>mp4
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="清晰度">
                    <template #default="scope">
                        <el-tag type="success" disable-transitions>720p
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="操作">
                    <template #default="scope">
                        <el-tooltip class="box-item" effect="dark" content="下载（注意事项：如果弹出新窗口，则按【Ctrl + S】键进行下载）"
                            placement="top">
                            <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">
                                <el-icon>
                                    <Download />
                                </el-icon>
                            </el-button>
                        </el-tooltip>
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
            <li>https://v.douyin.com/JxWkXxk/（手机分享链接）</li>
            <li>https://www.iesdouyin.com/share/video/6896035081186561280/?region=CN&mid=6888927402480061197&u_code=0
            </li>
            <li>https://www.douyin.com/video/7098316607067311393</li>
            <li>https://www.douyin.com/discover?enter=guide&modal_id=7061481651523587363</li>
            <li>https://www.douyin.com/user/MS4wLjABAAAA7utrZynvVjHZlU4iiy-3FLpNBgzXZmDROVtz6jZOSV0?modal_id=6994135003496074527
            </li>
            <li>https://www.douyin.com/hot?modal_id=7144638324991348003</li>
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

import Headers from '@/components/Header.vue'
import { ref, reactive,onMounted } from 'vue'
import { Download } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

import axios from 'axios'





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

let URL = ref('111111111'), result = ref(false), loading = ref(true),videoData=ref({})

let parse = () => {
    let regex = /http[s]?:\/\/[\w.]+[\w\/]*[\w.]*\??[\w=&:\-\+\%]*[/]*/;
    if(URL.value.match(regex)){
        var videoUrl =  URL.value.match(regex)[0];


        axios.get('/api/video/videoDate',{params:{videoUrl}}).then(
					response => {
						console.log('请求成功了',response.data)
                       videoData.value= response.data.data.data
                       loading.value=false
                        result.value = true
                        options.src=response.data.data.data.url
					},
					error => {
						console.log('请求失败了',error.message)
					}
				)



       


      

  
        
    }else{
        ElMessage.error('你输入的链接有误，没有识别到抖音链接.')
    }
    
    
   
}

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    }
]



window.scrollTo(0, 0)//强制让页面回到顶部

</script>