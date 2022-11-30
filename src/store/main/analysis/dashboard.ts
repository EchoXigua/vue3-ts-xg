import { Module } from 'vuex'

import { IDashboard } from './types'
import { IRootState } from '@/store/type'

import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard'

const dashboardModule: Module<IDashboard, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategorySaleCount(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryFavorCount(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountRes = await getCategoryGoodsCount()
      console.log(categoryCountRes)
      commit('changeCategoryGoodsCount', categoryCountRes.data)

      const categorySaleRes = await getCategoryGoodsSale()
      commit('changeCategorySaleCount', categorySaleRes.data)

      const categoryFavorRes = await getCategoryGoodsFavor()
      commit('changeCategoryFavorCount', categoryFavorRes.data)

      const addressGoodsSaleRes = await getAddressGoodsSale()
      commit('changeAddressGoodsSale', addressGoodsSaleRes.data)
    }
  }
}

export default dashboardModule
