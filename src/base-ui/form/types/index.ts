type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field: string
  label: string
  type: IFormType
  rules?: any[]
  placeholder?: string
  options?: any[]

  //针对其他的特殊的属性
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: any
  colLayout?: any
  itemStyle?: any
}
