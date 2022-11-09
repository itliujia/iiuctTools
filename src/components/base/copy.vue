<!--
 * @Descripttion: 复制组件
 * @version: 
 * @Author: 刘童鞋
 * @Date: 2022-11-09 22:24:34
 * @LastEditors: 刘童鞋
 * @LastEditTime: 2022-11-10 00:30:04
-->
<template>
    <el-tooltip class="box-item" effect="dark" content="复制" placement="top">
        <el-button size="small" icon="CopyDocument" circle v-copy="value" style="margin-left: 20px;" />
    </el-tooltip>
</template>
<script lang="ts" setup>
const props = defineProps({
    value: [String,Number]
})
</script>