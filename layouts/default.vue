<template>
  <div class="container font-body">
    <NavBar :email="email" />
    <Nuxt />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(`auth`, {
      email: `email`
    })
  }
};
</script>
<style>
.font-body {
  font-family: "Pangolin", "Niramit", cursive;
}
</style>
