<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col v-for="girl of girls" :key="girl.key"
        ><Card
          :name="girl.name"
          :facebook="girl.facebok"
          :instrgram="girl.instrgram"
          :description="girl.description"
          :age="girl.age"
      /></b-col>
    </b-row>
    <!-- <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1>Nuxt Mountains</h1>
      <ul>
        <li v-for="(loadData, index) of loadDatas" :key="loadData.key">
          {{ index }} {{ loadData }}
        </li>
      </ul>
      <button @click="$fetch">Refresh</button>
    </div> -->
  </b-container>
</template>

<script lang="ts">
import axios from "axios";
import firebaseAPI from "../constants/firebaseAPI";
export default {
  data() {
    return {
      girls: []
    };
  },
  async fetch() {
    this.girls = await fetch(firebaseAPI).then(res => res.json());
  },
  methods: {
    // async getAll() {
    //   await this.getPromiseData().then(result => {
    //     console.log(result);
    //   });
    // },
    // getPromiseData() {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       const data = axios
    //         .get("https://haram-nuxt-default-rtdb.firebaseio.com/girl.json")
    //         .then(res => {
    //           return res;
    //         });
    //       resolve(data);
    //     }, 4000);
    //   });
    // }
  }
};
</script>
