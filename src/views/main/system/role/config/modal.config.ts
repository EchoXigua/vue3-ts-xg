import { IForm } from '@/base-ui/form/types'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '角色名',
      type: 'input',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      label: '角色介绍',
      type: 'input',
      placeholder: '请输入角色介绍'
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {}
}
