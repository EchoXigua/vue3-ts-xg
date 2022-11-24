<template>
  <div class="role">
    <div class="search">
      <PageSearch :search-config="searchConfig"></PageSearch>
    </div>
    <div class="content">
      <page-content
        :content-table-config="contentTableConfig"
        page-name="role"
        @create="create"
        @edit="edit"
      ></page-content>
      <page-modal
        ref="pageModalRef"
        :defaultInfo="defaultInfo"
        :modalConfig="modalConfig"
        pageName="role"
      ></page-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import { searchConfig } from './config/search.config'

import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/useModal'

export default defineComponent({
  name: 'role',
  components: { PageContent, PageSearch, PageModal },
  setup() {
    //3.调用hook获取公共变量和函数
    const [pageModalRef, defaultInfo, create, edit] = usePageModal()

    return {
      contentTableConfig,
      searchConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      create,
      edit
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
