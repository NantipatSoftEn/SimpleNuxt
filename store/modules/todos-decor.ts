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
  name: "todos",
  stateFactory: true,
  namespaced: true
})
export default class TodosMoud extends VuexModule {
  list: Array<Todo> = [];

  @Mutation
  add(text: String) {
    // console.log(`add ${text}`);
    this.list.push({
      text,
      done: false
    });
  }

  @Mutation
  toggle(todo: Todo) {
    todo.done = !todo.done;
  }

  @Action
  addTodo(e: Event) {
    let text = (<HTMLInputElement>e.target).value;

    console.log(`addTodo:${text}`);

    this.context.commit("add", text);
    // change reset string todosDecor.vue
    // text = "";
  }
}

// export default getModule(TodosDecor);
