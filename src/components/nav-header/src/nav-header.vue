<template>
  <div>
    <el-icon :size="16" style="cursor: pointer" @click="FoldClick">
      <Expand v-if="isFold"></Expand>
      <Fold v-else></Fold>
    </el-icon>
    header111
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
export default defineComponent({
  components: { Fold, Expand },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const FoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      FoldClick
    }
  }
})
</script>
<style scoped></style>
