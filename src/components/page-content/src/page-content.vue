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

      <!-- 定制的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <!-- 这个地方slot 接受放入pageContent内的插槽，slot 将会插入到xg-table组件里面去-->
        <!-- name是不确定的 ,通过row 把这里接受到的数据返回出去-->
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
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
    //1.双向绑定pageInfo
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    //page 发生改变的时候，重新请求数据
    watch(pageInfo, () => getList())

    //2.发送ajax
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

    //3.从store中获取数据
    const dataList = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters['system/pageListCount'](props.pageName)
    )

    //4. 获取其他的动态插槽名称
    const otherPropSlots = props.contentTableConfig.propList.filter(
      (item: any) => {
        if (item.slotName == 'status') return false
        if (item.slotName == 'createAt') return false
        if (item.slotName == 'updateAt') return false
        if (item.slotName == 'handler') return false
        return true
      }
    )

    return {
      dataList,
      dataCount,
      getList,
      pageInfo,
      otherPropSlots
    }
  }
})
</script>
<style scoped></style>
