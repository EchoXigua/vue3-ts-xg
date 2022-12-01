<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <xg-card title="分类商品数量（饼图）">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </xg-card>
      </el-col>
      <el-col :span="10">
        <xg-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </xg-card>
      </el-col>
      <el-col :span="7">
        <xg-card title="分类商品数量（玫瑰图）">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </xg-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="row">
      <el-col :span="12">
        <xg-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </xg-card>
      </el-col>
      <el-col :span="12">
        <xg-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </xg-card>
      </el-col>
    </el-row>
    <div ref="divRef" :style="{ widht: '200px', height: '300px' }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import XgCard from '@/base-ui/card'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    XgCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore()
    //请求数据
    store.dispatch('dashboard/getDashboardDataAction')

    //获取数量
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const value: any[] = []
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        value.push(item.goodsCount)
      }
      return {
        xLabels,
        value
      }
    })

    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const value: any[] = []
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        value.push(item.goodsFavor)
      }
      return {
        xLabels,
        value
      }
    })

    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return {
          name: item.address,
          value: item.count
        }
      })
    })
    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped>
.row {
  margin-top: 20px;
}
</style>
