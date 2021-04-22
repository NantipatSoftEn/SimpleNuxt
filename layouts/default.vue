<template>
  <div class="container font-display">
    =
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
.font-display {
  font-family: "Pangolin", "Niramit", cursive;
}
</style>
