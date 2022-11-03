<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="200px">
        <nav-menu />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">Header</el-header>
        <el-main class="page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import NavMenu from '@/components/nav-menu'

export default defineComponent({
  components: { NavMenu },
  setup() {
    return {}
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
