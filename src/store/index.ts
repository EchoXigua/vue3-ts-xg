import { createStore } from 'vuex'
import { IRootState } from './type'
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

export default store
