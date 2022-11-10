<template>
  <div class="nav-header">
    <el-icon class="fold-menu" :size="30" @click="FoldClick">
      <Expand v-if="isFold"></Expand>
      <Fold v-else></Fold>
    </el-icon>
    <div class="content">
      <xg-breadcrumb :breadcrumbs="breadcrumbs"></xg-breadcrumb>
      <div>
        <user-info></user-info>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'
import XgBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb/index'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: { Fold, Expand, UserInfo, XgBreadcrumb },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const FoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    //面包屑数据
    const store = useStore()

    const route = useRoute()

    // const breadcrumbs: IBreadcrumb[] = pathMapBreadcrumbs(
    //   userMenus,
    //   currentPath
    // )
    //直接赋值会有问题 没有响应式

    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const currentPath = route.path
      //userMenus  currentPath  发生变化的时候会重新计算
      /*
       * 这个有点不太懂computed原理。
        vue是怎么实现computed?
       */
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      FoldClick,
      breadcrumbs
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
