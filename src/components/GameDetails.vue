<template>
  <v-container fluid>
    <div v-if="game">
      <v-layout pa-2>
        <h1>{{game.title}}</h1>
        <!-- <h1 v-if="game.is_dlc">DLC</h1> -->
      </v-layout>
      <!-- Primary image for game, basic info -->
      <v-layout align-start justify-start row fill-height>
        <v-flex xs4 pa-2>
          <v-img
            class="white--text"
            height="200px"
            aspect-ratio="2"
            contain
            :src="game.header_image"
          ></v-img>
        </v-flex>
        <v-flex xs3>
          <v-layout align-start justify-center column fill-height pa-3>
            <h5>Жанры:</h5>
            <p>{{game.genres}}</p>
            <h5>Языки:</h5>
            <p>{{game.supported_languages}} English, Russian</p>
            <h5>Разработчик:</h5>
            <p>{{game.developers}}</p>
            <h5>Дата выхода:</h5>
            <p>{{game.release_date}} 01.01.1970</p>
          </v-layout>
        </v-flex>
        <v-flex xs2>
          <v-layout align-center justify-center column fill-height pa-3>
            <steam-price :game="game"></steam-price>
          </v-layout>
        </v-flex>
        <v-flex xs3>
          <metacriticsScore :game="game"></metacriticsScore>
        </v-flex>
        <v-spacer></v-spacer>
      </v-layout>
      <v-layout xs12 pa-3>
        
        <h5>{{game.short_description}}</h5>
      </v-layout>
      <v-divider></v-divider>
      <!-- Screen gallery -->
      <h5>Скриншоты:</h5>
      <v-layout align-start justify-space-between row>
        <v-flex xs12>
          <gallery :images="images" :index="index" @close="index = null"></gallery>
          <v-flex
            class="image"
            v-for="(image, imageIndex) in screenshots"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image + ')', width: '150px', height: '100px' }"
            aspect-ratio="0.5"
          ></v-flex>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import VueGallery from "vue-gallery";
import SteamPrice from "../components/SteamPrice";
import MetacriticsScore from "../components/MetacriticsScore";
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
      game: null,
      images: [],
      image_show_limit: 8,
      index: null
    };
  },
  computed: {
    screenshots() {
      var tempArr = [];
      for (var i = 0; i < this.image_show_limit; i++) {
        if (this.images[i]) tempArr.push(this.images[i]);
      }
      return tempArr;
    }
  },
  mounted() {},
  created() {
    axios
      .get(Vue.$apiEndpoint + "/api/games/" + this.gameId + "/?format=json")
      .then(response => {
        this.game = response.data;
        var temparr = response.data.screenshots_full.split(",");
        temparr.forEach(element => {
          this.images.push(element);
        });
      });
  },
  components: {
    gallery: VueGallery,
    steamPrice: SteamPrice,
    metacriticsScore: MetacriticsScore
  }
};
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>
