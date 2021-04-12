<template>
  <b-container class="bv-example-row" fluid="md">
    <!-- {{ $fetchState }} -->
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <b-row cols="3">
        <b-col v-for="girl of girls" :key="girl.key"
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
    this.girls = await fetchGirls();
  }
};
</script>
