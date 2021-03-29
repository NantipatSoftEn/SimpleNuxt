<template>
  <div>
    <b-card
      :title="name"
      :img-src="require('~/assets/img/mock1.jpg')"
      img-alt="Image"
      img-top
    >
      <b-card-text>
        <img src="~/assets/svg/facebook.svg" class="color-svg-facebook" />{{
          facebook
        }}
        {{ instrgram }}
      </b-card-text>
      <b-card-text>
        {{ description }}
      </b-card-text>

      <b-button variant="outline-primary">แก้ไข</b-button>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    name: String,
    facebook: String,
    instrgram: String,
    description: String,
    age: Number
  }
};
</script>
