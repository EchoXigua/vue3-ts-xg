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
        :modalConfig="modalConfigRef"
        pageName="users"
      ></page-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { searchConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search/index'
import pageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { usePageSearch } from '@/hooks/usePageSearch'
import { modalConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/useModal'

import { useStore } from '@/store'

export default defineComponent({
  components: { PageSearch, pageContent, PageModal },
  name: 'user',
  setup() {
    const [pageContentRef, reset, query] = usePageSearch()

    const createNew = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field == 'password'
      )
      passwordItem!.isHidden = false
    }

    const editNew = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field == 'password'
      )
      passwordItem!.isHidden = true
    }

    //2.动态添加部门和角色管理
    const store = useStore()

    /**
     * 这个地方利用computed来达到响应式处理
     */
    const modalConfigRef = computed(() => {
      const departItem = modalConfig.formItems.find(
        (item) => item.field == 'departmentId'
      )
      departItem!.options = store.state.department.map((item) => {
        return {
          label: item.name,
          value: item.id
        }
      })

      const roleItem = modalConfig.formItems.find(
        (item) => item.field == 'roleId'
      )
      // console.log('role', store.state.role)
      /**role 会打印两次，第一次是空的，第二次store里面的role发生变化后，
       * 这里的computed 会重新计算
       *
       */

      roleItem!.options = store.state.role.map((item) => {
        return {
          label: item.name,
          value: item.id
        }
      })

      return modalConfig
    })

    //3.调用hook获取公共变量和函数
    const [pageModalRef, defaultInfo, create, edit] = usePageModal(
      createNew,
      editNew
    )

    return {
      searchConfig,
      contentTableConfig,
      reset,
      query,
      pageContentRef,
      modalConfigRef,
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
