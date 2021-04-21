<template>
  <div>
    <div v-if="statusAPI.status === 200">
      <!-- <b-alert variant="success" show>create success ☀️</b-alert> -->
      <Alert
        :dismissCountDown="dismissCountDown"
        :countDownChanged="countDownChanged"
        type="success"
        message="edit success ☀️"
        :dismissSecs="dismissSecs"
      />
    </div>
    <div v-if="statusAPI.status !== 200 && statusAPI.status != 0">
      <Alert
        :dismissCountDown="dismissCountDown"
        :countDownChanged="countDownChanged"
        type="danger"
        message="edit fail"
        :dismissSecs="dismissSecs"
      />
    </div>
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
          @change="onFileChange"
        ></b-form-file>
      </b-form-group>
      <b-form-group id="input-group-2" label="ภาพเก่า:" label-for="input-2">
        <div id="preview">
          <img
            v-if="form.url"
            :src="form.url"
            :style="{ marginRight: `20px` }"
          />
          <img v-if="preview" :src="preview" />
        </div>
      </b-form-group>
      <b-button type="submit" variant="primary">แก้ไข</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import { GirlsStore } from "@/store";
import { fetchGirls } from "@/util/fetchGirls";
export default {
  data() {
    return {
      form: {
        name: "",
        facebook: "",
        instrgram: "",
        description: "",
        age: 0,
        url: "",
        date: ""
      },
      imageProfile: null,
      preview: null,
      show: true,
      dismissSecs: 7,
      dismissCountDown: 0
    };
  },
  async fetch() {
    this.form = await fetchGirls(`girl/${this.$route.params.id}.json`);
  },
  computed: {
    statusAPI: () => {
      return GirlsStore.statusAPI;
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      this.form.date = new Date();
      this.form.age = parseInt(this.form.age);
      this.form.url = await this.uploadImageProfile(
        this.imageProfile,
        this.form.name
      );
      alert(JSON.stringify(this.form));
      await GirlsStore.insertGirl(this.form);
      this.showAlert();
    },
    onReset(event) {
      event.preventDefault();
      GirlsStore.OnReset(this.form);
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    async uploadImageProfile(file, nameOwner) {
      const detail = {
        storage: this.$fire.storage,
        file: file,
        nameOwner: nameOwner + new Date()
      };
      return await GirlsStore.uploadImageProfile(detail);
    },

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.preview = URL.createObjectURL(file);
    }
  }
};
</script>
