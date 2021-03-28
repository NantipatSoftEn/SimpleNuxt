<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        label="Name:"
        description="We'll never share your email with anyone else."
      >
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
      <!-- <b-form-group id="input-group-2" label="Image:" label-for="input-2">
        <b-form-file
          v-model="file1"
          :state="Boolean(file1)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>

      </b-form-group> -->
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        facebook: "",
        instrgram: "",
        description: "",
        age: 0
      },
      show: true
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      axios.post();
      axios
        .post(
          "https://haram-nuxt-default-rtdb.firebaseio.com/girl.json",
          this.form
        )
        .then(res => console.log(res));
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.facebook = "";
      this.form.instrgram = "";
      this.form.description = "";
      this.form.age = 0;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
