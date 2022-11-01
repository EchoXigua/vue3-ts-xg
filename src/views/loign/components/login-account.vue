<template>
  <div class="login-account">
    <el-form
      ref="formRef"
      :model="form"
      status-icon
      :rules="rules"
      label-width="70px"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" show-password autocomplete="off" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/acount-config'
import type { FormInstance } from 'element-plus'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    //获取到store
    const store = useStore()
    const form = reactive({
      name: localCache.getCache('name'),
      password: localCache.getCache('password')
    })
    const formRef = ref<FormInstance>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            //记住密码，本地缓存
            localCache.setCache('name', form.name)
            localCache.setCache('password', form.password)
          } else {
            //不记住密码
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          //login模块里面的action
          store.dispatch('login/accountLoginAction', { ...form })
        }
      })
    }

    return {
      form,
      rules,
      formRef,
      loginAction
    }
  }
})
</script>
<style lang="less" scoped></style>
