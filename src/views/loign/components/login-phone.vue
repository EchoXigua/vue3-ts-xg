<template>
  <div>
    <el-form
      ref="formRef"
      :model="form"
      status-icon
      :rules="rules"
      label-width="70px"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone" autocomplete="off" />
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <div class="get-code">
          <el-input
            v-model="form.password"
            type="password"
            autocomplete="off"
          />
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/phone-config'
import type { FormInstance } from 'element-plus'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const form = reactive({
      phone: '',
      password: ''
    })
    const formRef = ref<FormInstance>()
    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          //login模块里面的action
          store.dispatch('login/phoneLoginAction', { ...form })
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
<style lang="less" scoped>
.get-code {
  display: flex;
  .get-btn {
    margin-left: 8px;
  }
}
</style>
