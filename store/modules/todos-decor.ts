import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
export type Todo = {
  done: Boolean;
  text: String;
};
@Module({
  name: "TodosDecor",
  stateFactory: true,
  namespaced: true
})
class TodosDecor extends VuexModule {
  list: Array<Todo> = [];

  @Mutation
  add(text: String) {
    this.list.push({
      text,
      done: false
    });
  }

  // @Mutation
  // toggle(todo: Todo) {
  //   todo.done = !todo.done;
  // }

  @Action({ commit: `add` })
  addTodo(e: Event) {
    //this.context.commit("add", text);
    return (<HTMLInputElement>e.target).value;
  }
}

export default getModule(TodosDecor);
