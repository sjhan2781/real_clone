import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      userName: "notlogin",
      userEmail: "",
    },
    hi: "gg",
  },
  mutations: {
    setUserInfo(userInfo) {
      this.state.userInfo = userInfo;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getUserInfo: function (state) {
      return state.userInfo;
    },
    getHi() {
      return this.hi;
    },
  },
});