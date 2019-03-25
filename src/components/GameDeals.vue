<template>
  <v-container fluid>
    <h1>Deals for {{gameId}} will be displayed here:</h1>
    <v-layout align-space-around justify-start column fill-height>
      <v-flex xs12>
        <v-card color="orange lighten-3" class="black--text">
          <v-layout pa-2>
            <v-flex xs2>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" height="125px" contain></v-img>
            </v-flex>
            <v-flex xs6>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Game title</div>
                  <div>deal desc</div>
                  <div>(2014)</div>
                </div>
              </v-card-title>
            </v-flex>
            <v-flex xs2>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Price</div>
                  <div>orig</div>
                  <div>lower</div>
                </div>
              </v-card-title>
            </v-flex>
            <v-flex xs2>
              <v-card-title primary-title>
                <div>
                  <div class="headline">Agent</div>
                  <div>Activation</div>
                  <div>Buy</div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import Vue from "vue";

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
        Vue.$apiEndpoint +
          "/api/getDealsByGameId/" +
          this.gameId +
          "/?format=json"
      )
      .then(response => {
        console.log(response.data);
      });
  }
};
</script>

<style scoped>
</style>

