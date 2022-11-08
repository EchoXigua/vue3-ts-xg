type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  label: string
  type: IFormType
  rules?: any[]
  placeholder?: string
  options?: any[]

  //针对其他的特殊的属性
  otherOptions?: any
}
