<template>
  <v-container fluid>
    <div v-if="game">
      <v-layout>
        <h1>{{game.title}}</h1>
        <!-- <h1 v-if="game.is_dlc">DLC</h1> -->
      </v-layout>
      <!-- Primary image for game, basic info -->
      <v-layout align-start justify-start row fill-height xs12>
        <v-flex xs4>
          <v-img
            class="white--text"
            height="200px"
            aspect-ratio="1.7"
            contain
            :src="game.image_link"
          ></v-img>
        </v-flex>
        <v-flex xs8>
          <v-layout align-start justify-center column fill-height pa-3>
            <h4>Жанры:</h4>
            <h3>{{game.genre}}</h3>
            <h4>Особенности:</h4>
            <h3>{{game.features}}</h3>
            <h4>Разработчик:</h4>
            <h3>{{game.developer}}</h3>
            <h4>Дата выхода:</h4>
            <h3>{{game.release_date}}</h3>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout xs12>
        <h5>{{game.description}} Описание: пока что пустое, нужно сделать нормальную БД</h5>
      </v-layout>
      <v-divider></v-divider>
      <!-- Screen gallery -->
      <h5>Screenshots:</h5>
      <v-layout align-start justify-space-between row>
        <v-flex xs12>
          <gallery :images="images" :index="index" @close="index = null"></gallery>
          <v-flex
            class="image"
            v-for="(image, imageIndex) in screenshots"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image + ')', width: '200px', height: '100px' }"
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
        if (this.images[i])
        tempArr.push(this.images[i]);
      }
      return tempArr;
    }
  },
  mounted() {},
  created() {
    axios
      .get(
        "http://84.201.130.111:8000/api/games/" + this.gameId + "/?format=json"
      )
      .then(response => {
        this.game = response.data;
        var str = response.data.screenshots.replace(/'/g, '"');
        var temparr = JSON.parse(str);
        temparr.forEach(element => {
          this.images.push(element.url);
        });
      });
  },
  components: {
    gallery: VueGallery
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