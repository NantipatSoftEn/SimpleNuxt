import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import { json, statusAPI } from "../../util/helpFetch";
import firebaseAPI from "../../constants/firebaseAPI";

interface IGirl {
  name: string;
  facebook: string;
  instrgram: string;
  description: string;
  age: number;
}

type GenericObject = { [key: string]: any };
@Module({
  name: "girls",
  stateFactory: true,
  namespaced: true
})
export default class GirlsModule extends VuexModule {
  girls: GenericObject = {};

  @Mutation
  edit(id: string) {
    console.log(`edit`, id);
  }

  @Action
  editGirl(id: string) {
    console.log(` editGirl id`, id);

    this.context.commit("edit", id);
  }
}
