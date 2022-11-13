<template>
  <div class="role">
    <div class="search">
      <PageSearch :search-config="searchConfig"></PageSearch>
    </div>
    <div class="content">
      <page-content
        :content-table-config="contentTableConfig"
        page-name="role"
      ></page-content>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import { searchConfig } from './config/search.config'

export default defineComponent({
  name: 'role',
  components: { PageContent, PageSearch },
  setup() {
    return {
      contentTableConfig,
      searchConfig
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
