import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiReturn: [],
    currencies: [],
    loadingStatus: "notLoading",
    firstCurrency: null,
    secondCurrency: null
  },
  mutations: {},
  actions: {},
  modules: {}
});
