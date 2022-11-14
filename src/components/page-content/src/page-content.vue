<template>
  <div>
    <xg-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- v-model:page  起别名 -->
      <template #headerHandle>
        <el-button type="primary">新建用户</el-button>
      </template>

      <!-- 列插槽 -->
      <template #status="scope">
        <el-button
          size="small"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        {{ $filter.formatTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filter.formatTime(scope.row.updateAt) }}
      </template>
      <template #action>
        <div class="btns">
          <el-button size="small" type="primary" link>
            <el-icon>
              <Edit />
            </el-icon>
            编辑</el-button
          >
          <el-button size="small" type="primary" link>
            <el-icon> <Delete /> </el-icon>删除</el-button
          >
        </div>
      </template>
    </xg-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import XgTable from '@/base-ui/table/index'
import { Delete, Edit } from '@element-plus/icons-vue'
import { useStore } from '@/store'

export default defineComponent({
  components: { XgTable, Delete, Edit },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()

    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    //page 发生改变的时候，重新请求数据
    watch(pageInfo, () => getList())

    const getList = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset:
            pageInfo.value.currentPage == 0
              ? pageInfo.value.currentPage * pageInfo.value.pageSize
              : (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getList()

    const dataList = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters['system/pageListCount'](props.pageName)
    )

    return {
      dataList,
      dataCount,
      getList,
      pageInfo
    }
  }
})
</script>
<style scoped></style>
