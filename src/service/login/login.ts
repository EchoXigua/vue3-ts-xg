import xgRequest from '../index'
import type { IAccount, IDataType, ILoginResult } from './type'
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/' //role/:id/menu
}

export function accountLoginRequest(account: IAccount) {
  return xgRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return xgRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function requestUserMenusByRoleId(id: number) {
  return xgRequest.get<IDataType>({
    url: LoginAPI.UserMenus + `${id}/menu`
  })
}
