<template>
  <div class="user">
    <div class="search">
      <page-search :searchConfig="searchConfig"></page-search>
    </div>
    <div class="content">
      <xg-table :listData="userList" :propList="propList">
        <template #status="scope">
          <el-button>{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
        </template>
        <template #createAt="scope">
          {{ scope.row.createAt }}
        </template>
        <template #updateAt="scope">
          {{ scope.row.updateAt }}
        </template>
      </xg-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { searchConfig } from './config/search.config'
import PageSearch from '@/components/page-search/index'

import { useStore } from '@/store'

import XgTable from '@/base-ui/table/index'

export default defineComponent({
  components: { PageSearch, XgTable },
  name: 'user',
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      url: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '电话号码', minWidth: '120' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '256',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '256',
        slotName: 'updateAt'
      }
    ]

    return {
      searchConfig,
      userList,
      userCount,
      propList
    }
  }
})
</script>

<style lang="less" scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
