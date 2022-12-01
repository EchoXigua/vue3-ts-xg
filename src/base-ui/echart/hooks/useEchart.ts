import * as echarts from 'echarts'

import ChinaMapData from '../data/china.json'
echarts.registerMap('china', ChinaMapData)

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)

  const setOption = (option: echarts.EChartsOption) => {
    echartInstance.setOption(option)
  }

  const updateSize = () => {
    echartInstance.resize() //echart 实例身上的方法
  }

  //浏览器高度和宽度发生变化触发
  window.addEventListener('resize', () => {
    echartInstance.resize() //echart 实例身上的方法
  })

  return {
    echartInstance,
    setOption,
    updateSize
  }
}
