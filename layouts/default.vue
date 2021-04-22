<template>
  <div class="container font-display">
    <NavBar />
    <Nuxt />
  </div>
</template>
<script>
export default {
  computed: {
    statusAPI: () => {
      setTimeout(() => {});
    }
  }
};
</script>
<style>
.font-display {
  font-family: "Pangolin", "Niramit", cursive;
}
</style>
