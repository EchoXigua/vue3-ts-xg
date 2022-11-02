import { Module } from 'vuex'
import type { ILoginState } from './type'
import type { IRootState } from '../type'
//登录api
import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from '@/service/login/type'

//Module 接受两个泛型 第一个为自身store的类型， 第二个是总仓库的类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true, //开启命名空间
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      //登录逻辑
      const res = await accountLoginRequest(payload)
      console.log('执行login action', payload)
    },
    phoneLoginAction({ commit }, payload) {
      console.log('执行phone action', payload)
    }
  }
}

export default loginModule
