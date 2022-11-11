<!--
 * @Description: RGB转化
 * @Author: Liu Jia
 * @Date: 2022-11-06 23:44:33
 * @LastEditTime: 2022-11-12 02:23:53
-->
<template>
  <Headers :isHomePage="true" />
  <div class="bilibili_cover_get view">
    <div main="" class="nya-container pt">
      <div class="nya-title">
        <span>RGB转换</span>
      </div>
      <span class="nya-container-subtitle"></span>
      <form class="el-form nya-input-btn">
        <span class="nya-subtitle mt20">RGB颜色值 → 16进制颜色码</span>
        <el-input
          v-model="inputRgb"
          placeholder="请输入RGB颜色值，如rgb(0,0,0)"
          clearable
          class="input-with-select"
        >
          <template #append>
            <el-button type="primary" @click="handleRgbToHex"
              >开始转换</el-button
            >
          </template>
        </el-input>
        <template v-if="result1">
          <span class="nya-subtitle result1">16进制颜色码：</span>
          <el-button :color="transformedHex"> </el-button>
          <el-tag style="margin-left: 10px">{{ transformedHex }}</el-tag>
          <vcopy :value="transformedHex" />
        </template>
        <el-divider />
        <span class="nya-subtitle mt20">16进制颜色码 → RGB颜色值</span>
        <el-input
          v-model="inputColor"
          placeholder="请输入16进制颜色码，如#000000"
          clearable
          class="input-with-select"
        >
          <template #append>
            <el-button type="primary" @click="handleHexToRgb"
              >开始转换</el-button
            >
          </template>
        </el-input>
        <template v-if="result2">
          <span class="nya-subtitle result1">RGB颜色值：</span>
          <el-button :color="transformedRgb"> </el-button>
          <el-tag style="margin-left: 10px">{{ transformedRgb }}</el-tag>
          <vcopy :value="transformedRgb" />
        </template>
      </form>
    </div>
  </div>

  <div class="nya-container pt">
    <div class="nya-title">
      <span>颜色码对照表</span>
    </div>
    <span class="nya-container-subtitle"></span>
    <el-table
      :data="colorData.colorArr"
      border
      style="width: 100%"
      size="small"
    >
      <el-table-column label="#" type="index" width="40" align="center" />

      <el-table-column label="颜色" width="50" align="center">
        <template #default="scope">
          <el-button :color="scope.row.hex" size="small" />
        </template>
      </el-table-column>
      <el-table-column prop="englishName" label="英文代码" />
      <el-table-column prop="dsc" label="形象描述" />
      <el-table-column prop="hex" label="16进制" />
      <el-table-column prop="rgb" label="RGB" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import Headers from "@/components/Header.vue";
import { ref } from "vue";
import colorData from "./color";

let inputRgb = ref(""),
  inputColor = ref(""),
  result1 = ref(false),
  transformedHex = ref(),
  result2 = ref(false),
  transformedRgb = ref("");

let handleRgbToHex = () => {
  transformedHex.value = rgbToHex();
  result1.value = true;
};

let rgbToHex = () => {
  var values = inputRgb.value
    .replace(/rgba?\(/, "")
    .replace(/\)/, "")
    .replace(/[\s+]/g, "")
    .split(",");

  var a = parseFloat(values[3] || 1),
    r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
    g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
    b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
  return (
    "#" +
    ("0" + r.toString(16)).slice(-2) +
    ("0" + g.toString(16)).slice(-2) +
    ("0" + b.toString(16)).slice(-2)
  );
};

let handleHexToRgb = () => {
  let a = transRgb();
  transformedRgb.value = a;

  result2.value = true;
  console.log(a);
};

let transRgb = () => {
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  var sColor = inputColor.value.toLowerCase();
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
};

window.scrollTo(0, 0); //强制让页面回到顶部
</script>
