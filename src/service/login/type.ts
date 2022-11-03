export interface IAccount {
  name: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

export interface IDataType<T = any> {
  code: number
  //这个地方data的类型不能写死，因为返回的结果的类型是不确定的，所有使用泛型
  data: T
}
