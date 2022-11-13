<template>
  <div class="user">
    <div class="search">
      <page-search
        :searchConfig="searchConfig"
        @reset="reset"
        @query="query"
      ></page-search>
    </div>
    <div class="content">
      <page-content
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="users"
      ></page-content>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { searchConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search/index'
import pageContent from '@/components/page-content'
import PageContent from '@/components/page-content'

import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  components: { PageSearch, pageContent },
  name: 'user',
  setup() {
    const [pageContentRef, reset, query] = usePageSearch()

    return {
      searchConfig,
      contentTableConfig,
      reset,
      query,
      pageContentRef
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
