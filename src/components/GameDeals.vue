<template>
  <v-container fluid>
    <h2>Предложения:</h2>

    <v-progress-circular v-if="loading" :size="70" :width="7" color="orange" indeterminate></v-progress-circular>

    <div v-if="!loading">
      <v-layout align-space-around justify-center column fill-height>
        <v-flex xs12>
          <v-layout pa-1>
            <v-flex xs4>
              <h4>Название</h4>
            </v-flex>
            <v-flex xs2>
              <h4>Активация</h4>
            </v-flex>
            <v-flex xs2>
              <h4>Агент</h4>
            </v-flex>
            <v-flex xs2>
              <h4>Цена</h4>
            </v-flex>
            <v-flex xs2>
              <h4>Купить</h4>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout align-space-around justify-center column fill-height pa-1>
        <v-flex v-for="deal in Deals" :key="deal.id" xs12>
          <!-- <v-card :color="avilibilityStatusColor(deal.is_available)" class="black--text"> -->
          <v-layout>
            <v-flex xs4>{{deal.description}}</v-flex>
            <v-flex xs2>{{deal.activation}}</v-flex>
            <v-flex xs2>{{deal.agent}}</v-flex>
            <v-flex xs2>
              <div v-if="deal.is_available">{{deal.price_rur}} &#8381;</div>
              <div v-if="!deal.is_available">Недоступно</div>
            </v-flex>
            <v-flex xs2>
              <v-layout>
                <v-flex>
                  <v-btn flat icon color="red" :href="deal.deal_link" target="_blank">
                    <v-icon>add_shopping_cart</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>

          <!-- <v-divider></v-divider> -->
        </v-flex>
      </v-layout>
    </div>
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
      Deals: null,
      loading: true,
      errored: false
    };
  },
  computed: {},
  methods: {
    avilibilityStatusColor(isAviliable) {
      if (isAviliable) return "orange lighten-5";
      else return "grey lighten-3";
    }
  },
  created() {},
  mounted() {
    axios
      .get(
        Vue.$apiEndpoint +
          "/api/getDealsByGameId/" +
          this.gameId +
          "/?format=json"
      )
      .then(response => {
        //console.log(response.data);
        this.Deals = response.data;
        //console.log(error);
      })
      // eslint-disable-next-line
      .catch(error => {
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style scoped>
</style>

