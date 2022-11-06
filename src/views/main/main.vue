<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '200px'">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @fold-change="FoldChange"></nav-header>
        </el-header>
        <el-main class="page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavHeader from '@/components/nav-header'
import NavMenu from '@/components/nav-menu'

export default defineComponent({
  components: { NavMenu, NavHeader },
  setup() {
    const isCollapse = ref(false)
    const FoldChange = (fold: boolean) => {
      isCollapse.value = fold
    }
    return {
      isCollapse,
      FoldChange
    }
  }
})
</script>
<style lang="less" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main-content,
.page {
  height: 100%;
}
.page-content {
  height: calc(100%-48px);
  background-color: #f0f2f5;
}

.el-header,
.el-footer {
  display: flex;
  color: #332;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
  background-color: #fff;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  .el-main {
    color: #333;
    text-align: center;
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
