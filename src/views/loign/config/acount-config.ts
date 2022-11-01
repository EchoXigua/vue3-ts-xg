export const rules = {
  name: [
    {
      required: true,
      message: '用户名是必填内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个字母或者数字'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必填内容',
      // trigger: ['blur', 'change']
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,}$/,
      message: '密码必须是6位以上的字母或者数字'
    }
  ]
}
