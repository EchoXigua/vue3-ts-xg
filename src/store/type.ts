import { ILoginState } from './login/type'
import { ISystemState } from './main/system/types'

export interface IRootState {
  name: string
  age: number
  department: any[]
  role: any[]
  menu: any[]
}

//因为vuex 类型不能结合模块,所以弄各个模块的类型，在这里
export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

//将模块的类型 和state的类型结合起来，变成自己的store类型
//不需要从vuex中引入类型了
export type IStoreType = IRootState & IRootWithModule
