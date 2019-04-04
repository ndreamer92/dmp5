<template>
  <v-container fluid>
    <h1>Предложения: </h1>
    <div v-if="Deals">
      <v-layout align-space-around justify-start column fill-height pa-2>
        <v-flex v-for="deal in Deals" :key="deal.id" xs12>
          <v-card :color=avilibilityStatusColor(deal.is_available) class="black--text">
            <v-layout pa-2>
              <v-flex xs2>
                <v-img
                  src="https://www.freeiconspng.com/uploads/no-image-icon-15.png"
                  height="125px"
                  contain
                ></v-img>
              </v-flex>
              <v-flex xs4>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Предложение:</div>
                    <div>{{deal.description}}</div>
                    <div>{{deal.id}}</div>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex xs2>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Цена:</div>
                    <div v-if="deal.is_available">{{deal.price_rur}}</div>
                    <div v-if="!deal.is_available">Недоступно</div>
                    <div v-if="deal.is_available">Rub</div>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex xs2>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{deal.agent}}</div>
                    <div>Активация:</div>
                    <div>{{deal.activation}}</div>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex xs2>
                <v-card-title primary-title>
                  <div>
                    <v-btn flat color="red" :href="deal.deal_link" target="_blank">
                      <v-icon>add_shopping_cart</v-icon>Купить
                    </v-btn>
                  </div>
                  <div>
                    <v-btn flat color="red">
                      <v-icon>bookmark</v-icon>Сохранить
                    </v-btn>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
          <v-divider></v-divider>
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
      Deals: null
    };
  },
  computed: {

  },
  methods : {
    avilibilityStatusColor(isAviliable){
      if (isAviliable)
        return 'orange lighten-5'
      else
        return 'grey lighten-3'
    }
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
        //console.log(response.data);
        this.Deals = response.data;
      });
  }
};
</script>

<style scoped>
</style>

