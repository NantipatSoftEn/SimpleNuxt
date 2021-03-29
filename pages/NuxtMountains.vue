<template>
  <p v-if="$fetchState.pending">Fetching mountains...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Nuxt Mountains</h1>
    <ul>
      <li v-for="mountain of mountains" :key="mountain.key">
        {{ mountain.name }}
      </li>
    </ul>
    <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mountains: []
    };
  },
  async fetch() {
    this.mountains = await fetch(
      "https://haram-nuxt-default-rtdb.firebaseio.com/girl.json"
    ).then(res => res.json());
  }
};
</script>
