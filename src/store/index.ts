import { createStore, useStore as useVuexStore } from 'vuex'
import type { Store } from 'vuex'
import { IRootState, IStoreType } from './type'
import login from './login/login'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'xigua',
      age: 15
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  //
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  //这个地方返回vuex创建的store，包一层只是为了类型提示，防止出错
  //原生的vuex并不能提示模块的类型
  return useVuexStore()
}

export default store
