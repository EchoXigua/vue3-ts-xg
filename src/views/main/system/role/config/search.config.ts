import { IForm } from '@/base-ui/form/types'

export const searchConfig: IForm = {
  formItems: [
    // {
    //   field: 'id',
    //   label: 'id',
    //   type: 'input',
    //   placeholder: '请输入id'
    // },
    {
      field: 'name',
      label: '角色名',
      type: 'input',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      label: '权限介绍',
      type: 'input',
      placeholder: '请输入权限介绍'
    },
    {
      field: 'time',
      label: '创建时间',
      type: 'datepicker',
      placeholder: '请选择创建时间',
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
