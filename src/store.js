import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    colors: [],
    colorCount: 6,
    isHardNavigator: true,
    colorHeaderVar: "",
    mensajeDisplay: "",
  },
  actions: {
    hardToEasy({ commit }) {
      commit("hardToEasy");
    },
    easyTohard({ commit }) {
      commit("easyTohard");
    },
    reset({ commit }) {
      commit("reset");
    },
  },
  mutations: {
    hardToEasy(state) {
      state.isHardNavigator = false;
      state.colorCount = 3;
    },
    easyTohard(state) {
      state.isHardNavigator = true;
      state.colorCount = 6;
    },
    reset(state) {
      state.colors = [];
      state.colorCount = 6;
      state.isHardNavigator = true;
      state.colorHeaderVar = "";
      state.mensajeDisplay = "";
    },
  },
});
