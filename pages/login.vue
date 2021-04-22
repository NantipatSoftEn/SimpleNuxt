<template>
  <div>
    <img
      src="~/assets/img/ammriss.jpg"
      height="400"
      width="300"
      class="rounded mx-auto d-block"
    />
    <h3>Login page</h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        label="Username:"
        description="แสงสว่างธรรมชาติเกิดจากตัวอาทิตย์ แสงสว่างของชีวิตเกิดจากการปล่อยวาง"
      >
        <b-form-input
          v-model="form.email"
          type="text"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Password:"
        description="อย่าปล่อยให้ชีวิตของเราอยู่กับที่หรือถอยหลัง จงเดินหน้าและพัฒนาต่อไป"
      >
        <b-form-input
          v-model="form.password"
          type="password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  layout: "login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },

      show: true
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.username = "";
      this.form.password = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
