<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs v-model="currentTab" type="border-card" class="demo-tabs" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>

        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="loginRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLogin"
      >立即登录</el-button
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { User, Iphone } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
export default defineComponent({
  components: { User, Iphone, LoginAccount, LoginPhone },
  setup() {
    //1.定义属性
    const isKeepPassword = ref(false)
    //初始值null 类型推导为null
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const loginRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref<string>('account')

    //2.定义方法
    const handleLogin = () => {
      if (currentTab.value === 'account') {
        //账号密码登录
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        //手机号登录
        loginRef.value?.loginAction()
      }
    }
    return {
      isKeepPassword,
      accountRef,
      loginRef,
      currentTab,
      handleLogin
    }
  }
})
</script>
<style lang="less" scoped>
.login-panel {
  margin-bottom: 120px;
  width: 320px;
  .title {
    text-align: center;
  }
}
.account-control {
  display: flex;
  justify-content: space-around;
}

.login-btn {
  width: 320px;
}

// .demo-tabs > .el-tabs__content {
//   padding: 32px;
//   color: #6b778c;
//   font-size: 32px;
//   font-weight: 600;
// }
// .demo-tabs .custom-tabs-label .el-icon {
//   vertical-align: middle;
// }
// .demo-tabs .custom-tabs-label span {
//   vertical-align: middle;
//   margin-left: 4px;
// }
</style>
