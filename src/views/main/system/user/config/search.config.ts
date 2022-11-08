import { IForm } from '@/base-ui/form/types'

export const searchConfig: IForm = {
  formItems: [
    {
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名'
    },
    {
      label: '密码',
      type: 'password',
      placeholder: '请输入密码'
    },
    {
      label: '爱好',
      type: 'select',
      placeholder: '请选择爱好',
      options: [
        { label: '篮球', value: '篮球' },
        { label: '足球', value: '足球' }
      ]
    },
    {
      label: '时间',
      type: 'datepicker',
      placeholder: '请选择时间',
      otherOptions: {
        'start-placeholder': '开始日期',
        'end-placeholder': '结束日期',
        type: 'range'
      }
    }
  ],
  labelWidth: '120px',
  colLayout: {
    span: 8
  },
  itemStyle: {
    padding: '10px 30px'
  }
}
