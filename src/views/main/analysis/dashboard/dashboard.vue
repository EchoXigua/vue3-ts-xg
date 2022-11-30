<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <xg-card title="分类商品数量（饼图）">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </xg-card>
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
        <xg-card title="分类商品的销量">
          <base-echart :option="option"></base-echart>
        </xg-card>
      </el-col>
      <el-col :span="12">
        <xg-card title="分类商品的收藏"></xg-card>
      </el-col>
    </el-row>
    <div ref="divRef" :style="{ widht: '200px', height: '300px' }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import XgCard from '@/base-ui/card'
import { PieEchart } from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: { XgCard, PieEchart },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')

    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    return {
      categoryGoodsCount
    }
  }
})
</script>

<style scoped>
.row {
  margin-top: 20px;
}
</style>
