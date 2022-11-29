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
        :otherInfo="otherInfo"
        pageName="role"
      >
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          class="menu-tree"
          @check="checkChange"
        >
        </el-tree>
      </page-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import { searchConfig } from './config/search.config'

import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/useModal'

import { useStore } from '@/store'
import { menuMapLeafKeys } from '@/utils/map-menus'
import { ElTree } from 'element-plus'

export default defineComponent({
  name: 'role',
  components: { PageContent, PageSearch, PageModal },
  setup() {
    //1.处理pageModal的hook 的 编辑回显tree
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (item: any) => {
      const leafList = menuMapLeafKeys(item.menuList)
      //elTree组件
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafList, false)
      })
      console.log(leafList)
    }

    //3.调用hook获取公共变量和函数
    const [pageModalRef, defaultInfo, create, edit] = usePageModal(
      undefined,
      editCallback
    )

    const store = useStore()

    //使用computed 来确保menus是响应式的
    const menus = computed(() => store.state.menu)

    const otherInfo = ref({})

    const checkChange = (checkedNodes: any, halfCheckedNodes: any) => {
      const checkKeys = halfCheckedNodes.checkedKeys
      const halfCheckedKeys = halfCheckedNodes.halfCheckedKeys
      const menuList = [...checkKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    return {
      contentTableConfig,
      searchConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      create,
      edit,
      menus,
      otherInfo,
      checkChange,
      elTreeRef
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
.menu-tree {
  margin-left: 20px;
}
</style>
