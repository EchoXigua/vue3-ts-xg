import xgRequest from '../index'
import type { IAccount } from './type'

enum LoginAPI {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount) {
  return xgRequest.post({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
