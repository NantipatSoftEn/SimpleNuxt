// This is the "store accessor":
// It initializes all the modules using a Vuex plugin (see store/index.ts)
// In here you import all your modules, call getModule on them to turn them
// into the actual stores, and then re-export them.

import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import TodosModule from "@/store/modules/todos-decor";
import GirlsModule from "@/store/modules/girls";

// Each store is the singleton instance of its module class
// Use these -- they have methods for state/getters/mutations/actions
// (result from getModule(...))
export let TodosDecorStore: TodosModule;
export let GirlsStore: GirlsModule;

// initializer plugin: sets up state/getters/mutations/actions for each store
export function initializeStores(store: Store<any>): void {
  TodosDecorStore = getModule(TodosModule, store);
  GirlsStore = getModule(GirlsModule, store);
}

// for use in 'modules' store init (see store/index.ts), so each module
// appears as an element of the root store's state.
// (This is required!)
export const modules = {
  todos: TodosModule,
  girls: GirlsModule
};

// console.log("end of store-accessor: TodosMudule=<", typeof TodosMoudule, ">"); // expect "function"
// // @ts-ignore ("accessed before being defined")
// console.log(" and Store=<", typeof TodosDecorStore, ">", TodosDecorStore); // expect "undefined", OK
