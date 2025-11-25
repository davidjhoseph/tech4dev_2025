import { createStore } from "vuex";
import { productStore } from "./product";
import { cartStore } from "./cart";
import { userStore } from "./user";
import { counterStore } from "./counter";
import { studentStore } from "./student";
// Create a new store instance.
export const store = createStore({
  modules: {
    productStore,
    cartStore,
    userStore,
    studentStore,
    counterStore,
  },
});
