import { createStore } from "vuex";
import IRootState from "./types";
import { auth } from "./modules/auth/index";

export default createStore<IRootState>({
  state: {
    darkMode: false,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
  },
});
