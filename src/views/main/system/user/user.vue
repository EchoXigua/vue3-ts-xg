<template>
  <div class="user">
    <div class="search">
      <page-search :searchConfig="searchConfig"></page-search>
    </div>
    <div class="content">
      <page-content
        :contentTableConfig="contentTableConfig"
        pageName="user"
      ></page-content>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search/index'
import pageContent from '@/components/page-content'

export default defineComponent({
  components: { PageSearch, pageContent },
  name: 'user',
  setup() {
    return {
      searchConfig,
      contentTableConfig
    }
  }
})
</script>

<style lang="less" scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
.btns {
  display: flex;
}
</style>
