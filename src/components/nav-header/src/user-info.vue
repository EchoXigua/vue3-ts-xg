<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar size="small" :icon="UserFilled" />
        <span>用户名</span>
        <el-icon>
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            ><el-icon><SwitchButton /></el-icon>退出登录</el-dropdown-item
          >
          <el-dropdown-item divided
            ><el-icon><User /></el-icon>用户信息</el-dropdown-item
          >
          <el-dropdown-item
            ><el-icon><Tools /></el-icon>系统管理</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import {
  ArrowDown,
  SwitchButton,
  User,
  Tools,
  UserFilled
} from '@element-plus/icons-vue'
export default defineComponent({
  components: { ArrowDown, SwitchButton, User, Tools },
  setup() {
    return {
      UserFilled
    }
  }
})
</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
