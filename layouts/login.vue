<template>
  <div class="container-fluid">
    <div class="row no-gutter">
      <!-- The image half -->
      <div class="col-md-6 d-none d-md-flex bg-image"></div>

      <Nuxt />
    </div>
  </div>
</template>

<style>
.font-display {
  font-family: "Pangolin", "Niramit", cursive;
}
.bg-image {
  background-image: url("../assets/img/ammriss.jpg");
  background-size: cover;
  background-position: center center;
}
</style>
