<template>
  <v-container>
    <v-layout align-center justify-center column fill-height>
      <v-flex xs4 offset-xs-4>
        <h1>Добро пожаловать</h1>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center column fill-height>
      <v-flex>
        <news-block></news-block>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-space-around row fill-height>
      <v-tabs centered color="amber " dark icons-and-text>
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

export default {
  data() {
    return {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
    GameTopList
  }
};
</script>
