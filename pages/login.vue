<template>
  <div class="col-md-6 bg-light">
    <div class="login d-flex align-items-center py-5">
      <!-- Demo content-->
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-7 mx-auto">
            <h3 class="display-4">
              Sing In
              <img
                src="https://nuxtjs.org/logos/nuxtjs-typo.svg"
                width="100"
                height="100"
              />
              <img
                src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-standard.svg"
                width="100"
                height="100"
              />
            </h3>

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
                  >Look password</label
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
                  <img src="~/assets/svg/redis.svg" />

                  <img src="~/assets/svg/docker.svg" />
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
<style>
.login,
.image {
  min-height: 100vh;
}
.form-control {
  font-weight: 600;
}
</style>
