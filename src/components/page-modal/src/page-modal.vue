<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      title="提示"
      width="30%"
      destroy-on-close
      center
    >
      <xg-form v-bind="modalConfig" :modelValue="formData"></xg-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

import XgForm from '@/base-ui/form/index'

export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  components: { XgForm },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      },
      { deep: true }
    )

    return {
      dialogVisible,
      formData
    }
  }
})
</script>
<style lang="less" scoped></style>
