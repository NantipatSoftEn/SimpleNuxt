<template>
  <div class="container-fluid font-body">
    <div class="row no-gutter">
      <!-- The image half -->
      <div class="col-md-6 d-none d-md-flex bg-image"></div>

      <Nuxt />
    </div>
  </div>
</template>

<style>
.font-body {
  font-family: "Pangolin", "Niramit", cursive;
}
.bg-image {
  background-image: url("../assets/img/ammriss.jpg");
  background-size: cover;
  background-position: center center;
}
.form-control {
  font-weight: 600;
}
</style>
