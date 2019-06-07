<template>
  <v-container>
    <v-layout align-center justify-center column fill-height>
      <v-flex xs4 offset-xs-4>
        <h1>Добро пожаловать</h1>
      </v-flex>
    </v-layout>
    <v-layout align-space-between justify-center column fill-height>
      <v-flex xs6 offset-xs-3 pa-3>
        <news-block></news-block>
        <dmp-search-bar></dmp-search-bar>
      </v-flex>
    </v-layout>
    <v-spacer></v-spacer>
    <v-layout align-center justify-space-around row fill-height>
      <v-tabs centered color="amber " icons-and-text>
        <v-tabs-slider color="black"></v-tabs-slider>

        <v-tab href="#tab-1">
          PC
          <!-- <v-icon>phone</v-icon> -->
        </v-tab>

        <v-tab href="#tab-2">
          PS4
          <!-- <v-icon>favorite</v-icon> -->
        </v-tab>

        <v-tab href="#tab-3">
          Other
          <!-- <v-icon>account_box</v-icon> -->
        </v-tab>

        <v-tab-item :value="'tab-1'">
          <v-layout align-center justify-space-around row fill-height>
            <span>
              <game-top-list :games="topGames" :headerText="'Popular Games'"></game-top-list>
            </span>
            <span>
              <game-top-list :games="recentAdded" :headerText="'Recently Added'"></game-top-list>
            </span>
            <span>
              <game-top-list :games="topGames" :headerText="'Yet another top'"></game-top-list>
            </span>
          </v-layout>
        </v-tab-item>

        <v-tab-item :value="'tab-2'">
          <v-layout align-center justify-space-around row fill-height>
            <span>
              <game-top-list :games="topGames" :headerText="'Popular Games'"></game-top-list>
            </span>
            <span>
              <game-top-list :games="recentAdded" :headerText="'Recently Added'"></game-top-list>
            </span>
            <span>
              <game-top-list :games="topGames" :headerText="'Yet another top'"></game-top-list>
            </span>
          </v-layout>
        </v-tab-item>

        <v-tab-item :value="'tab-3'">
          <v-layout align-center justify-space-around row fill-height>
            <span>
              <game-top-list :games="topGames" :headerText="'Popular Games'"></game-top-list>
            </span>
            <span>
              <game-top-list :games="recentAdded" :headerText="'Recently Added'"></game-top-list>
            </span>
            <span>
              <game-top-list :games="topGames" :headerText="'Yet another top'"></game-top-list>
            </span>
          </v-layout>
        </v-tab-item>
      </v-tabs>
    </v-layout>
  </v-container>
</template>



<script>
import NewsBlock from "../components/NewsBlock";
import GameTopList from "../components/GameTopList";
import dmpSearchBar from "../components/dmpSearchBar"

export default {
  data() {
    return {
         };
  },
  created() {
    //this.topGames = this.$store.getters.getTopGames;
  },
  computed: {
    topGames: function() {
      var temp = this.$store.getters.getTopGames;
      var result;
      if (temp) {
        result = temp.slice(0, 5);
      }
      return result;
    },
    recentAdded: function() {
      var temp = this.$store.getters.getRecentAddedGames;
      var result;
      if (temp) {
        result = temp.slice(0, 5);
      }
      return result;
    }
  },

  components: {
    NewsBlock,
    GameTopList,
    dmpSearchBar
  }
};
</script>
