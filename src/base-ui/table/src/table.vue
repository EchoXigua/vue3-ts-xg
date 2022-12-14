<template>
  <div class="xg-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="header-handle">
          <slot name="headerHandle"></slot>
        </div>
      </slot>
    </div>
    <div></div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectionColumn"
        type="selection"
        width="80"
        align="center"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        width="80"
        label="序号"
        align="center"
      ></el-table-column>

      <template v-for="item in propList" :key="item.prop">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="sizeChange"
          @current-change="currentChange"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30, 40]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        />
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    listData: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      default: 0
    },
    propList: {
      type: Array,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectionColumn: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    const handleSelectChange = (value: any) => {
      emit('selectionChange', value)
      console.log(value)
    }

    const sizeChange = (pageSize: number) => {
      //覆盖pageSize
      emit('update:page', { ...props.page, pageSize })
    }

    const currentChange = (currentPage: number) => {
      //覆盖currentPage
      emit('update:page', { ...props.page, currentPage })
    }
    return {
      handleSelectChange,
      sizeChange,
      currentChange
    }
  }
})
</script>
<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  .title {
    text-align: left;
    padding: 10px;
  }
}
.footer {
  display: flex;
  justify-content: flex-end;
  text-align: right;
  padding: 10px;
}
</style>
