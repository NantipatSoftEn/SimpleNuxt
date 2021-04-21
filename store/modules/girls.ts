import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import { fetchGirls, postGirl, deleteGirl } from "@/util/fetchGirls";
interface IGirl {
  name: string;
  facebook: string | null;
  instrgram: string | null;
  description: string | null;
  age: number;
  url: string;
  date: String;
}
interface IUpload {
  storage: any;
  file: File;
  nameOwner: string;
  url: string;
}

interface IStatus {
  status: number;
  statusText: string;
}
@Module({
  name: "girls",
  stateFactory: true,
  namespaced: true
})
export default class GirlsModule extends VuexModule {
  girls: IGirl = {
    name: "",
    facebook: "",
    instrgram: "",
    description: "",
    age: 0,
    url: "",
    date: ""
  };

  statusAPI: IStatus = {
    status: 0,
    statusText: ""
  };

  @Mutation
  async insert(status: IStatus) {
    this.statusAPI = status;
  }

  @Mutation
  edit(obj: IGirl) {
    this.girls = obj;
  }

  @Mutation
  get(obj: IGirl) {
    this.girls = obj;
  }

  @Mutation
  remove(status: IStatus) {
    this.statusAPI = status;
  }

  @Action
  async editGirl(id: string) {
    const obj = await fetchGirls(`girl/${id}.json`);
    this.context.commit("edit", obj);
  }

  @Action
  async insertGirl(girl: any) {
    console.log(`girl`, girl);

    this.context.commit("insert", await postGirl(`girl.json`, girl));
  }

  @Action
  async deleteGirl(id: String) {
    this.context.commit("remove", await deleteGirl(id));
  }

  @Action
  async deleteImagesProfile({ storage, url }: IUpload) {
    let image = storage.refFromURL(url);
    await image
      .delete()
      .then(() => {
        console.log(`image deleted`);
      })
      .catch((error: any) => {
        console.log(`error`, error);
      });
  }

  @Action
  async uploadImageProfile({ storage, file, nameOwner }: IUpload) {
    if (!file.type.match("image.*")) {
      alert("Please upload an image.");
      return;
    }

    const metadata = {
      contentType: file.type
    };

    const imageRef = storage.ref(`${nameOwner}`);
    const uploadTask = await imageRef
      .put(file, metadata)
      .then((snapshot: any) => {
        // Once the image is uploaded, obtain the download URL, which
        // is the publicly accessible URL of the image.
        return snapshot.ref.getDownloadURL().then((url: String) => {
          return url;
        });
      })
      .catch((error: any) => {
        console.error("Error uploading image", error);
      });

    console.log(`uploadTask`, uploadTask);

    return uploadTask;
  }

  @Action
  OnReset(form: IGirl) {
    form.name = "";
    form.facebook = "";
    form.instrgram = "";
    form.description = "";
    form.age = 0;
    form.url = "";
    return form;
  }

  @Action
  async getGirls() {
    //return await fetchGirls(`girl.json`);
    this.context.commit("get", await fetchGirls(`girl.json`));
  }

  @Action
  resetStatusAPI() {
    this.context.commit("resetStatus");
  }
}
