
export const counterStore = {
  namespaced: true,
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  getters: {
    getCounter(state) {
      return state.count;
    },
  },
  actions: {
    updateCounter({ commit }, type) {
      if (type === "increment") {
        commit("increment");
      } else {
        commit("decrement");
      }
    },
    async getProducts({ commit, dispatch }) {
      const isUserLoggedIn = dispatch("checkUserIsLoggedIn");
      if (isUserLoggedIn) {
        const productService = new ProductService();
        const products = await productsService.getProducts();
        commit("updateProducts", products);
      }
    },
    checkUserIsLoggedIn(_) {
      return true;
    },
  },
};
