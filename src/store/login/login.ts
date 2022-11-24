import { Module } from 'vuex'
import type { ILoginState } from './type'
import type { IRootState } from '../type'
//登录api
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import type { IAccount } from '@/service/login/type'

//本地保存token
import localeCache from '@/utils/cache'

//拿到router对象，往里面赋值菜单
import router from '@/router/index'

import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus'

//Module 接受两个泛型 第一个为自身store的类型， 第二个是总仓库的类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true, //开启命名空间
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      const routes = mapMenusToRoutes(userMenus)
      console.log(routes)

      routes.forEach((route) => {
        //router身上添加route的方法
        router.addRoute('main', route)
      })

      state.permissions = mapMenusToPermissions(userMenus)
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      //1.登录逻辑
      const res = await accountLoginRequest(payload)
      const { id, token } = res.data
      commit('changeToken', token)
      localeCache.setCache('token', token)

      //发送初始化的请求(完整的role/department)

      dispatch('getInitDataAction', null, { root: true }) //调用根里面的action

      //2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('', userInfo)
      //缓存用户信息
      localeCache.setCache('userInfo', userInfo)

      //3.菜单权限
      const userMenuResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenuResult.data
      commit('changeUserMenus', userMenus)
      localeCache.setCache('userMenus', userMenus)

      //4.跳转到首页
      router.push('/main')
    },

    loadLocalLogin({ commit, dispatch }) {
      const token = localeCache.getCache('token')
      if (token) {
        //如果token存在的话
        commit('changeToken', token)

        //本地加载  刷新操作
        dispatch('getInitDataAction', null, { root: true }) //调用根里面的action
      }
      const userInfo = localeCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localeCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    },
    phoneLoginAction({ commit }, payload) {
      console.log('执行phone action', payload)
    }
  }
}

export default loginModule
