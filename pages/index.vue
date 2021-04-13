<template>
  <b-container class="bv-example-row" fluid="md">
    <!-- {{ $fetchState }} -->
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <div v-for="row of girls" :key="row.index">
        <b-row>
          <b-col v-for="girl of row" :key="girl.key"
            ><Card
              :name="girl.name"
              :facebook="girl.facebook"
              :instrgram="girl.instrgram"
              :description="girl.description"
              :age="girl.age"
              :url="girl.url"
          /></b-col>
        </b-row>
      </div>
    </div>
  </b-container>
</template>

<script>
// import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import { GirlsStore } from "@/store";
import { fetchGirls } from "../util/fetchGirls";
export default {
  data() {
    return {
      girls: []
    };
  },
  async fetch() {
    const obj = await fetchGirls();
    const len = Object.keys(obj).length;
    const arr = Object.values(obj);
    while (arr.length) this.girls.push(arr.splice(0, 3));
    console.log(this.girls);
  }
};
</script>
