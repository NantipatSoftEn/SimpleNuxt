<template>
  <b-container class="bv-example-row" fluid="md">
    <!-- {{ $fetchState }} -->
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <b-row>
        <b-col v-for="girl of items" :key="girl.key"
          ><Card
            :name="girl.name"
            :facebook="girl.facebook"
            :instrgram="girl.instrgram"
            :description="girl.description"
            :age="girl.age"
        /></b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import firebaseAPI from "../constants/firebaseAPI";
export default {
  data() {
    return {
      items: []
    };
  },
  async fetch() {
    this.items = await fetch(firebaseAPI).then(res => res.json());
  },
  computed: {
    filteredFruit() {
      return this.fruit.slice(0, 3);
    }
  }
  // https://michaelnthiessen.com/loop-number-v-for/
};
</script>
