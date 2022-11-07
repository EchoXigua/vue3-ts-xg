<template>
  <div class="nav-header">
    <el-icon class="fold-menu" :size="30" @click="FoldClick">
      <Expand v-if="isFold"></Expand>
      <Fold v-else></Fold>
    </el-icon>
    <div class="content">
      <div>面包靴</div>
      <div>
        <user-info></user-info>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'
export default defineComponent({
  components: { Fold, Expand, UserInfo },
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
<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    cursor: pointer;
    font-size: 30px;
  }
  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
