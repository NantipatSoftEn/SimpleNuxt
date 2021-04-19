<template>
  <b-container class="bv-example-row" fluid="md">
    <!-- {{ $fetchState }} -->
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <div v-for="row of girls" :key="row.index">
        <b-row>
          <b-col v-for="girl of row" :key="girl[0]">
            <Card
              :id="girl[0]"
              :name="girl[1].name"
              :facebook="girl[1].facebook"
              :instrgram="girl[1].instrgram"
              :description="girl[1].description"
              :age="girl[1].age"
              :url="girl[1].url"
          /></b-col>
        </b-row>
      </div>
    </div>
  </b-container>
</template>

<script>
// import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import { GirlsStore } from "@/store";
import { fetchGirls } from "@/util/fetchGirls";
export default {
  data() {
    return {
      girls: []
    };
  },
  async fetch() {
    const obj = await fetchGirls(`girl.json`);
    const arr = Object.entries(obj);
    //console.log(`arr`, );

    while (arr.length) this.girls.push(arr.splice(0, 3));
  }
};
</script>
