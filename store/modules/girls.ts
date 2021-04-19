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
  facebook: string;
  instrgram: string;
  description: string;
  age: number;
}

interface IUpload {
  storage: Object;
  file: File;
  nameOwner: string;
}
@Module({
  name: "girls",
  stateFactory: true,
  namespaced: true
})
export default class GirlsModule extends VuexModule {
  girls: Object = {};
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
    postGirl(`girl.json`, girl);
  }

  @Action
  async uploadImagesProfile({ storage, file, nameOwner }: IUpload) {
    console.log(`uploadImagesProfile`, storage, file, nameOwner);

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
}
