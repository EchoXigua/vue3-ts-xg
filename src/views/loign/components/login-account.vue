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
        <el-input v-model="form.password" type="password" autocomplete="off" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/acount-config'
import type { FormInstance } from 'element-plus'
export default defineComponent({
  setup() {
    const form = reactive({
      name: '',
      password: ''
    })
    const formRef = ref<FormInstance>()

    const loginAction = () => {
      console.log('立即登录')
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('ok')
        }
      })
    }

    return {
      form,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>
<style lang="less" scoped></style>
