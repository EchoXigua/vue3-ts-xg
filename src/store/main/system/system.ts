import { Module } from 'vuex'
import type { ISystemState } from './types'
import { IRootState } from '@/store/type'

import { getPageListData } from '@/service/main/system/system'

//Module 的第一个参数未state的类型，第二个为
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, count: number) {
      state.userCount = count
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const res = await getPageListData(payload.url, payload.queryInfo)
      const { list, totalCount } = res.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default systemModule
