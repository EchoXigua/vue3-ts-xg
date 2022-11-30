<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <xg-card title="分类商品数量（饼图）"></xg-card>
      </el-col>
      <el-col :span="10">
        <xg-card title="不同城市商品销量"></xg-card>
      </el-col>
      <el-col :span="7">
        <xg-card title="分类商品数量（玫瑰图）"></xg-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="row">
      <el-col :span="12">
        <xg-card title="分类商品的销量"></xg-card>
      </el-col>
      <el-col :span="12">
        <xg-card title="分类商品的收藏"></xg-card>
      </el-col>
    </el-row>
    <div ref="divRef" :style="{ widht: '200px', height: '300px' }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

import XgCard from '@/base-ui/card'

import * as echarts from 'echarts'

import { useStore } from 'vuex'

export default defineComponent({
  name: 'dashboard',
  components: { XgCard },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')

    // //初始化echarts
    // const divRef = ref<HTMLElement>()
    // onMounted(() => {
    //   const echartsInstance = echarts.init(divRef.value!)
    //   const option = {
    //     title: {
    //       text: 'ECharts 入门示例'
    //     },
    //     tooltip: {},
    //     legend: {
    //       data: ['销量']
    //     },
    //     xAxis: {
    //       data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    //     },
    //     yAxis: {},
    //     series: [
    //       {
    //         name: '销量',
    //         type: 'bar',
    //         data: [5, 20, 36, 10, 10, 20]
    //       }
    //     ]
    //   }

    //   echartsInstance.setOption(option)
    // })

    return {
      // divRef
    }
  }
})
</script>

<style scoped>
.row {
  margin-top: 20px;
}
</style>
