import { createStore, useStore as useVuexStore } from 'vuex'
import type { Store } from 'vuex'
import { IRootState, IStoreType } from './type'
import login from './login/login'
import system from './main/system/system'

import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'xigua',
      age: 15,
      department: [],
      role: [],
      menu: []
    }
  },
  mutations: {
    changeDepartment(state, list) {
      state.department = list
    },
    changeRole(state, list) {
      state.role = list
    },
    changeMenu(state, list) {
      state.menu = list
    }
  },
  actions: {
    async getInitDataAction({ commit }) {
      const departRes = await getPageListData('/department/list', {
        offset: 0,
        size: 100
      })
      const { list: departList } = departRes.data

      const roleRes = await getPageListData('/role/list', {
        offset: 0,
        size: 100
      })
      const { list: roleList } = roleRes.data

      const menuRes = await getPageListData('/menu/list', {})
      const { list: menuList } = menuRes.data

      commit('changeDepartment', departList)

      commit('changeRole', roleList)

      commit('changeMenu', menuList)
    }
  },
  modules: {
    login,
    system
  }
})

export function setupStore() {
  //
  store.dispatch('login/loadLocalLogin')

  store.dispatch('getInitDataAction')
}

export function useStore(): Store<IStoreType> {
  //这个地方返回vuex创建的store，包一层只是为了类型提示，防止出错
  //原生的vuex并不能提示模块的类型
  return useVuexStore()
}

export default store
