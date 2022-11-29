<template>
  <div class="dashboard">
    <div ref="divRef" :style="{ widht: '200px', height: '300px' }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

import * as echarts from 'echarts'

export default defineComponent({
  name: 'dashboard',
  setup() {
    //初始化echarts
    const divRef = ref<HTMLElement>()
    onMounted(() => {
      const echartsInstance = echarts.init(divRef.value!)
      const option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }

      echartsInstance.setOption(option)
    })

    return {
      divRef
    }
  }
})
</script>

<style scoped></style>
