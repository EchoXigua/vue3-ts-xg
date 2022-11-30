<template>
  <div class="line-echart">
    <base-echart :option="option"></base-echart>
  </div>
</template>
<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue'
import BaseEchart from '@/base-ui/echart'

const props = withDefaults(
  defineProps<{
    title?: string
    xLabels: string[]
    value: any[]
  }>(),
  {
    title: ''
  }
)

const option = computed(() => {
  return {
    title: {
      text: props.title
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    // legend: {
    //   data: ['邮件营销', '联盟广告', '视频广告', '邮件营销', '邮件营销']
    // },
    toolbox: {
      //工具栏
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.xLabels
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],

    series: [
      {
        name: '分类销量',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: props.value
      }
    ]
  }
})
</script>
<style scoped></style>
