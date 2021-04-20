import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import { fetchGirls, postGirl } from "@/util/fetchGirls";
import axios from "axios";

interface IGirl {
  name: string;
  facebook: string | null;
  instrgram: string | null;
  description: string | null;
  age: number;
  url: string;
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
    url: ""
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
  async edit(obj: IGirl) {
    this.girls = obj;
  }

  @Action
  async editGirl(id: string) {
    const obj = await fetchGirls(`girl/${id}.json`);
    this.context.commit("edit", obj);
  }

  @Action
  async insertGirl(girl: any) {
    this.context.commit("insert", await postGirl(`girl.json`, girl));
  }

  @Action
  deleteGirl(id: String) {}

  @Action
  deleteImages({ storage, url }: IUpload) {
    let image = storage.refFromURL(url);
    image
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
}
