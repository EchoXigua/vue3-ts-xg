import { Module } from 'vuex'

import type { ILoginState } from './type'
import type { IRootState } from '../type'
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
    accountLoginAction({ commit }, payload: any) {
      console.log('执行login action', payload)
    },
    phoneLoginAction({ commit }, payload) {
      console.log('执行phone action', payload)
    }
  }
}

export default loginModule
