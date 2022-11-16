import { Module } from 'vuex'
import type { ISystemState } from './types'
import { IRootState } from '@/store/type'

import { getPageListData } from '@/service/main/system/system'

//Module 的第一个参数未state的类型，第二个为
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeUsersList(state, List: any[]) {
      state.usersList = List
    },
    changeUsersCount(state, count: number) {
      state.usersCount = count
    },
    changeRoleList(state, List: any[]) {
      state.roleList = List
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count
    },
    changeGoodsList(state, List: any[]) {
      state.goodsList = List
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count
    },
    changeMenuList(state, List: any[]) {
      state.menuList = List
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count
    }
  },
  getters: {
    pageListData(state) {
      //这里返回一个回调
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]

        //需要优化
        // switch (pageName) {
        //   case 'user':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      // switch (pageName) {
      //   case 'users':
      //     pageUrl = '/users/list'
      //     break
      //   case 'role':
      //     pageUrl = '/role/list'
      //     break
      // }
      const res = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = res.data

      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)

      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)

      // switch (pageName) {
      //   case 'user':
      //     commit('changeUserList', list)
      //     commit('changeUserCount', totalCount)
      //     break
      //   case 'role':
      //     commit('changeRoleList', list)
      //     commit('changeRoleCount', totalCount)
      //     break
      // }
    }
  }
}

export default systemModule
