<template>
  <div>
    <xg-table :listData="userList" v-bind="contentTableConfig">
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
import { defineComponent, computed } from 'vue'
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

    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    return {
      userList,
      userCount
    }
  }
})
</script>
<style scoped></style>
