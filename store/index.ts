import Vue from "vue";
import Vuex from "vuex";
import girl from "./modules/girl";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export const store = new Vuex.Store({
  modules: {
    girl
  },
  strict: debug
});
