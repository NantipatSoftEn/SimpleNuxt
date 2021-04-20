<template>
  <div>
    <b-card
      :title="name"
      :img-src="url"
      img-height="350"
      img-width="350"
      img-alt="Image"
      img-top
    >
      <b-card-text>
        <img src="~/assets/svg/facebook.svg" />
        <a :href="'https://www.facebook.com/' + facebook"> {{ facebook }}</a>
      </b-card-text>
      <b-card-text>
        <img src="~/assets/svg/instagram.svg" />
        <a :href="'https://www.instagram.com/' + instrgram"> {{ instrgram }}</a>
      </b-card-text>
      <b-card-text>
        <img src="~/assets/svg/girl.svg" />
        {{ description }}
      </b-card-text>

      <b-button @click="editTest(id)" variant="outline-primary">แก้ไข</b-button>
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
    id: String,
    name: String,
    facebook: String,
    instrgram: String,
    description: String,
    age: Number,
    url: String
  },
  methods: {
    async editTest(id) {
      this.$router.push({ path: `/edit/${id}` });
    }
  }
};
</script>
