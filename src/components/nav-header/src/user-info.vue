<template>
  <div>
    <el-dropdown>
      <span class="user">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        <span>{{ name }}</span>
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
import { defineComponent, computed } from 'vue'
import {
  ArrowDown,
  SwitchButton,
  User,
  Tools,
  UserFilled
} from '@element-plus/icons-vue'
import { useStore } from '@/store/index'
export default defineComponent({
  components: { ArrowDown, SwitchButton, User, Tools },
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    return {
      name,
      UserFilled
    }
  }
})
</script>
<style lang="less" scoped>
.user {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
