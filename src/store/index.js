import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isBackTop: false,
    cartGoods: [],
    cartGoods_length: 0,

  },
  mutations: {
    // 保存当前菜单栏的路径
    saveActive(state, pathName) {
      state.isBackTop = pathName;
    },
    // 购物车
    getCartGoods(state, pathName) {
      state.cartGoods = pathName;
    },
    // 购物车数量
    getCartGoods_length(state, pathName) {
      state.cartGoods_length = pathName;
    },

  }
})
