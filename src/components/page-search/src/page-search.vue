<template>
  <div class="page-search">
    <xg-form v-bind="searchConfig" v-model="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="footer">
          <el-button @click="reset">重置</el-button>
          <el-button type="primary" @click="query">搜索</el-button>
        </div>
      </template>
    </xg-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import XgForm from '@/base-ui/form/index'

export default defineComponent({
  props: {
    searchConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['reset', 'query'],
  components: { XgForm },
  setup(props, { emit }) {
    const formItems = props.searchConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    const reset = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
      emit('reset')
    }

    const query = () => {
      emit('query', formData.value)
    }
    return {
      formData,
      reset,
      query
    }
  }
})
</script>
<style lang="less" scoped>
.header {
  text-align: center;
}
.footer {
  text-align: right;
  padding: 20px 50px;
}
</style>
