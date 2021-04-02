import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  MutationAction
} from "vuex-module-decorators";
import { fetchTodosDecor } from "../../util/fetchTodosDecor";
import store from "..";

@Module({
  dynamic: true,
  name: "Todos",
  namespaced: true,
  store
})
class Todos extends VuexModule {
  todos = [];
  isLoadingTodos = false;

  @MutationAction({
    mutate: ["todos", "isLoadingTodos"],
    rawError: true
  })
  async loadTodos({ commit }: { commit: Function }) {
    try {
      commit("setIsLoadingTodos", true);

      const todos = await fetchTodosDecor();
      return {
        todos,
        isLoadingTodos: false
      };
    } finally {
      commit("setIsLoadingTodos", false);
    }
  }

  @Mutation
  setIsLoadingTodos(isLoading: boolean) {
    this.isLoadingTodos = isLoading;
  }
}

export default getModule(Todos);
