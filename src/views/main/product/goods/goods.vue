<template>
  <div class="goods">
    <page-count :contentTableConfig="contentTableConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          fit="cover"
        />
      </template>
      <template #oldPrice="scope">
        {{ '￥' + scope.row.oldPrice }}
      </template>
    </page-count>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageCount from '@/components/page-content/index'

import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'goods',
  components: { PageCount },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
