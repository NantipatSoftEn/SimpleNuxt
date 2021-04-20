<template>
  <div>
    {{ $route.params.id }}
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group label="Name:" description="">
        <b-form-input
          v-model="form.name"
          type="text"
          placeholder="Enter Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Facebook:" label-for="input-2">
        <b-form-input
          v-model="form.facebook"
          type="text"
          placeholder="Enter Facebook"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Instrgram:" label-for="input-2">
        <b-form-input
          v-model="form.instrgram"
          type="text"
          placeholder="Enter Instrgram"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Description:" label-for="input-2">
        <b-form-input
          v-model="form.description"
          type="text"
          placeholder="Enter description"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Age:" label-for="input-2">
        <b-form-input
          v-model="form.age"
          type="number"
          placeholder="Enter Age"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Image:" label-for="input-2">
        <b-form-file
          v-model="imageProfile"
          :state="Boolean(imageProfile)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
          accept=".jpg, .png"
        ></b-form-file>
        <!-- <div v-for="f in form.file" :key="f.key">
          <img :src="f" class="preview" />
        </div> -->
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import { GirlsStore } from "@/store";
export default {
  data() {
    return {
      form: {
        name: "",
        facebook: "",
        instrgram: "",
        description: "",
        age: 0,
        url: ""
      },
      imageProfile: null,
      show: true
    };
  },
  async fetch() {
    this.form = await fetchGirls(`girl/${this.$route.params.id}.json`);
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      this.form.age = parseInt(this.form.age);
      // this.form.url = await this.uploadImagesProfile(
      //   this.imageProfile,
      //   this.form.name
      // );
      alert(JSON.stringify(this.form));
      //GirlsStore(this.form);
    },
    onReset(event) {
      event.preventDefault();
      GirlsStore.OnReset(this.form);
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    async uploadImagesProfile(file, nameOwner) {
      const detail = {
        storage: this.$fire.storage,
        file: file,
        nameOwner: nameOwner
      };
      return await GirlsStore.uploadImagesProfile(detail);
    }
  }
};
</script>
