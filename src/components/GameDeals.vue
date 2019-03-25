<template>
  <v-container fluid>
    <h1>Deals for {{gameId}} will be displayed here</h1>
    <v-layout align-space-around justify-start column fill-height>
      <v-flex xs12>фыва</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import Vue from 'vue'

export default {
  props: {
    gameId: {
      type: null,
      required: false
    }
  },
  data() {
    return {
      Deals: null
    };
  },
  created() {
    axios
      .get(
        Vue.$apiEndpoint + "/api/getDealsByGameId/" + this.gameId + "/?format=json"
      )
      .then(response => {
        console.log(response.data);
      });
  }
};
</script>

<style scoped>
</style>

