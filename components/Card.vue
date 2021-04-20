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

      <b-button @click="edit(id)" variant="outline-primary">
        <img src="~/assets/svg/edit.svg" />
      </b-button>
      <b-button @click="showModal(id)" variant="outline-danger">
        <img src="~/assets/svg/delete.svg" />
      </b-button>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-modal ref="my-modal" hide-footer title="คุณแน่ใจแล้วว่าจะลบหรือไม่ ?">
      <div class="d-block text-center">
        <h3>ID: {{ id }} Name: {{ name }}</h3>
      </div>
      <b-button
        class="mt-3"
        variant="outline-danger"
        block
        @click="remove(id, url)"
      >
        แน่ใจแล้ว
      </b-button>
    </b-modal>
  </div>
</template>

<script>
import { deleteGirl } from "@/util/fetchGirls";
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
    edit(id) {
      this.$router.push({ path: `/edit/${id}` });
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    remove(id, url) {
      deleteGirl(`girl/${id}.json`);
      const storage = this.$fire.storage;
      let image = storage.refFromURL(url);
      image
        .delete()
        .then(() => {
          console.log(`image deleted`);
        })
        .catch(error => {
          console.log(`error`, error);
        });
      this.$refs["my-modal"].hide();
    }
  }
};
</script>
