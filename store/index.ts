import Vue from "vue";
import Vuex, { Store } from "vuex";
import { initializeStores, modules } from "@/util/store-accessor";
Vue.use(Vuex);

// export const Store = new Vuex.Store({
//   strict: false
// });

// export default Store;

const initializer = (store: Store<any>) => initializeStores(store);
export const plugins = [initializer];
export * from "@/util/store-accessor"; // re-export the modules

// Export the root store. You can add mutations & actions here as well.
// Note that this is a standard Vuex store, not a vuex-module-decorator one.
// (Perhaps could be, but I put everything in modules)
export const store = new Store({
  plugins, // important!
  modules, // important!
  state: { root: "I am groot" },
  mutations: {},
  actions: {}
});
