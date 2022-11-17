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
        @create="create"
        @edit="edit"
      ></page-content>
      <page-modal
        ref="pageModalRef"
        :defaultInfo="defaultInfo"
        :modalConfig="modalConfig"
      ></page-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { searchConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search/index'
import pageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { usePageSearch } from '@/hooks/usePageSearch'
import { modalConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/useModal'

export default defineComponent({
  components: { PageSearch, pageContent, PageModal },
  name: 'user',
  setup() {
    const [pageContentRef, reset, query] = usePageSearch()

    const [pageModalRef, defaultInfo, create, edit] = usePageModal()

    return {
      searchConfig,
      contentTableConfig,
      reset,
      query,
      pageContentRef,
      modalConfig,
      create,
      edit,
      pageModalRef,
      defaultInfo
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
