import districts from "./districts";
import urHelp from "./ur-help";

export default {
  namespaced: true,
  state: {
    from: null
  },
  getters: {
    from(state) {
      return state.from;
    }
  },
  mutations: {
    setFrom(state, from) {
      state.from = from;
    }
  },
  modules: {
    districts,
    urHelp
  }
};
