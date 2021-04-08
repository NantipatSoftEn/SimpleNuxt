import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import { fetchGirls } from "../../util/fetchGirls";

interface IGirl {
  name: string;
  facebook: string;
  instrgram: string;
  description: string;
  age: number;
}

type GenericObject = { [key: string]: any };
@Module({
  name: "todos",
  stateFactory: true,
  namespaced: true
})
export default class GirlsModule extends VuexModule {
  girls: GenericObject = {};

  @Mutation
  async getAllGirls() {
    this.girls = await fetchGirls();
  }

  @Action({ commit: "getAllGirls" })
  fetch() {
    console.log(`fetch s`);
  }

  @Mutation
  async MutationAllGirls() {
    this.girls = await fetchGirls();
  }
}
