import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import { json, statusAPI } from "../../util/helpFetch";

const firebaseAPI: string =
  "https://haram-nuxt-default-rtdb.firebaseio.com/girl.json";

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
}
