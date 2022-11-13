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
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUserList(state, List: any[]) {
      state.userList = List
    },
    changeUserCount(state, count: number) {
      state.userCount = count
    },
    changeRoleList(state, List: any[]) {
      state.roleList = List
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName
      let pageUrl = ''
      switch (pageName) {
        case 'user':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
          break
      }
      const res = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = res.data

      switch (pageName) {
        case 'user':
          commit('changeUserList', list)
          commit('changeUserCount', totalCount)
          break
        case 'role':
          commit('changeRoleList', list)
          commit('changeRoleCount', totalCount)
          break
      }
    }
  }
}

export default systemModule
