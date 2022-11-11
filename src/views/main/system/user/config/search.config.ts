import { IForm } from '@/base-ui/form/types'

export const searchConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      label: '密码',
      type: 'password',
      placeholder: '请输入密码'
    },
    {
      field: 'hobby',
      label: '爱好',
      type: 'select',
      placeholder: '请选择爱好',
      options: [
        { label: '篮球', value: '篮球' },
        { label: '足球', value: '足球' }
      ]
    },
    {
      field: 'time',
      label: '时间',
      type: 'datepicker',
      placeholder: '请选择时间',
      otherOptions: {
        'start-placeholder': '开始日期',
        'end-placeholder': '结束日期',
        type: 'daterange'
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
