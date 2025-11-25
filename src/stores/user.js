export const userStore = {
  namespaced: true,
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  actions: {
    updateUser({ commit }, user) {
        commit("updateUser", user);
    
    },
  },
};
