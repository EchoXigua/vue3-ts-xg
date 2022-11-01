<template>
  <div>
    <el-form
      ref="ruleFormRef"
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
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >Submit</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/phone-config'
export default defineComponent({
  setup() {
    const form = reactive({
      phone: '',
      password: ''
    })
    return {
      form,
      rules
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
