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
export default class TodosMoud extends VuexModule {}
