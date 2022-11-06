
<!--
 * @Descripttion: 抖音视频解析
 * @version: 
 * @Author: 刘童鞋
 * @Date: 2022-10-16 17:28:02
 * @LastEditors: 刘童鞋
 * @LastEditTime: 2022-11-07 00:23:46
-->
<template>
    <Headers :isHomePage="true" />
    <div class="bilibili_cover_get view">
        <div main="" class="nya-container pt">
            <div class="nya-title">
                <span>RGB颜色值转换成十六进制颜色码</span>
            </div><span class="nya-container-subtitle"></span>
            <form class="el-form nya-input-btn">
                <span class="nya-subtitle">请输入RGB颜色值</span>
                <el-input v-model="rgbv" placeholder="请输入RGB颜色值" class="input-with-select">
                    <template #append>
                        <el-button type="primary" @click="colorRGBtoHex">开始转换</el-button>
                    </template>
                </el-input>
                <template v-if="result">
                    <span class="nya-subtitle" style="margin-top: 20px;">十六进制颜色码：</span>
                <el-button :color="we" > </el-button>
                <el-tag  style="margin-left: 10px">{{we}}</el-tag>
                </template>
               
            </form>
        </div>

        <div main="" class="nya-container pt">
            <div class="nya-title">
                <span>十六进制颜色码转换成RGB颜色值</span>
            </div><span class="nya-container-subtitle"></span>
            <form class="el-form nya-input-btn">
                <span class="nya-subtitle">请输入十六进制颜色码</span>
                <el-input v-model="color" placeholder="请输入十六进制颜色码" class="input-with-select">
                    <template #append>
                        <el-button type="primary" @click="a">开始转换</el-button>
                    </template>
                </el-input>
                <template v-if="resultvv">
                    <span class="nya-subtitle" style="margin-top: 20px;">RGB颜色值：</span>
                <el-button :color="rgbvv" > </el-button>
                <el-tag  style="margin-left: 10px">{{rgbvv}}</el-tag>
                </template>

            </form>
        </div>


    </div>
   
    <!-- <div class="nya-container pt">
        <div class="nya-title">
            <span>说明</span>
        </div><span class="nya-container-subtitle"></span>
        <ul class="nya-list">
            <li>如果点击下载弹出新窗口，则按Ctrl + S进行下载</li>
            <li>下载视频版权归&nbsp;&nbsp;<el-tag>抖音</el-tag>&nbsp;&nbsp;所有，本站不提供任何资源存储、版权服务</li>

        </ul>
    </div> -->
</template>

<script lang="ts" setup>

import Headers from '@/components/Header.vue'
import { ref, reactive,onMounted } from 'vue'
import { Download } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'


let rgbv = ref(''),color=ref(''), result = ref(false), loading = ref(true),videoData=ref({}),we=ref(),resultvv=ref(false),rgbvv=ref('')



let colorRGBtoHex = () =>
{
    // var rgb = rgbv.value.split(',');
    // var r = parseInt(rgb[0].split('(')[1]);
    // var g = parseInt(rgb[1]);
    // var b = parseInt(rgb[2].split(')')[0]);
    // var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    we.value=rgbToHex()
    result.value=true
    // console.log(hex);
    
    // return hex;
}



let rgbToHex=()=> {
    var values = rgbv.value
      .replace(/rgba?\(/, '')
      .replace(/\)/, '')
      .replace(/[\s+]/g, '')
      .split(',');
    var a = parseFloat(values[3] || 1),
      r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
      g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
      b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
    return "#" +
      ("0" + r.toString(16)).slice(-2) +
      ("0" + g.toString(16)).slice(-2) +
      ("0" + b.toString(16)).slice(-2);
  }









let a=()=>{
    let a =transRgb()
    rgbvv.value=a

    resultvv.value=true
    console.log(a);
    
}


let transRgb=()=> {
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var sColor = color.value.toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        var sColorNew = "#";
        for (var i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      //处理六位的颜色值
      var sColorChange = [];
      for (var i = 1; i <= 6; i += 2) {
        sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
      }
      return "rgba(" + sColorChange.join(",") + ")";
    } else {
      return sColor;
    }
  }







window.scrollTo(0, 0)//强制让页面回到顶部

</script>