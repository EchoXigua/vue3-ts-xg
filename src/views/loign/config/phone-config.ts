export const rules = {
  phone: [
    {
      required: true,
      message: '手机号是必填内容',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '手机号必须是11位数字'
    }
  ],
  password: [
    {
      required: true,
      message: '验证码是必填内容',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '验证码必须是6位数字'
    }
  ]
}
