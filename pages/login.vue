<template>
  <div class="col-md-6 bg-light">
    <div class="login d-flex align-items-center py-5">
      <!-- Demo content-->
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-7 mx-auto">
            <h3 class="display-4">Split page!</h3>
            <p class="text-muted mb-4">
              Create a login split page using Bootstrap 4.
            </p>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <div class="form-group mb-3">
                <input
                  id="inputEmail"
                  type="email"
                  placeholder="Email address"
                  autofocus=""
                  class="form-control rounded-pill border-0 shadow-sm px-4"
                />
              </div>
              <div class="form-group mb-3">
                <input
                  id="inputPassword"
                  type="password"
                  placeholder="Password"
                  class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                />
              </div>
              <div class="custom-control custom-checkbox mb-3">
                <input
                  id="customCheck1"
                  type="checkbox"
                  checked
                  class="custom-control-input"
                />
                <label for="customCheck1" class="custom-control-label"
                  >Look Password</label
                >
              </div>
              <button
                type="submit"
                class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
              >
                Sign in
              </button>
              <div class="text-center d-flex justify-content-between mt-4">
                <p>
                  Snippet by
                  <a
                    href="https://bootstrapious.com/snippets"
                    class="font-italic text-muted"
                  >
                    <u>Boostrapious</u></a
                  >
                </p>
              </div>
            </b-form>
          </div>
        </div>
      </div>
      <!-- End -->
    </div>
  </div>
</template>

<script>
export default {
  layout: "login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },

      show: true
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      const auth = this.$fire.auth;
      await auth
        .signInWithEmailAndPassword("inw@gmail.com", "1234567")
        .then(user => {
          console.log(`user`, user);
          this.$router.push({ path: `/` });
        })
        .catch(error => {
          console.log(`error`, error);
        });
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
<style scoped>
.login,
.image {
  min-height: 100vh;
}
</style>
