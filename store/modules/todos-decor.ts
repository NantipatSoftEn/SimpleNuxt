import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule
} from "vuex-module-decorators";

export type Todo = {
  done: boolean;
  text: string;
};
@Module({
  name: "todos",
  stateFactory: true,
  namespaced: true
})
export default class TodosModule extends VuexModule {
  list: Array<Todo> = [];

  @Mutation
  add(text: string) {
    console.log(`add ${text}`);
    this.list.push({
      text,
      done: false
    });
  }

  @Mutation
  toggle(todo: Todo) {
    todo.done = !todo.done;
  }

  @Action({ commit: "add" })
  addTodo(e: Event) {
    // let text = (<HTMLInputElement>e.target).value;
    // this.context.commit("add", text);
    // change reset string todosDecor.vue
    // text = "";
  }
}

// export default getModule(TodosDecor);
